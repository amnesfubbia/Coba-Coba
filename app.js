/* ============================================================
   SILMIKAFFAH — Engine Aplikasi (app.js)
   Router hash, state, helper UI, template detail entri,
   halaman menu, pencarian global, koleksi, pengaturan.
   ============================================================ */
"use strict";
const App = window.SILMIKAFFAH.App = {};
const $ = id => document.getElementById(id);

/* ---------- State & Persistence ---------- */
const LS = {
  get(k,d){ try{ const v=localStorage.getItem("silk_"+k); return v===null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem("silk_"+k, JSON.stringify(v)); }catch(e){} }
};
let SETTINGS = Object.assign({theme:"light", font:"b", prayerMethod:"KEMENAG", asrMethod:"JUMHUR", city:"jakarta", cityName:"Jakarta", useGeo:false}, LS.get("settings",{}));
let COLLECTION = LS.get("collection",[]);
let RECENT = LS.get("recent",[]);
let CAL_CURSOR = new Date();
let timerId = null;

const saveSettings = () => LS.set("settings", SETTINGS);
const saveCollection = () => LS.set("collection", COLLECTION);
const saveRecent = () => LS.set("recent", RECENT.slice(0,12));

/* ---------- Helpers ---------- */
const esc = s => String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
/* fmtRp didefinisikan di calc.js (global scope bersama) */
const dayOfYear = () => { const n=new Date(); return Math.floor((n - new Date(n.getFullYear(),0,0)) / 864e5); };
const inCollection = id => COLLECTION.includes(id);
const addRecent = id => { RECENT = RECENT.filter(x=>x!==id); RECENT.unshift(id); saveRecent(); };

