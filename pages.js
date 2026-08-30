/* ============================================================
   SILMIKAFFAH — Halaman Khusus (pages.js)
   Home dashboard · Al-Qur'an · Kalender Hijriah · Kalkulator
   Zakat · Asmaul Husna · Ziarah · Detail Peristiwa
   ============================================================ */

/* ========== HOME DASHBOARD ========== */
function homeView(){
  const now = new Date();
  const hijri = CALC.hijriLabel(now);
  const masehi = now.toLocaleDateString("id-ID", {weekday:"long", day:"numeric", month:"long", year:"numeric"});
  const loc = getLoc();
  const times = CALC.computePrayerTimes(now, loc.lat, loc.lon, SETTINGS.prayerMethod, SETTINGS.asrMethod, loc.tz);
  const nowMin = now.getHours()*60 + now.getMinutes();

  let h = '<div class="page">';

  /* Tanggal Hijriah Hari Ini */
  h += '<div class="date-card">'
    + '<div class="tiny" style="font-weight:800;letter-spacing:.08em;opacity:.85">TANGGAL HARI INI</div>'
    + '<div class="date-hijri">'+esc(hijri.hijri)+'</div>'
    + '<div class="date-masehi">'+esc(masehi)+'</div>'
    + '</div>';

  /* Jadwal Shalat */
  h += '<div class="card prayer-card" style="margin-top:10px">'
    + '<div class="h3">Jadwal Shalat Hari Ini</div>'
    + '<div class="tiny muted">'+esc(loc.name)+' · '+esc(times.method)+'</div>'
    + '<div class="prayer-list">'
    + [["imsak","Imsak"],["subuh","Subuh"],["terbit","Terbit"],["zuhur","Zuhur"],["asar","Asar"],["maghrib","Maghrib"],["isya","Isya"]]
      .map(p=>'<div class="prayer-item" data-p="'+p[0]+'"><div class="pn">'+p[1]+'</div><div class="pt">'+times[p[0]].label+'</div></div>').join("")
    + '</div>'
    + '<div id="next-prayer" data-key="np"></div>'
    + '<div class="tiny muted" style="margin-top:8px">Perhitungan astronomis (bukan hardcode) — untuk keperluan resmi gunakan jadwal lembaga setempat.</div>'
    + '</div>';

  /* Quick Access */
  h += '<div class="section-title"><h2>Quick Access</h2></div>'
    + '<div class="quick-access">'
    + qa("quran","Al-Qur'an","#/quran")+qa("book","Shalat","#/entry/shalat")+qa("doa","Doa","#/menu/6")
    + qa("hadis","Hadis","#/menu/4")+qa("kalender","Kalender","#/kalender")+qa("map","Ziarah","#/ziarah")
    + '</div>';

  /* Konten Hari Ini */
  const i = dayOfYear();
  const ayatKey = DB.DAILY.ayat[i % DB.DAILY.ayat.length];
  const ayat = DBQ.AYAT[ayatKey]; const sur = DBQ.surah(ayat.s);
  const hadisE = getEntry(DB.DAILY.hadis[i % DB.DAILY.hadis.length]);
  const doaE = getEntry(DB.DAILY.doa[i % DB.DAILY.doa.length]);
  const eventsToday = DB.EVENTS.filter(e=>e.month===hijri.monthName && e.day===hijri.day);

  h += '<div class="section-title"><h2>Hari Ini</h2></div>';

  h += '<div class="card daily-card tappable" data-nav="#/quran/ayat/'+ayatKey+'">'
    + '<span class="daily-label">AYAT HARI INI</span>'
    + '<div class="daily-title">QS. '+esc(sur[1])+' · Ayat '+ayat.a+'</div>'
    + '<div class="arabic-text" style="font-size:calc(22px * var(--font-scale))" dir="rtl" lang="ar">'+esc(ayat.arab)+'</div>'
    + '<div class="muted small" style="margin-top:6px">'+esc(ayat.arti)+'</div>'
    + '<div class="arabic-meta">'+audioUI("","","")+'</div>'
    + '</div>';

  h += '<div class="card daily-card tappable" data-nav="#/entry/'+hadisE.id+'" style="margin-top:10px">'
    + '<span class="daily-label">HADIS HARI INI</span>'
    + '<div class="arabic-text" style="font-size:calc(20px * var(--font-scale))" dir="rtl" lang="ar">'+esc(hadisE.arabic.text)+'</div>'
    + '<div class="muted small" style="margin-top:6px">'+esc(hadisE.arabic.arti)+'</div>'
    + '<div class="tiny muted" style="margin-top:6px">'+esc(hadisE.rawi)+' · '+esc(hadisE.kitab)+'</div>'
    + '</div>';

  h += '<div class="card daily-card tappable" data-nav="#/entry/'+doaE.id+'" style="margin-top:10px">'
    + '<span class="daily-label">DOA HARI INI</span>'
    + '<div class="arabic-text" style="font-size:calc(20px * var(--font-scale))" dir="rtl" lang="ar">'+esc(doaE.arabic.text)+'</div>'
    + '<div class="muted small" style="margin-top:6px">'+esc(doaE.arabic.arti)+'</div>'
    + '<div class="tiny muted" style="margin-top:6px">'+esc(doaE.arabic.source)+'</div>'
    + '</div>';

  h += '<div class="card daily-card" style="margin-top:10px">'
    + '<span class="daily-label">SEJARAH HARI INI</span>';
  if(eventsToday.length){
    h += eventsToday.map(ev=>'<div class="cal-event-row"><div class="ce-date">'+ev.day+' '+ev.month+'</div><div class="ce-body" data-nav="#/event/'+ev.id+'"><div class="ce-title">'+esc(ev.title)+'</div><div class="ce-desc">'+esc(ev.desc)+'</div></div></div>').join("");
  } else {
    h += '<div class="empty-state" style="border:none;padding:18px">'+icon("sirah")+'<h4>Belum ada data peristiwa</h4><p>Tidak ada peristiwa tercatat untuk tanggal ini di database.</p></div>';
  }
  h += '</div>';

  /* 14 Menu Utama */
  h += '<div class="section-title"><h2>Menu Utama</h2></div><div class="card-grid">';
  DB.MENUS.forEach(m=>{
    const count = DB.ENTRIES.filter(e=>e.menu===m.id).length;
    h += '<div class="card menu-card tappable" data-nav="#/menu/'+m.id+'">'
      + '<div class="mc-top"><span class="menu-icon">'+icon(m.icon,20)+'</span><span class="mc-count">'+m.num+'</span></div>'
      + '<h3>'+esc(m.name)+'</h3><p>'+esc(m.short||m.desc)+'</p></div>';
  });
  h += '</div>';

  /* Recently Viewed */
  const recents = RECENT.map(getEntry).filter(Boolean).slice(0,5);
  if(recents.length){
    h += '<div class="section-title"><h2>Baru Dibaca</h2></div>';
    recents.forEach(e=> h += rowEntry(e));
  }

  h += footerNote();
  h += '</div>';

  // simpan untuk countdown
  window.SILMIKAFFAH._times = times;
  window.SILMIKAFFAH._nowMin = nowMin;
  window.SILMIKAFFAH._np = function(key){
    const t = window.SILMIKAFFAH._times; if(!t) return null;
    const np = CALC.nextPrayer(t, new Date().getHours()*60+new Date().getMinutes());
    const diff = np.min - (new Date().getHours()*60+new Date().getMinutes());
    const hh = Math.floor(diff/60), mm = diff%60;
    const count = (hh>0?hh+"j ":"")+mm+"m lagi";
    const name = np.name;
    const el = document.getElementById("next-prayer");
    if(el) el.dataset.key = key;
    // highlight
    document.querySelectorAll(".prayer-item").forEach(p=>p.classList.toggle("next", p.dataset.p===np.key.toLowerCase()));
    return '<div class="next-prayer"><div><div class="np-name">Shalat berikutnya: '+name+'</div><div class="np-count">'+count+'</div></div><div class="np-time">'+t[np.key].label+'</div></div>';
  };
  return h;
}
function qa(ic,label,route){
  return '<div class="qa-item" data-nav="'+route+'">'+icon(ic,22)+'<span>'+esc(label)+'</span></div>';
}
function getLoc(){
  if(SETTINGS.useGeo && SETTINGS.geo){
    const tz = -new Date().getTimezoneOffset()/60;
    return {name:"Lokasi perangkat (GPS)", lat:SETTINGS.geo.lat, lon:SETTINGS.geo.lon, tz};
  }
  const c = DB.CITIES.find(x=>x.id===SETTINGS.city);
  return c ? {name:c.name, lat:c.lat, lon:c.lon, tz:c.utc} : {name:"Jakarta", lat:-6.2088, lon:106.8456, tz:7};
}
function footerNote(){
  return '<footer class="app-foot">SILMIKAFFAH — Ensiklopedia & Pembelajaran Islam<br>'
    + 'Konten disusun dengan prinsip kejujuran data; sumber belum tersedia ditandai, tidak dikarang.</footer>';
}