function toast(msg, err){
  const t = $("toast");
  t.textContent = msg;
  t.classList.toggle("err", !!err);
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ---------- Icons ---------- */
const I = {
  pillar:'<path d="M5 21V10l7-6 7 6v11M9 21v-6h6v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  iman:'<path d="M12 21s-7.5-4.7-10-9C.6 8.6 2.6 5 6 5c2.1 0 3.9 1.2 4.8 3h2.4C14.1 6.2 15.9 5 18 5c3.4 0 5.4 3.6 4 7-2.5 4.3-10 9-10 9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  quran:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 7c1.2-1 2.8-1.2 4-.6V13c-1.2-.6-2.8-.4-4 .6-1.2-1-2.8-1.2-4-.6V6.4c1.2-.6 2.8-.4 4 .6z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  hadis:'<path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  fiqih:'<path d="M12 3v18M8 21h8M5 7h14M7 7l-3 7h6zM17 7l-3 7h6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  doa:'<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 14a4 4 0 0 1 8 0M12 7v3M10.5 8.5h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  akhlak:'<path d="M12 21s-8-5.4-8-11a5 5 0 0 1 9.5-2.2A5 5 0 0 1 23 10c0 5.6-11 11-11 11z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  sirah:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5.5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  tokoh:'<circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 20c1.4-3.4 4-5 7-5s5.6 1.6 7 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  kalender:'<rect x="3.5" y="5" width="17" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 3v4M16 3v4M3.5 10h17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  pendidikan:'<path d="M12 4 2.5 9 12 14l9.5-5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5" fill="none" stroke="currentColor" stroke-width="2"/>',
  arab:'<path d="M4 5c3 2 5 6 5 11M20 5c-3 2-5 6-5 11M12 6v14M9 17h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  peradaban:'<path d="M4 21h16M5 21V10l7-5 7 5v11M9 21v-5h6v5M12 5v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  kontemporer:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3.5c3 2.6 3 14.4 0 17M12 3.5c-3 2.6-3 14.4 0 17" fill="none" stroke="currentColor" stroke-width="2"/>',
  search:'<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  bookmark:'<path d="M6 4h12v17l-6-4.5L6 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  bookmarkFill:'<path d="M6 4h12v17l-6-4.5L6 21z" fill="currentColor"/>',
  share:'<circle cx="6" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="18" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.4 10.8l7.2-3.6M8.4 13.2l7.2 3.6" stroke="currentColor" stroke-width="2"/>',
  play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  pause:'<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/>',
  chev:'<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  back:'<path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>',
  heart:'<path d="M12 21s-8-5.4-8-11a5 5 0 0 1 9.5-2.2A5 5 0 0 1 23 10c0 5.6-11 11-11 11z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  gear:'<circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  audio:'<path d="M4 10v4h3l4 4V6L7 10z" fill="currentColor"/><path d="M15.5 9.5a4 4 0 0 1 0 5M18 7a7.5 7.5 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  map:'<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/>',
  clock:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  alert:'<path d="M12 4L2.5 20h19z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v4.5M12 17.2v.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  info:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v5M12 8v.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  layers:'<path d="M12 3.5 21 8l-9 4.5L3 8zM3 12.5l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  arrowL:'<path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowR:'<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  home:'<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  external:'<path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
};
function icon(name, size){
  const s = size||20;
  return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" aria-hidden="true">'+(I[name]||I.book)+'</svg>';
}

/* ---------- Status ---------- */
const STATUS = {
  ready:["Siap", "status-ready"],
  verify:["Perlu verifikasi", "status-verify"],
  pending:["Belum tersedia", "status-pending"]
};
function statusPill(e){
  if(!e || e.status==="ready") return "";
  const s = STATUS[e.status] || STATUS.pending;
  return '<span class="status-pill '+s[1]+'">'+s[0]+'</span>';
}

/* ---------- Blok Arab standar (WAJIB di seluruh aplikasi) ---------- */
function arabicBlock(a){
  if(!a || (!a.text && !a.translit && !a.arti)) return "";
  let h = '<div class="arabic-block">';
  if(a.text) h += '<div class="arabic-text" dir="rtl" lang="ar">'+esc(a.text)+'</div>';
  if(a.translit) h += '<div class="arabic-translit">'+esc(a.translit)+'</div>';
  if(a.arti) h += '<div class="arabic-translation">'+esc(a.arti)+'</div>';
  h += '<div class="arabic-meta">'+audioUI(a.audio, a.audio_src, "Audio bacaan Arab")+'</div>';
  if(a.source) h += '<div class="arabic-src">Sumber: '+esc(a.source)+'</div>';
  return h + '</div>';
}
function audioUI(url, src, label){
  if(url){
    return '<div class="audio-box" data-audio="'+esc(url)+'">'
      +'<button class="audio-btn" data-action="play" aria-label="Putar audio">'+icon("play")+'</button>'
      +'<div class="audio-info"><div class="audio-title">'+esc(label||"Audio")+'</div>'
      +'<div class="audio-progress"><i></i></div>'
      +'<div class="audio-src">'+(src?esc(src):"")+'</div></div></div>';
  }
  return '<div class="audio-unavail">'+icon("audio",16)+'<span>Audio belum tersedia — konten audio memerlukan sumber berlisensi.</span></div>';
}

/* ---------- Breadcrumb ---------- */
function crumbs(items){
  return '<nav class="crumbs" aria-label="Jejak halaman">'+items.map((c,i)=>{
    const sep = i>0?'<span class="sep">/</span>':'';
    const el = c.href ? '<a data-nav="'+c.href+'">'+esc(c.label)+'</a>' : '<span>'+esc(c.label)+'</span>';
    return sep+el;
  }).join("")+'</nav>';
}

/* ---------- Relasi & Sumber ---------- */
function relLink(id){
  if(getEntry(id)) return {href:"#/entry/"+id, label:getEntry(id).title};
  if(/^surah-\d+$/.test(id)) return {href:"#/surah/"+id.split("-")[1], label:"Surah "+DB.surah(+id.split("-")[1])[1]};
  if(DB.EVENTS.some(e=>e.id===id)) return {href:"#/event/"+id, label:DB.EVENTS.find(e=>e.id===id).title};
  return null;
}
function relatedBlock(e){
  if(!e.related || !e.related.length) return "";
  const links = e.related.map(relLink).filter(Boolean);
  if(!links.length) return "";
  return '<div class="section-title"><h2>Konten Terkait</h2></div>'
    + links.map(l=>'<div class="row" data-nav="'+l.href+'"><span class="row-icon">'+icon("layers",18)+'</span><span class="grow"><span class="rt">'+esc(l.label)+'</span></span><span class="chev">'+icon("chev",18)+'</span></div>').join("");
}
function sourcesBlock(e){
  const srcs = (e.sources||[]).map(k=>DB.SOURCES[k]).filter(Boolean);
  if(!srcs.length) return "";
  return '<div class="section-title"><h2>Sumber</h2></div><div class="source-list">'
    + srcs.map(s=>'<div class="source-item"><span class="si-type">'+esc(s.type)+'</span><span><b>'+esc(s.title)+'</b>'+(s.note?'<br><span class="muted small">'+esc(s.note)+'</span>':"")+'</span></div>').join("")
    + '</div>';
}

/* ---------- Template Detail Entri Universal ---------- */
function entryView(id){
  const e = getEntry(id);
  if(!e) return errorView("Entri tidak ditemukan.");
  addRecent(e.id);
  const menu = DB.MENUS.find(m=>m.id===e.menu);
  const mat = menu ? menu.materials.find(m=>m.id===e.material) : null;
  let cr = [{label:"Home", href:"#/home"},{label:menu?menu.name:"", href:menu?"#/menu/"+menu.id:null}];
  if(mat) cr.push({label:mat.name, href:"#/menu/"+menu.id});
  if(e.sub){ const sm = subLabel(e); if(sm) cr.push({label:sm}); }
  cr.push({label:e.title});

  let h = '<div class="page"><div class="detail-head">'+crumbs(cr)
    + '<h1 class="detail-title">'+esc(e.title)+' '+statusPill(e)+'</h1>'
    + (e.summary?'<p class="detail-summary">'+esc(e.summary)+'</p>':"")
    + (e.sequence?'<span class="badge-num" style="margin-top:8px">Urutan gerakan #'+e.sequence+'</span>':"")
    + '<div class="detail-actions">'
    + '<button class="btn btn-ghost" data-action="bookmark" data-id="'+e.id+'">'+(inCollection(e.id)?icon("bookmarkFill",16)+" Tersimpan":icon("bookmark",16)+" Simpan")+'</button>'
    + '<button class="btn btn-ghost" data-action="share" data-id="'+e.id+'">'+icon("share",16)+' Bagikan</button>'
    + '</div></div>';

  h += arabicBlock(e.arabic);

  if(e.type==="hadith"){
    h += '<div class="callout info">'+icon("info",18)+'<div><b>Perawi:</b> '+esc(e.rawi||"—")+'<br><b>Referensi:</b> '+esc(e.kitab||"—")+'<br><b>Derajat:</b> '+esc(e.derajat||"—")+'</div></div>';
  }
  if(e.type==="person" && e.person){
    h += '<div class="callout info">'+icon("tokoh",18)+'<div>'
      + '<b>Nama lain:</b> '+esc(e.person.alt||"—")+'<br>'
      + '<b>Lahir:</b> '+esc(e.person.birth||"—")+'<br>'
      + '<b>Wafat:</b> '+esc(e.person.death||"—")+'<br>'
      + '<b>Lokasi:</b> '+esc(e.person.loc||"—")
      + '</div></div>';
  }
  if(e.type==="place" && e.place){
    const p=e.place;
    h += '<div class="callout info">'+icon("map",18)+'<div><b>Jenis:</b> '+esc(p.type||"—")+'<br><b>Lokasi:</b> '+esc(p.loc||"—")+'</div></div>';
    if(p.lat && p.lon){
      h += '<a class="btn btn-ghost" style="margin-top:4px" target="_blank" rel="noopener" href="https://www.google.com/maps?q='+p.lat+','+p.lon+'">'+icon("external",16)+' Buka di peta</a>';
    }
  }
  if(e.type==="bacaan" || e.type==="doa"){
    h += '<div class="callout info">'+icon("audio",18)+'<div>Setiap bacaan Arab menyertakan teks Arab, transliterasi, arti, audio (bila tersedia), dan sumber — sesuai standar global SILMIKAFFAH.</div></div>';
  }

  h += '<div class="prose">';
  (e.body||[]).forEach(sec=>{
    h += '<h4>'+esc(sec.h||"")+'</h4>';
    if(sec.p) sec.p.forEach(p=>h+='<p>'+esc(p)+'</p>');
    if(sec.list) h += '<ul>'+sec.list.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>';
  });
  h += '</div>';

  if(e.tags && e.tags.length) h += '<div class="chips" style="margin-top:14px">'+e.tags.map(t=>'<span class="chip tag">#'+esc(t)+'</span>').join("")+'</div>';
  h += sourcesBlock(e);
  h += relatedBlock(e);
  h += '</div>';
  return h;
}

/* ---------- Halaman Menu (materi → submateri → entri) ---------- */
function subLabel(e){
  const map = {
    "wajib":"Wajib","sunnah":"Sunnah","tata-cara":"Tata Cara","gerakan":"Gerakan","bacaan":"Bacaan",
    "ketentuan":"Ketentuan","kondisi-khusus":"Kondisi Khusus","jenis":"Jenis","fitur":"Fitur","level":"Tahap",
    "tauhid":"Tauhid","asmaul-husna":"Asmaul Husna","sub":"Submateri"
  };
  return e.sub ? (map[e.sub]||e.sub) : null;
}
function menuView(menuId){
  const menu = DB.MENUS.find(m=>m.id===+menuId);
  if(!menu) return errorView("Menu tidak ditemukan.");
  // Menu khusus
  if(menu.id===3) return quranView();
  if(menu.id===10) return kalenderView(new Date());

  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:menu.name}])
    + '<h1 class="h1">'+icon(menu.icon,22)+' '+esc(menu.name)+'</h1>'
    + '<p class="muted" style="margin-top:6px">'+esc(menu.desc)+'</p>';

  menu.materials.forEach(mat=>{
    const entries = DB.ENTRIES.filter(e=>e.menu===menu.id && e.material===mat.id);
    if(!entries.length) return;
    h += '<div class="section-title"><h2>'+esc(mat.name)+'</h2></div>';
    // submateri grouping
    const subs = {};
    entries.forEach(e=>{ if(e.sub){ (subs[e.sub]=subs[e.sub]||[]).push(e);} });
    const mainEntries = entries.filter(e=>!e.sub);
    mainEntries.forEach(e=>{
      h += rowEntry(e, zakatHref(e));
    });
    Object.keys(subs).forEach(sk=>{
      const label = subLabel({sub:sk}) || sk;
      h += '<div class="h3" style="margin:14px 0 8px;color:var(--text-2)">'+esc(label)+'</div>';
      subs[sk].forEach(e=> h += rowEntry(e, zakatHref(e)));
    });
  });
  h += '</div>';
  return h;
}
function zakatHref(e){
  return (e.calc && e.calc!=="feature") ? "#/zakat/"+e.calc : null;
}
function rowEntry(e, href){
  const seq = e.sequence ? ' <span class="badge-num">#'+e.sequence+'</span>' : "";
  return '<div class="row" data-nav="'+(href||"#/entry/"+e.id)+'">'
    + '<span class="row-icon">'+icon(typeIcon(e.type),18)+'</span>'
    + '<span class="grow"><span class="rt">'+esc(e.title)+seq+'</span>'
    + (e.summary?'<span class="rs">'+esc(e.summary)+'</span>':"")
    + '</span>'+statusPill(e)+'<span class="chev">'+icon("chev",18)+'</span></div>';
}
/* Tautan generik: entri / surah / ayat */
function entryHref(id){
  if(id.indexOf("ayat-")===0) return "#/quran/ayat/"+id.slice(5);
  if(id.indexOf("surah-")===0) return "#/surah/"+id.slice(6);
  return "#/entry/"+id;
}
function typeIcon(t){
  return {article:"book", hadith:"hadis", doa:"doa", bacaan:"audio", person:"tokoh", event:"sirah",
    place:"map", term:"layers", asmaul:"star", movement:"grid", lesson:"pendidikan", feature:"layers", guide:"book"}[t]||"book";
}

/* ---------- Jelajah ---------- */
function browseView(){
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Jelajah"}])
    + '<h1 class="h1">Jelajah</h1><p class="muted" style="margin-top:4px">14 menu utama SILMIKAFFAH — setiap topik memiliki satu rumah utama; menu lain hanya menautkan.</p>'
    + '<div class="card-grid" style="margin-top:14px">';
  DB.MENUS.forEach(m=>{
    const count = DB.ENTRIES.filter(e=>e.menu===m.id).length;
    h += '<div class="card menu-card tappable" data-nav="#/menu/'+m.id+'">'
      + '<div class="mc-top"><span class="menu-icon">'+icon(m.icon,20)+'</span><span class="mc-count">'+count+' entri</span></div>'
      + '<h3>'+esc(m.name)+'</h3><p>'+esc(m.desc)+'</p></div>';
  });
  h += '</div></div>';
  return h;
}

/* ---------- Pencarian Global ---------- */
function searchIndex(){
  const idx = [];
  DB.ENTRIES.forEach(e=>{
    idx.push({id:e.id, type:"entry", cat:menuName(e.menu), title:e.title, kw:(e.summary+" "+e.tags.join(" ")+" "+e.body.map(b=>(b.h||"")+(b.p?b.p.join(" "):"")+(b.list?b.list.join(" "):"")).join(" ")).toLowerCase()});
  });
  DBQ.SURAHS.forEach(s=>{
    idx.push({id:"surah-"+s[0], type:"surah", cat:"Al-Qur'an", title:"Surah "+s[1]+" — "+s[3], kw:(s[1]+" "+s[3]+" surah "+(s[4]==="Makkiyah"?"makkiyah":"madaniyah")).toLowerCase()});
  });
  Object.keys(DBQ.AYAT).forEach(k=>{
    const a = DBQ.AYAT[k], s = DBQ.surah(a.s);
    idx.push({id:"ayat-"+k, type:"ayat", cat:"Al-Qur'an", title:"QS. "+s[1]+" "+a.s+":"+a.a, kw:(a.arti+" "+s[1]).toLowerCase()});
  });
  DB.EVENTS.forEach(e=>{
    idx.push({id:"event-"+e.id, type:"event", cat:"Kalender & Sejarah", title:e.title, kw:(e.desc+" "+e.month).toLowerCase()});
  });
  DB.PLACES.forEach(p=>{
    idx.push({id:"place-"+p.id, type:"place", cat:"Ziarah", title:p.name, kw:(p.history+" "+p.loc).toLowerCase()});
  });
  return idx;
}
const SIDX = searchIndex();
function menuName(mid){ const m=DB.MENUS.find(x=>x.id===mid); return m?m.name:"Entri"; }
const SEARCH_CATS = ["Semua"].concat([...new Set(SIDX.map(x=>x.cat))].sort());
let searchCat = "Semua";
function searchView(q, cat){
  q = (q||"").trim().toLowerCase();
  if(cat) searchCat = cat;
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Search"}])
    + '<h1 class="h1">Pencarian Global</h1>'
    + '<p class="muted small" style="margin-top:4px">Mencari seluruh entity: ayat, surah, hadis, doa, fiqih, tokoh, sejarah, istilah, Asmaul Husna, dan tempat.</p>'
    + '<div class="search-bar" style="margin-top:12px"><div class="search-input-wrap">'+icon("search")+'<input class="search-input" id="search-input" type="search" placeholder="Cari mis. Ramadan, Bilal, zakat…" value="'+esc(q)+'"></div></div>'
    + '<div class="chips" style="margin:10px 0">'
    + SEARCH_CATS.map(c=>'<button class="chip'+(searchCat===c?" active":"")+'" data-nav="#/search/'+encodeURIComponent(q)+"/"+encodeURIComponent(c)+'">'+esc(c)+'</button>').join("")
    + '</div>';
  if(!q){
    h += '<div class="empty-state">'+icon("search")+'<h4>Mulai mengetik</h4><p>Hasil akan dikelompokkan berdasarkan kategori sumber.</p></div>';
    return h+'</div>';
  }
  let results = SIDX.filter(x=> x.title.toLowerCase().includes(q) || x.kw.includes(q));
  if(searchCat!=="Semua") results = results.filter(x=>x.cat===searchCat);
  if(!results.length){
    h += '<div class="empty-state">'+icon("search")+'<h4>Tidak ditemukan</h4><p>Pencarian "'+esc(q)+'" tidak menghasilkan hasil di kategori ini. Coba kata kunci lain.</p></div>';
    return h+'</div>';
  }
  const groups = {};
  results.forEach(r=>{ (groups[r.cat]=groups[r.cat]||[]).push(r); });
  Object.keys(groups).forEach(cat=>{
    h += '<div class="search-group"><h4>'+esc(cat)+' ('+groups[cat].length+')</h4>';
    groups[cat].forEach(r=>{
      h += '<div class="row" data-nav="'+searchHref(r)+'"><span class="row-icon">'+icon(searchIcon(r.type),18)+'</span><span class="grow"><span class="rt">'+esc(r.title)+'</span></span><span class="chev">'+icon("chev",18)+'</span></div>';
    });
    h += '</div>';
  });
  return h+'</div>';
}
function searchHref(r){
  if(r.type==="entry") return "#/entry/"+r.id;
  if(r.type==="surah") return "#/surah/"+r.id.split("-")[1];
  if(r.type==="ayat") return "#/quran/ayat/"+r.id.split("-")[1];
  if(r.type==="event") return "#/event/"+r.id.slice(6);
  if(r.type==="place") return "#/entry/"+r.id.slice(6);
  return "#/entry/"+r.id;
}
function searchIcon(t){ return t==="surah"?"quran":t==="ayat"?"quran":t==="event"?"sirah":t==="place"?"map":typeIcon(t); }