/* ========== AL-QUR'AN ========== */
function quranTabs(active){
  const tabs = [["","Mushaf"],["juz","Juz"],["juzamma","Juz 'Amma"],["iqra","Iqra"],["tajwid","Tajwid"],["tafsir","Tafsir"]];
  return '<div class="tabs" role="tablist">'+tabs.map(t=>'<button class="tab'+(active===t[0]?" active":"")+'" data-nav="#/quran'+(t[0]?"/"+t[0]:"")+'">'+t[1]+'</button>').join("")+'</div>';
}
function quranView(tab){
  tab = tab||"";
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Al-Qur'an"}])
    + '<h1 class="h1">'+icon("quran",22)+' Al-Qur\'an</h1>'
    + '<p class="muted" style="margin-top:6px">114 surah · 30 juz · Juz \'Amma · Iqra 1–6 · Tajwid · Tafsir</p>'
    + quranTabs(tab);

  if(tab===""){
    h += '<div class="section-title"><h2>Daftar Surah (114)</h2></div>';
    DBQ.SURAHS.forEach(s=>{
      h += '<div class="row" data-nav="#/surah/'+s[0]+'">'
        + '<span class="row-icon">'+icon("quran",18)+'</span>'
        + '<span class="grow"><span class="rt">'+s[0]+'. <span dir="rtl" lang="ar" style="font-family:var(--font-ar);font-size:1.25em">'+esc(s[1])+'</span> '+esc(s[2])+'</span>'
        + '<span class="rs">'+esc(s[3])+' · '+s[5]+' ayat · '+s[4]+' · Juz '+s[6]+'</span></span>'
        + '<span class="chev">'+icon("chev",18)+'</span></div>';
    });
  }
  else if(tab==="juz"){
    h += '<div class="section-title"><h2>Juz 1–30</h2></div><div class="card-grid">';
    DBQ.JUZ.forEach(j=>{
      h += '<div class="card menu-card tappable"><div class="mc-top"><span class="menu-icon">'+icon("quran",20)+'</span><span class="mc-count">Juz '+j[0]+'</span></div>'
        + '<h3>Juz '+j[0]+'</h3><p>Dimulai dari '+esc(j[1])+' '+esc(j[2])+'</p></div>';
    });
    h += '</div>';
    h += '<div class="callout info" style="margin-top:12px">'+icon("info",18)+'<div>Navigasi per ayat (mushaf penuh) memerlukan sumber berlisensi dan menyusul.</div></div>';
  }
  else if(tab==="juzamma"){
    const list = DBQ.SURAHS.filter(s=>s[0]>=78);
    h += '<div class="section-title"><h2>Juz \'Amma — '+list.length+' Surah (78–114)</h2></div>';
    list.forEach(s=>{
      h += '<div class="row" data-nav="#/surah/'+s[0]+'"><span class="row-icon">'+icon("quran",18)+'</span>'
        + '<span class="grow"><span class="rt"><span dir="rtl" lang="ar" style="font-family:var(--font-ar);font-size:1.2em">'+esc(s[1])+'</span> — '+esc(s[2])+'</span>'
        + '<span class="rs">'+esc(s[3])+' · '+s[5]+' ayat</span></span><span class="chev">'+icon("chev",18)+'</span></div>';
    });
  }
  else if(tab==="iqra"){
    h += '<div class="section-title"><h2>Iqra 1–6</h2></div><p class="muted small">Materi orisinal aplikasi sebagai panduan umum; belajar membaca Al-Qur\'an paling baik melalui talaqqi dengan guru.</p>';
    DB.ENTRIES.filter(e=>e.material==="iqra").sort((a,b)=>(a.id>b.id?1:-1)).forEach(e=> h += rowEntry(e));
  }
  else if(tab==="tajwid"){
    h += '<div class="section-title"><h2>Tajwid</h2></div>';
    DB.ENTRIES.filter(e=>e.menu===3 && e.material==="tajwid").forEach(e=> h += rowEntry(e));
  }
  else if(tab==="tafsir"){
    h += '<div class="section-title"><h2>Tafsir & Ulumul Qur\'an</h2></div>';
    DB.ENTRIES.filter(e=>e.menu===3 && e.material==="tafsir").forEach(e=> h += rowEntry(e));
  }
  h += '</div>';
  return h;
}
function surahView(n){
  const s = DBQ.surah(n);
  if(!s) return errorView("Surah tidak ditemukan.");
  const ayahs = Object.keys(DBQ.AYAT).filter(k=>DBQ.AYAT[k].s===n).map(k=>DBQ.AYAT[k]).sort((a,b)=>a.a-b.a);
  const juz = DBQ.JUZ.filter(j=>j[0]>=s[6]);
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Al-Qur'an",href:"#/quran"},{label:"Surah "+s[2]}])
    + '<div class="card date-card">'
    + '<div class="arabic-text" style="font-size:calc(28px * var(--font-scale))" dir="rtl" lang="ar">'+esc(s[1])+'</div>'
    + '<div class="date-hijri" style="margin-top:4px">Surah '+s[2]+'</div>'
    + '<div class="date-masehi">'+esc(s[3])+' · '+s[5]+' ayat · '+s[4]+' · Juz '+s[6]+'</div>'
    + '</div>'
    + '<div class="section-title"><h2>Ayat (contoh terverifikasi)</h2></div>';
  if(ayahs.length){
    ayahs.forEach(a=>{
      h += '<div class="card" style="margin-top:10px">'
        + '<div class="arabic-text" dir="rtl" lang="ar">'+esc(a.arab)+'</div>'
        + '<div class="arabic-translation" style="border:none;padding:0;margin-top:8px">'+esc(a.arti)+'</div>'
        + '<div class="arabic-meta"><span class="arabic-src">QS. '+esc(s[2])+' '+n+':'+a.a+'</span>'+audioUI("","","")+'</div>'
        + '</div>';
    });
  } else {
    h += '<div class="empty-state">'+icon("quran")+'<h4>Ayat belum tersedia</h4><p>Mushaf digital lengkap memerlukan sumber berlisensi.</p></div>';
  }
  h += '<div class="callout info" style="margin-top:12px">'+icon("info",18)+'<div><b>Status data:</b> metadata surah adalah fakta standar mushaf. Teks ayat lengkap, audio murottal, dan tafsir per ayat menyusul dengan sumber berlisensi.</div></div>';
  if(juz.length) h += '<div class="tiny muted" style="margin-top:8px">Juz: '+juz.map(j=>j[0]).join(", ")+'</div>';
  h += '</div>';
  return h;
}
function quranAyahView(key){
  const a = DBQ.AYAT[key];
  if(!a) return errorView("Ayat tidak ditemukan.");
  const s = DBQ.surah(a.s);
  const aid = "ayat-"+key;
  const saved = inCollection(aid);
  return '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Al-Qur'an",href:"#/quran"},{label:"Surah "+s[2],href:"#/surah/"+a.s},{label:"Ayat "+a.a}])
    + '<div class="card">'
    + '<div class="arabic-text" dir="rtl" lang="ar" style="font-size:calc(28px * var(--font-scale))">'+esc(a.arab)+'</div>'
    + '<div class="arabic-translation" style="border:none;padding:0;margin-top:10px">'+esc(a.arti)+'</div>'
    + '<div class="arabic-meta"><span class="arabic-src">QS. '+esc(s[2])+' '+a.s+':'+a.a+' · Sumber: Al-Qur\'an</span>'+audioUI("","","")+'</div>'
    + '</div>'
    + '<div class="detail-actions" style="margin-top:10px">'
    + '<button class="btn btn-ghost" data-action="bookmark" data-id="'+aid+'">'+(saved?icon("bookmarkFill",16)+" Tersimpan":icon("bookmark",16)+" Simpan")+'</button>'
    + '<button class="btn btn-ghost" data-action="share" data-id="'+aid+'" data-title="QS. '+esc(s[2])+' · Ayat '+a.a+'">'+icon("share",16)+' Bagikan</button>'
    + '</div>'
    + '<div class="chips" style="margin-top:12px"><span class="chip tag">#al-quran</span><span class="chip tag">#ayat</span></div>'
    + '<div class="section-title"><h2>Konten Terkait</h2></div>'
    + '<div class="row" data-nav="#/surah/'+a.s+'"><span class="row-icon">'+icon("quran",18)+'</span><span class="grow"><span class="rt">Surah '+esc(s[2])+'</span><span class="rs">'+esc(s[3])+' · '+s[5]+' ayat</span></span><span class="chev">'+icon("chev",18)+'</span></div>'
    + '</div>';
}