/* ---------- Koleksi ---------- */
function koleksiView(){
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Koleksi"}])
    + '<h1 class="h1">Koleksi</h1><p class="muted small" style="margin-top:4px">Koleksi hanya menyimpan ID entri — tidak membuat salinan konten.</p>';
  if(!COLLECTION.length){
    h += '<div class="empty-state">'+icon("heart")+'<h4>Koleksi masih kosong</h4><p>Simpan ayat, hadis, doa, artikel, atau tokoh untuk dibaca kembali.</p></div>';
    return h+'</div>';
  }
  COLLECTION.forEach(id=>{
    const e = getEntry(id);
    if(e){ h += rowEntry(e); return; }
    if(id.indexOf("ayat-")===0){
      const a = DBQ.AYAT[id.slice(5)];
      if(!a) return;
      const s = DBQ.surah(a.s);
      h += '<div class="row" data-nav="#/quran/ayat/'+id.slice(5)+'"><span class="row-icon">'+icon("quran",18)+'</span>'
        + '<span class="grow"><span class="rt">QS. '+esc(s[1])+' · Ayat '+a.a+'</span><span class="rs">'+esc(a.arti)+'</span></span>'
        + '<span class="chev">'+icon("chev",18)+'</span></div>';
    } else if(id.indexOf("surah-")===0){
      const s = DBQ.surah(+id.slice(6));
      if(!s) return;
      h += '<div class="row" data-nav="#/surah/'+s[0]+'"><span class="row-icon">'+icon("quran",18)+'</span>'
        + '<span class="grow"><span class="rt">Surah '+esc(s[2])+'</span><span class="rs">'+esc(s[3])+' · '+s[5]+' ayat</span></span>'
        + '<span class="chev">'+icon("chev",18)+'</span></div>';
    }
  });
  return h+'</div>';
}

/* ---------- Pengaturan ---------- */
function settingsView(){
  const city = DB.CITIES.find(c=>c.id===SETTINGS.city);
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Pengaturan"}])
    + '<h1 class="h1">Pengaturan</h1>';

  h += '<div class="set-group"><h3>Tampilan</h3><div class="card">';
  h += setRow("Tema gelap (AMOLED)", "Mode terang / gelap", '<label class="switch"><input type="checkbox" id="set-theme" '+(SETTINGS.theme==="dark"?"checked":"")+'><i></i></label>');
  h += '<div class="set-row"><div><div class="sr-t">Ukuran teks</div><div class="sr-d">A–C</div></div><div class="range-row" style="flex:1;max-width:160px"><input type="range" id="set-font" min="0" max="2" step="1" value="'+(SETTINGS.font==="a"?0:SETTINGS.font==="c"?2:1)+'"><span class="tiny muted" id="font-val">'+(SETTINGS.font==="a"?"A":SETTINGS.font==="c"?"C":"B")+'</span></div></div>';
  h += '</div></div>';

  h += '<div class="set-group"><h3>Waktu Shalat</h3><div class="card">';
  h += setSelect("Metode perhitungan", "Metode fajar & isya", "set-prayer", Object.keys(CALC.PRAY_METHODS).map(k=>[k, CALC.PRAY_METHODS[k].name]), SETTINGS.prayerMethod);
  h += setSelect("Metode Asar", "Bayangan Asar", "set-asr", Object.keys(CALC.ASR_METHODS).map(k=>[k, CALC.ASR_METHODS[k].name]), SETTINGS.asrMethod);
  h += setSelect("Lokasi", "Untuk perhitungan waktu shalat", "set-city", DB.CITIES.map(c=>[c.id, c.name]), SETTINGS.city);
  h += '<div class="set-row"><div><div class="sr-t">Gunakan lokasi perangkat</div><div class="sr-d">GPS (izin diperlukan)</div></div><button class="btn btn-ghost" data-action="geolocate">'+icon("map",16)+' Deteksi</button></div>';
  h += '<p class="tiny muted" style="margin-top:8px">Perkiraan astronomis — untuk keperluan resmi gunakan jadwal lembaga setempat.</p>';
  h += '</div></div>';

  h += '<div class="set-group"><h3>Data</h3><div class="card">';
  h += '<div class="set-row"><div><div class="sr-t">Reset koleksi & riwayat</div><div class="sr-d">Hapus data lokal perangkat ini</div></div><button class="btn btn-ghost" data-action="reset">Reset</button></div>';
  h += '<div class="set-row"><div><div class="sr-t">Tentang & status data</div><div class="sr-d">Kebijakan konten dan sumber</div></div><button class="btn btn-ghost" data-nav="#/tentang">Buka</button></div>';
  h += '</div></div>';
  h += '</div>';
  return h;
}
function setRow(t,d,ctrl){ return '<div class="set-row"><div><div class="sr-t">'+t+'</div><div class="sr-d">'+d+'</div></div>'+ctrl+'</div>'; }
function setSelect(t,d,id,opts,val){
  return '<div class="set-row" style="flex-wrap:wrap"><div style="flex:1;min-width:140px"><div class="sr-t">'+t+'</div><div class="sr-d">'+d+'</div></div>'
    + '<select class="input" id="'+id+'" style="max-width:220px">'+opts.map(o=>'<option value="'+o[0]+'" '+(o[0]===val?"selected":"")+'>'+esc(o[1])+'</option>').join("")+'</select></div>';
}