/* ========== KALENDER HIJRIAH ========== */
function kalenderView(cursor){
  const today = new Date();
  const hijriToday = CALC.hijriLabel(today);
  const masehiToday = today.toLocaleDateString("id-ID", {weekday:"long", day:"numeric", month:"long", year:"numeric"});
  const m = CALC.hijriMonth(cursor);
  const dows = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
  const firstDow = (m.cells[0].gDate.getDay()+6)%7;

  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Kalender Hijriah"}])
    + '<h1 class="h1">'+icon("kalender",22)+' Kalender Hijriah</h1>';

  /* Bagian 1 — Hari Ini */
  h += '<div class="date-card" style="margin-top:12px">'
    + '<div class="tiny" style="font-weight:800;letter-spacing:.08em;opacity:.85">TANGGAL HARI INI</div>'
    + '<div class="date-hijri">'+esc(hijriToday.hijri)+'</div>'
    + '<div class="date-masehi">'+esc(masehiToday)+'</div>'
    + '</div>';

  /* Bagian 2 — Kalender Bulanan */
  h += '<div class="card" style="margin-top:10px">'
    + '<div class="cal-nav">'
    + '<button id="cal-prev" aria-label="Bulan sebelumnya">'+icon("arrowL",18)+'</button>'
    + '<div class="cal-title">'+esc(m.monthName)+' '+m.year+' H</div>'
    + '<button id="cal-next" aria-label="Bulan berikutnya">'+icon("arrowR",18)+'</button>'
    + '</div>'
    + '<div class="cal-grid">'
    + dows.map(d=>'<div class="cal-dow">'+d+'</div>').join("")
    + Array.from({length:firstDow},()=>'<div class="cal-cell empty"></div>').join("");
  m.cells.forEach(c=>{
    const ev = c.events.length ? '<span class="dot"></span>' : "";
    const cls = c.isToday?" today":"";
    h += '<div class="cal-cell'+cls+'" data-nav="#/kalender/date/'+m.monthName+'-'+c.hDay+'" title="'+c.hDay+' '+esc(m.monthName)+'">'
      + '<span class="cd">'+c.hDay+'</span><span class="ch">'+c.gDate.toLocaleDateString("id-ID",{day:"numeric",month:"short"})+'</span>'+ev+'</div>';
  });
  h += '</div></div>';

  /* Bagian 3–4 — Informasi Hari Ini */
  h += '<div class="section-title"><h2>Informasi Hari Ini</h2></div>';
  const evToday = DB.EVENTS.filter(e=>e.month===hijriToday.monthName && e.day===hijriToday.day);
  if(evToday.length){
    h += '<div class="card">'+evToday.map(ev=>
      '<div class="cal-event-row"><div class="ce-date">'+ev.day+' '+ev.month+'</div><div class="ce-body" data-nav="#/event/'+ev.id+'"><div class="ce-title">'+esc(ev.title)+'</div><div class="ce-desc">'+esc(ev.desc)+'</div></div></div>').join("")
      + '<p class="tiny muted" style="margin-top:8px">Peringatan keagamaan ≠ hari libur resmi. Hari libur nasional Indonesia ditetapkan pemerintah.</p></div>';
  } else {
    h += '<div class="empty-state">'+icon("kalender")+'<h4>Tidak ada peringatan tercatat</h4><p>Tidak ada hari besar atau peristiwa yang tercatat pada tanggal Hijriah hari ini di database.</p></div>';
  }

  /* Bagian 5 — Sejarah Bulan Ini */
  h += '<div class="section-title"><h2>Sejarah pada Bulan Ini</h2></div>';
  const monthEvents = DB.EVENTS.filter(e=>e.month===m.monthName);
  if(monthEvents.length){
    h += '<div class="card">'+monthEvents.map(ev=>
      '<div class="cal-event-row"><div class="ce-date">'+ev.day+' '+ev.month+'</div><div class="ce-body" data-nav="#/event/'+ev.id+'"><div class="ce-title">'+esc(ev.title)+'</div><div class="ce-desc">'+esc(ev.desc)+'</div></div></div>').join("")
      + '<p class="tiny muted" style="margin-top:8px">Klik peristiwa → membuka entri di Sirah & Sejarah Islam. Kalender tidak membuat artikel sejarah duplikat.</p></div>';
  } else {
    h += '<div class="empty-state">'+icon("sirah")+'<h4>Belum ada data</h4><p>Database peristiwa untuk bulan ini masih dikembangkan.</p></div>';
  }
  h += '</div>';
  return h;
}
function eventView(id){
  const ev = DB.EVENTS.find(e=>e.id===id);
  if(!ev) return errorView("Peristiwa tidak ditemukan.");
  addRecent(ev.id);
  const rel = (ev.related||[]).map(relLink).filter(Boolean);
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Sirah & Sejarah",href:"#/menu/8"},{label:ev.title}])
    + '<div class="detail-head"><h1 class="detail-title">'+esc(ev.title)+'</h1>'
    + '<div class="chips" style="margin-top:8px"><span class="chip tag">'+esc(ev.day)+' '+esc(ev.month)+'</span><span class="chip tag">'+esc(ev.type)+'</span></div>'
    + '</div>'
    + '<div class="prose"><p>'+esc(ev.desc)+'</p></div>';
  if(ev.sources && ev.sources.length){
    h += '<div class="section-title"><h2>Sumber</h2></div><div class="source-list">'+ev.sources.map(k=>{const s=DB.SOURCES[k]; return s?'<div class="source-item"><span class="si-type">'+esc(s.type)+'</span><span><b>'+esc(s.title)+'</b></span></div>':"";}).join("")+'</div>';
  }
  if(rel.length){
    h += '<div class="section-title"><h2>Konten Terkait</h2></div>'+rel.map(l=>'<div class="row" data-nav="'+l.href+'"><span class="row-icon">'+icon("layers",18)+'</span><span class="grow"><span class="rt">'+esc(l.label)+'</span></span><span class="chev">'+icon("chev",18)+'</span></div>').join("");
  }
  h += '</div>';
  return h;
}
function kalenderDateView(param){
  // param: "Bulan-Day" mis. "Syawal-1"
  const [month, day] = (param||"").split("-");
  const events = DB.EVENTS.filter(e=>e.month===month && e.day===+day);
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Kalender Hijriah",href:"#/kalender"},{label:(day+" "+month)}])
    + '<div class="card date-card">'
    + '<div class="tiny">DETAIL TANGGAL</div>'
    + '<div class="date-hijri">'+day+' '+esc(month)+'</div>'
    + '<div class="date-masehi">Tanggal Hijriah (perkiraan tahun menyesuaikan kalender)</div>'
    + '</div>';
  if(events.length){
    events.forEach(ev=>{
      h += '<div class="card" style="margin-top:10px"><div class="daily-title">'+esc(ev.title)+'</div><p class="muted small">'+esc(ev.desc)+'</p>'
        + '<button class="btn btn-ghost" style="margin-top:10px" data-nav="#/event/'+ev.id+'">Buka di Sirah & Sejarah '+icon("chev",16)+'</button></div>';
    });
  } else {
    h += '<div class="empty-state" style="margin-top:12px">'+icon("kalender")+'<h4>Belum ada peristiwa tercatat</h4><p>Database peristiwa untuk tanggal ini masih dikembangkan.</p></div>';
  }
  h += '<div style="margin-top:12px"><button class="btn btn-ghost" data-nav="#/kalender">'+icon("back",16)+' Kembali ke kalender</button></div></div>';
  return h;
}