/* ---------- Tentang & Status Data ---------- */
function tentangView(){
  const total = DB.ENTRIES.length;
  const ready = DB.ENTRIES.filter(e=>e.status==="ready").length;
  const verify = DB.ENTRIES.filter(e=>e.status==="verify").length;
  const pending = DB.ENTRIES.filter(e=>e.status==="pending").length;
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Tentang"}])
    + '<h1 class="h1">Tentang SILMIKAFFAH</h1>'
    + '<p class="muted">"Jelajahi Islam secara menyeluruh dalam satu ruang pengetahuan."</p>'
    + '<div class="prose" style="margin-top:12px">'
    + '<p><b>Konsep:</b> Ensiklopedia & pembelajaran Islam yang terstruktur: 14 menu utama, entri individual, relasi antarentri, pencarian global, audio Arab, terjemahan, sumber, kalender Hijriah, kalkulator zakat, panduan gerakan shalat, Iqra 1–6, dan eksplorasi ziarah.</p>'
    + '<p><b>Prinsip utama:</b> SATU TOPIK = SATU RUMAH UTAMA. Tidak ada data duplikat — menu lain memakai relasi (related entries), bukan salinan artikel.</p>'
    + '<p><b>Standar teks Arab:</b> setiap teks Arab menyediakan teks, transliterasi, arti, audio (bila tersedia), dan sumber.</p>'
    + '<p><b>Kualitas konten:</b> aplikasi tidak mengisi database dengan artikel kosong, entri palsu, sumber palsu, hadis karangan, ayat salah, atau audio yang tidak sesuai teks. Data yang belum tersedia ditandai jelas, tidak dikarang.</p>'
    + '</div>'
    + '<div class="section-title"><h2>Status Data</h2></div>'
    + '<div class="card"><div class="calc-breakdown">'
    + '<div class="cb-row"><span>Total entri</span><b>'+total+'</b></div>'
    + '<div class="cb-row"><span>Siap</span><b>'+ready+'</b></div>'
    + '<div class="cb-row"><span>Perlu verifikasi (ulama/ahli)</span><b>'+verify+'</b></div>'
    + '<div class="cb-row"><span>Belum tersedia (butuh sumber berlisensi)</span><b>'+pending+'</b></div>'
    + '<div class="cb-row"><span>Surah (metadata)</span><b>114</b></div>'
    + '<div class="cb-row"><span>Asmaul Husna</span><b>99</b></div>'
    + '</div></div>'
    + '<div class="callout warn" style="margin-top:12px">'+icon("alert",18)+'<div><b>Catatan kejujuran data:</b> mushaf digital lengkap, audio Arab, tafsir per ayat, dan sebagian hadis memerlukan sumber berlisensi serta validasi ahli — statusnya ditandai, tidak diisi dengan data karangan.</div></div>'
    + '</div>';
  return h;
}