/* ---------- Aksi kalkulator zakat ---------- */
function calcZakat(){
  const type = (parseRoute().a) || "fitrah";
  const num = id => { const el = document.getElementById(id); return el && el.value!=="" ? +el.value : 0; };
  const sel = id => { const el = document.getElementById(id); return el? el.value : ""; };
  const inp = {goldPrice:num("z-goldPrice"), silverPrice:num("z-silverPrice"), ricePrice:num("z-ricePrice")};
  if(type==="fitrah"){ inp.qty = num("z-qty") * num("z-kg"); inp.price = num("z-price"); }
  if(type==="mal"){ inp.cash=num("z-cash"); inp.gold=num("z-gold"); inp.silver=num("z-silver"); inp.trade=num("z-trade"); inp.receivables=num("z-recv"); inp.debts=num("z-debt"); inp.nisabMethod=sel("z-nisab"); inp.haul=sel("z-haul"); }
  if(type==="emas"||type==="perak"){ inp.grams=num("z-grams"); }
  if(type==="uang"){ inp.balance=num("z-balance"); }
  if(type==="perdagangan"){ inp.asset=num("z-asset"); inp.debt=num("z-debt"); inp.haul=sel("z-haul"); }
  if(type==="penghasilan"){ inp.income=num("z-income"); inp.debtMonthly=num("z-debtM"); inp.method=sel("z-method"); }
  if(type==="pertanian"){ inp.value=num("z-value"); inp.irrigation=sel("z-irrigation"); }
  if(type==="peternakan"){ inp.livestock=sel("z-livestock"); inp.count=num("z-count"); }
  const box = document.getElementById("zakat-result");
  if(box){ box.innerHTML = zakatResultView(type, inp); box.scrollIntoView({behavior:"smooth", block:"start"}); }
}

/* ========== KALKULATOR ZAKAT ========== */
const ZTYPES = [
  ["fitrah","Zakat Fitrah","Beras/ makanan pokok per jiwa"],
  ["mal","Zakat Mal","Harta: kas, emas, perak, dagangan"],
  ["emas","Zakat Emas","Kepemilikan emas (gram)"],
  ["perak","Zakat Perak","Kepemilikan perak (gram)"],
  ["uang","Zakat Uang & Tabungan","Saldo tabungan/deposito"],
  ["perdagangan","Zakat Perdagangan","Nilai aset usaha"],
  ["penghasilan","Zakat Penghasilan","Gaji/profesi bulanan"],
  ["pertanian","Zakat Pertanian","Hasil panen"],
  ["peternakan","Zakat Peternakan","Kambing/domba atau sapi"]
];
function zakatView(type){
  type = type || "fitrah";
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Rukun Islam",href:"#/menu/1"},{label:"Zakat",href:"#/entry/zakat"},{label:"Kalkulator Zakat"}])
    + '<h1 class="h1">Kalkulator Zakat</h1>'
    + '<p class="muted small" style="margin-top:4px">Metode perhitungan ditampilkan transparan. Hasil adalah perkiraan — konfirmasikan dengan amil/lembaga zakat.</p>'
    + '<div class="tabs" style="margin-top:12px">'+ZTYPES.map(t=>'<button class="tab'+(t[0]===type?" active":"")+'" data-nav="#/zakat/'+t[0]+'">'+t[1]+'</button>').join("")+'</div>'
    + zakatForm(type)
    + '<div id="zakat-result"></div>'
    + '<div class="callout warn" style="margin-top:12px">'+icon("alert",18)+'<div><b>Catatan:</b> jika terdapat perbedaan pendapat atau metode (mis. nishab emas vs perak, metode penghasilan), kalkulator menampilkan pilihan dan alasannya. Nilai harga yang dipakai harus harga terkini — contoh harga hanya placeholder yang bisa diubah.</div></div>'
    + '</div>';
  return h;
}
function zakatForm(type){
  const F = {
    fitrah: '<div class="field"><label>Jumlah orang (jiwa)</label><input class="input" type="number" id="z-qty" value="1" min="1"></div>'
      + '<div class="field"><label>Beras per orang (kg)</label><input class="input" type="number" id="z-kg" value="2.5" step="0.1"></div>'
      + '<div class="field"><label>Harga beras per kg (Rp)</label><input class="input" type="number" id="z-price" value="14000" step="500"></div>',
    mal: '<div class="field"><label>Kas / tabungan (Rp)</label><input class="input" type="number" id="z-cash" value="0"></div>'
      + '<div class="field"><label>Emas (gram)</label><input class="input" type="number" id="z-gold" value="0"></div>'
      + '<div class="field"><label>Perak (gram)</label><input class="input" type="number" id="z-silver" value="0"></div>'
      + '<div class="field"><label>Nilai barang dagangan (Rp)</label><input class="input" type="number" id="z-trade" value="0"></div>'
      + '<div class="field"><label>Piutang lancar (Rp)</label><input class="input" type="number" id="z-recv" value="0"></div>'
      + '<div class="field"><label>Utang jatuh tempo (Rp)</label><input class="input" type="number" id="z-debt" value="0"></div>'
      + '<div class="field"><label>Harga emas per gram (Rp)</label><input class="input" type="number" id="z-goldPrice" value="1200000" step="1000"></div>'
      + '<div class="field"><label>Harga perak per gram (Rp)</label><input class="input" type="number" id="z-silverPrice" value="15000" step="500"></div>'
      + '<div class="field"><label>Metode nishab</label><select class="input" id="z-nisab"><option value="emas">Emas (85 g)</option><option value="perak">Perak (595 g)</option></select></div>'
      + '<div class="field"><label>Haul (dimiliki 1 tahun)</label><select class="input" id="z-haul"><option value="yes">Sudah 1 tahun</option><option value="no">Belum 1 tahun</option></select></div>',
    emas: '<div class="field"><label>Emas dimiliki (gram)</label><input class="input" type="number" id="z-grams" value="0"></div>'
      + '<div class="field"><label>Harga emas per gram (Rp)</label><input class="input" type="number" id="z-goldPrice" value="1200000" step="1000"></div>',
    perak: '<div class="field"><label>Perak dimiliki (gram)</label><input class="input" type="number" id="z-grams" value="0"></div>'
      + '<div class="field"><label>Harga perak per gram (Rp)</label><input class="input" type="number" id="z-silverPrice" value="15000" step="500"></div>',
    uang: '<div class="field"><label>Saldo tabungan/deposito (Rp)</label><input class="input" type="number" id="z-balance" value="0"></div>'
      + '<div class="field"><label>Harga emas per gram (Rp)</label><input class="input" type="number" id="z-goldPrice" value="1200000" step="1000"></div>',
    perdagangan: '<div class="field"><label>Nilai aset dagang (barang+kas+piutang, Rp)</label><input class="input" type="number" id="z-asset" value="0"></div>'
      + '<div class="field"><label>Utang usaha (Rp)</label><input class="input" type="number" id="z-debt" value="0"></div>'
      + '<div class="field"><label>Harga emas per gram (Rp)</label><input class="input" type="number" id="z-goldPrice" value="1200000" step="1000"></div>'
      + '<div class="field"><label>Haul</label><select class="input" id="z-haul"><option value="yes">Sudah 1 tahun</option><option value="no">Belum 1 tahun</option></select></div>',
    penghasilan: '<div class="field"><label>Penghasilan per bulan (Rp)</label><input class="input" type="number" id="z-income" value="0"></div>'
      + '<div class="field"><label>Utang/cicilan per bulan (Rp)</label><input class="input" type="number" id="z-debtM" value="0"></div>'
      + '<div class="field"><label>Harga emas per gram (Rp)</label><input class="input" type="number" id="z-goldPrice" value="1200000" step="1000"></div>'
      + '<div class="field"><label>Harga beras per kg (Rp) — untuk metode B</label><input class="input" type="number" id="z-ricePrice" value="14000" step="500"></div>'
      + '<div class="field"><label>Metode</label><select class="input" id="z-method"><option value="a">A — nishab 85g emas/tahun ÷ 12 (umum)</option><option value="b">B — nishab ±653 kg beras/tahun ÷ 12</option></select></div>',
    pertanian: '<div class="field"><label>Nilai hasil panen (Rp)</label><input class="input" type="number" id="z-value" value="0"></div>'
      + '<div class="field"><label>Harga beras per kg (Rp) — untuk nishab</label><input class="input" type="number" id="z-ricePrice" value="14000" step="500"></div>'
      + '<div class="field"><label>Pengairan</label><select class="input" id="z-irrigation"><option value="alami">Alami (hujan/sungai) — 10%</option><option value="berbayar">Berbayar (irigasi) — 5%</option></select></div>',
    peternakan: '<div class="field"><label>Jenis ternak</label><select class="input" id="z-livestock"><option value="kambing">Kambing/Domba</option><option value="sapi">Sapi</option></select></div>'
      + '<div class="field"><label>Jumlah ekor</label><input class="input" type="number" id="z-count" value="0"></div>'
  };
  return '<div class="card">'+F[type]
    + '<button class="btn btn-primary btn-block" data-action="zcalc" style="margin-top:6px">'+icon("check",18)+' Hitung Zakat</button>'
    + '</div>';
}
const MONEY_TYPES = ["fitrah","mal","emas","perak","uang","perdagangan","penghasilan","pertanian"];
/* fmtRp, esc, icon, dsb. didefinisikan di app.js (global scope bersama) */
function zakatResultView(type, inp){
  const r = CALC.zakat(type, inp);
  let value = "—";
  if(r.result!=null){
    if(type==="peternakan") value = r.zakatLabel || (r.result+" ekor");
    else if(MONEY_TYPES.includes(type)) value = fmtRp(r.result);
    else value = r.result+" ekor";
  }
  let h = '<div class="calc-result"><div class="cr-label">HASIL — '+esc(r.label)+'</div>'
    + '<div class="cr-value">'+value+'</div>'
    + '<div class="cr-note">Dihitung '+r.date+'</div></div>';
  h += '<div class="card calc-breakdown" style="margin-top:10px">';
  r.rows.forEach(row=> h += '<div class="cb-row"><span>'+esc(row[0])+'</span><b>'+esc(row[1])+'</b></div>');
  h += '<div class="cb-row"><span>Metode</span><b style="font-weight:600;text-align:right">'+esc(r.method)+'</b></div>';
  h += '<div class="cb-row"><span>Sumber</span><b style="font-weight:600;text-align:right">'+esc(r.source)+'</b></div>';
  h += '</div>';
  r.notes.forEach(n=> h += '<div class="callout info" style="margin-top:8px">'+icon("info",18)+'<div>'+esc(n)+'</div></div>');
  h += '<p class="tiny muted" style="margin-top:8px">Estimasi — konfirmasikan dengan amil/lembaga zakat sebelum menunaikan.</p>';
  return h;
}