/* ---------- Error / Empty ---------- */
function errorView(msg, retry){
  return '<div class="page"><div class="error-state">'+icon("alert",34)+'<h4>Terjadi kesalahan</h4><p>'+esc(msg||"Data gagal dimuat.")+'</p>'
    + (retry!==false?'<button class="btn btn-ghost" style="margin-top:12px" data-action="retry">Coba Lagi</button>':"")
    + '</div></div>';
}
function skeleton(){
  return '<div class="page">'+Array.from({length:6},()=>'<div class="skeleton" style="height:70px;margin-bottom:10px"></div>').join("")+'</div>';
}

/* ---------- Router ---------- */
function parseRoute(){
  const raw = (location.hash||"#/home").replace(/^#\/?/,"");
  const parts = raw.split("/");
  return {name:parts[0]||"home", a:parts[1], b:parts[2], raw};
}
function router(){
  clearInterval(timerId); timerId = null;
  const r = parseRoute();
  const main = $("app-main");
  main.innerHTML = skeleton();
  window.scrollTo(0,0);
  setActiveNav(r.name);
  let html = "";
  try{
    switch(r.name){
      case "home": html = homeView(); break;
      case "jelajah": html = browseView(); break;
      case "menu": html = menuView(r.a); break;
      case "entry": html = entryView(decodeURIComponent(r.a||"")); break;
      case "quran": html = r.a==="ayat" ? quranAyahView(r.b) : quranView(r.a); break;
      case "surah": html = surahView(+r.a); break;
      case "kalender": html = r.a==="date" ? kalenderDateView(r.b) : kalenderView(CAL_CURSOR); break;
      case "zakat": html = zakatView(r.a); break;
      case "asmaul-husna": html = asmaulView(); break;
      case "ziarah": html = ziarahView(); break;
      case "event": html = eventView(r.a); break;
      case "search": html = searchView(r.a?decodeURIComponent(r.a):"", r.b?decodeURIComponent(r.b):""); break;
      case "koleksi": html = koleksiView(); break;
      case "settings": html = settingsView(); break;
      case "tentang": html = tentangView(); break;
      default: html = homeView();
    }
  }catch(err){
    console.error(err);
    html = errorView("Terjadi kesalahan saat memuat halaman.");
  }
  main.innerHTML = html;
  bindActions();
  afterRender(r);
}

function setActiveNav(name){
  const map = {home:"home", jelajah:"jelajah", search:"search", koleksi:"koleksi", settings:"settings"};
  const key = map[name] || (["menu","entry","quran","surah","kalender","zakat","ziarah","event","asmaul-husna","tentang"].includes(name)?"jelajah":null);
  document.querySelectorAll(".bn-item").forEach(b=> b.classList.toggle("active", b.dataset.bn===key));
  document.querySelectorAll(".sidebar-link").forEach(a=> a.classList.toggle("active", a.dataset.nav==="#/menu/"+(name==="menu"?routerA():"")));
}
function routerA(){ const p=parseRoute(); return p.a; }

/* ---------- Event Delegation ---------- */
function bindActions(){
  document.querySelectorAll("[data-nav]").forEach(el=>{
    el.onclick = e => { e.preventDefault(); location.hash = el.dataset.nav; };
  });
  document.querySelectorAll("[data-action]").forEach(el=>{
    el.onclick = e => {
      const act = el.dataset.action;
      if(act==="bookmark") toggleBookmark(el.dataset.id, el);
      else if(act==="share") shareEntry(el.dataset.id, el);
      else if(act==="play") toggleAudio(el);
      else if(act==="geolocate") geolocate();
      else if(act==="reset") resetLocal();
      else if(act==="retry") router();
      else if(act==="zcalc") calcZakat();
    };
  });
  const si = $("search-input");
  if(si){
    si.oninput = () => {
      const v = si.value.trim();
      history.replaceState(null,"","#/search"+(v?"/"+encodeURIComponent(v):"")+"/"+encodeURIComponent(searchCat));
      const main=$("app-main");
      const s = searchView(v, searchCat);
      // re-render hasil tanpa kehilangan fokus
      const pos = si.selectionStart;
      main.innerHTML = s;
      bindActions();
      const n = $("search-input"); if(n){ n.focus(); n.setSelectionRange(pos,pos); }
      setActiveNav("search");
    };
  }
  ["set-theme","set-font","set-prayer","set-asr","set-city"].forEach(id=>{
    const el = $(id); if(!el) return;
    el.onchange = el.oninput = () => {
      if(id==="set-theme") applyTheme(el.checked?"dark":"light");
      if(id==="set-font"){ const v=["a","b","c"][+el.value]; SETTINGS.font=v; document.documentElement.dataset.font=v; const fv=$("font-val"); if(fv)fv.textContent=v.toUpperCase(); }
      if(id==="set-prayer") SETTINGS.prayerMethod=el.value;
      if(id==="set-asr") SETTINGS.asrMethod=el.value;
      if(id==="set-city"){ SETTINGS.city=el.value; const c=DB.CITIES.find(x=>x.id===el.value); if(c)SETTINGS.cityName=c.name; }
      saveSettings();
    };
  });
}
function toggleBookmark(id, btn){
  if(inCollection(id)){ COLLECTION = COLLECTION.filter(x=>x!==id); toast("Dihapus dari koleksi"); }
  else { COLLECTION.push(id); toast("Disimpan ke koleksi"); }
  saveCollection();
  if(btn) btn.innerHTML = inCollection(id)?icon("bookmarkFill",16)+" Tersimpan":icon("bookmark",16)+" Simpan";
}
function shareEntry(id, btn){
  const e = getEntry(id);
  const title = e ? e.title : (btn && btn.dataset.title ? btn.dataset.title : id);
  const text = e ? (e.summary||e.title) : title;
  const url = location.origin+location.pathname+entryHref(id);
  const data = {title:title, text:text, url:url};
  if(navigator.share){ navigator.share(data).catch(()=>{}); }
  else {
    try{ navigator.clipboard.writeText(url); toast("Tautan disalin"); }
    catch(err){ toast("Tidak dapat membagikan di perangkat ini", true); }
  }
}
function resetLocal(){
  COLLECTION=[]; RECENT=[]; saveCollection(); saveRecent();
  toast("Koleksi & riwayat direset"); router();
}

/* ---------- Audio ---------- */
let audioEl=null, audioBtn=null;
function toggleAudio(btn){
  const url = btn.closest("[data-audio]") ? btn.closest("[data-audio]").dataset.audio : null;
  if(!url) return;
  if(!audioEl){ audioEl = new Audio(); audioEl.onended = ()=>{ if(audioBtn){audioBtn.innerHTML=icon("play"); audioBtn.closest(".audio-box").querySelector(".audio-progress > i").style.width="0";} }; audioEl.ontimeupdate = ()=>{ const p=btn?btn.closest(".audio-box"):null; if(p) p.querySelector(".audio-progress > i").style.width = (audioEl.currentTime/audioEl.duration*100)+"%"; }; }
  if(audioEl.src!==url){ audioEl.src=url; }
  if(audioEl.paused){ audioEl.play(); btn.innerHTML=icon("pause"); audioBtn=btn; }
  else { audioEl.pause(); btn.innerHTML=icon("play"); }
}
function afterRender(r){
  if(r.name==="home"){
    const up = () => { const el=$("next-prayer"); if(el && window.SILMIKAFFAH._np){ const np=window.SILMIKAFFAH._np(el.dataset.key); if(np!==null) el.innerHTML=np; } };
    timerId = setInterval(up, 1000); up();
  }
  if(r.name==="kalender"){
    const keys=["cal-prev","cal-next"]; keys.forEach(k=>{ const b=$(k); if(b) b.onclick=()=>{ CAL_CURSOR = CALC.shiftHijriMonth(CAL_CURSOR, k==="cal-prev"?-1:1); router(); }; });
  }
}

/* ---------- Theme ---------- */
function applyTheme(t){
  SETTINGS.theme = t; saveSettings();
  document.documentElement.dataset.theme = t;
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.content = t==="dark" ? "#070B08" : "#0F7A4D";
}

/* ---------- Geolokasi ---------- */
function geolocate(){
  if(!navigator.geolocation){ toast("Geolokasi tidak didukung perangkat", true); return; }
  toast("Mendeteksi lokasi…");
  navigator.geolocation.getCurrentPosition(pos=>{
    SETTINGS.useGeo=true; SETTINGS.geo={lat:pos.coords.latitude, lon:pos.coords.longitude};
    saveSettings(); toast("Lokasi perangkat digunakan"); router();
  }, ()=>{
    toast("Izin lokasi ditolak — gunakan pilihan kota manual", true);
  }, {timeout:8000});
}

/* ---------- Sidebar ---------- */
function buildSidebar(){
  const nav = $("sidebar-nav"); if(!nav) return;
  nav.innerHTML = DB.MENUS.map(m=>'<a class="sidebar-link" data-nav="#/menu/'+m.id+'">'+icon(m.icon,18)+'<span>'+esc(m.name)+'</span></a>').join("");
}

/* ---------- Init ---------- */
function init(){
  applyTheme(SETTINGS.theme);
  document.documentElement.dataset.font = SETTINGS.font;
  buildSidebar();
  window.addEventListener("hashchange", router);
  router();
  // global click untuk audio pause lainnya
  document.addEventListener("click", e=>{
    const b = e.target.closest(".audio-btn");
    if(b){ document.querySelectorAll(".audio-btn").forEach(x=>{ if(x!==b && audioEl && !audioEl.paused && x.closest("[data-audio]")&&x.closest("[data-audio]").dataset.audio===audioEl.src){ x.innerHTML=icon("play"); } }); }
  });
}
App.router = router; // hook untuk pengujian & debugging
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init); else init();