/* ========== ASMAUL HUSNA ========== */
function asmaulView(){
  const list = DB.ENTRIES.filter(e=>e.type==="asmaul");
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Rukun Iman",href:"#/menu/2"},{label:"Asmaul Husna"}])
    + '<h1 class="h1">Asmaul Husna</h1>'
    + '<p class="muted" style="margin-top:4px">99 nama Allah — setiap nama adalah entri tersendiri dengan Arab, makna, dan sumber.</p>'
    + '<div class="card-grid">';
  list.forEach(e=>{
    h += '<div class="card menu-card tappable" data-nav="#/entry/'+e.id+'">'
      + '<div class="mc-top"><span class="menu-icon" style="background:var(--accent-soft)"><span dir="rtl" lang="ar" style="font-family:var(--font-ar);font-size:17px">'+esc(e.arabic.text)+'</span></span><span class="mc-count">#'+e.id.split("-")[1]+'</span></div>'
      + '<h3>'+esc(e.title)+'</h3><p>'+esc(e.arabic.arti)+'</p></div>';
  });
  h += '</div></div>';
  return h;
}

/* ========== ZIARAH ========== */
function ziarahView(){
  const arts = ["ziarah","ziarah-kubur","adab-ziarah","doa-ziarah-kubur"].map(getEntry).filter(Boolean);
  const places = DB.ENTRIES.filter(e=>e.type==="place");
  let h = '<div class="page">'+crumbs([{label:"Home",href:"#/home"},{label:"Sirah & Sejarah",href:"#/menu/8"},{label:"Eksplorasi Ziarah"}])
    + '<h1 class="h1">'+icon("map",22)+' Eksplorasi Ziarah</h1>'
    + '<p class="muted" style="margin-top:4px">Ziarah adalah fitur — terhubung dengan Sirah, Tokoh, Fiqih, Akhlak & Adab, serta Kalender. Setiap tempat memiliki satu entri utama.</p>';
  h += '<div class="section-title"><h2>Panduan Ziarah</h2></div>';
  arts.forEach(e=> h += rowEntry(e));
  h += '<div class="section-title"><h2>Tempat Ziarah</h2></div>';
  places.forEach(p=>{
    const pl = p.place||{};
    h += '<div class="row" data-nav="#/entry/'+p.id+'"><span class="row-icon">'+icon("map",18)+'</span>'
      + '<span class="grow"><span class="rt">'+esc(p.title)+'</span><span class="rs">'+esc(pl.loc||"")+'</span></span>'
      + (pl.lat&&pl.lon?'<a class="row-badge" target="_blank" rel="noopener" href="https://www.google.com/maps?q='+pl.lat+','+pl.lon+'" onclick="event.stopPropagation()">Peta</a>':"")
      + '<span class="chev">'+icon("chev",18)+'</span></div>';
  });
  h += '<div class="callout info" style="margin-top:12px">'+icon("info",18)+'<div>Ziarah kubur disunnahkan untuk mendoakan mayit dan mengingat kematian. Hindari perbuatan yang dilarang: meminta kepada mayit dan syirik lainnya. Perbedaan pendapat ditampilkan pada entri terkait.</div></div>';
  h += '</div>';
  return h;
}
