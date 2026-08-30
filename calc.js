/* ============================================================
   SILMIKAFFAH — Mesin Perhitungan (calc.js)
   Waktu shalat (astronomis, tidak hardcode) · Kalender Hijriah
   (Intl islamic-umalqura) · Kalkulator Zakat (transparan)
   ============================================================ */
const CALC = window.SILMIKAFFAH.CALC = {};

/* ---------- WAKTU SHALAT ---------- */
CALC.PRAY_METHODS = {
  KEMENAG: {name:"Kemenag RI (Fajar 20°, Isya 18°)", fajr:20, isha:18, fixed:0},
  MWL:     {name:"Muslim World League (18°, 17°)", fajr:18, isha:17, fixed:0},
  ISNA:    {name:"ISNA (15°, 15°)", fajr:15, isha:15, fixed:0},
  EGYPT:   {name:"Mesir (19.5°, 17.5°)", fajr:19.5, isha:17.5, fixed:0},
  KARACHI: {name:"Karachi (18°, 18°)", fajr:18, isha:18, fixed:0},
  MAKKAH:  {name:"Umm al-Qura Makkah (18.5°, Isya +90 mnt)", fajr:18.5, isha:0, fixed:90}
};
CALC.ASR_METHODS = { JUMHUR:{name:"Jumhur (bayangan 1× tinggi)", factor:1}, HANAFI:{name:"Hanafi (bayangan 2×)", factor:2} };

function rad(d){return d*Math.PI/180;}
function deg(r){return r*180/Math.PI;}
function fixangle(a){a=a-360*Math.floor(a/360);return a<0?a+360:a;}
function fixhour(a){a=a-24*Math.floor(a/24);return a<0?a+24:a;}
function dsin(d){return Math.sin(rad(d));}
function dcos(d){return Math.cos(rad(d));}
function dtan(d){return Math.tan(rad(d));}
function datan2(y,x){return deg(Math.atan2(y,x));}
function julian(y,m,d){
  if(m<=2){y-=1;m+=12;}
  const A=Math.floor(y/100), B=2-A+Math.floor(A/4);
  return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5;
}
function sunPosition(jd){
  const D=jd-2451545.0;
  const g=fixangle(357.529+0.98560028*D);
  const q=fixangle(280.459+0.98564736*D);
  const L=fixangle(q+1.915*Math.sin(rad(g))+0.020*Math.sin(rad(2*g)));
  const e=23.439-0.00000036*D;
  const RA=datan2(dcos(e)*dsin(L),dcos(L))/15;
  const decl=deg(Math.asin(Math.sin(rad(e))*dsin(L)));
  const EqT=q/15-fixhour(RA);
  return {decl, EqT};
}
function midDay(jd, t){const e=sunPosition(jd+ t/24).EqT; return fixhour(12-e);}
function hourAngle(angle, decl, lat){
  const a=rad(angle), d=rad(decl), L=rad(lat);
  const c=(Math.sin(a)-dsin(decl)*Math.sin(L))/(dcos(decl)*dcos(L));
  return deg(Math.acos(Math.max(-1,Math.min(1,c))))/15;
}

CALC.computePrayerTimes = function(date, lat, lon, methodKey, asrKey, tzHours){
  const M = CALC.PRAY_METHODS[methodKey] || CALC.PRAY_METHODS.KEMENAG;
  const A = CALC.ASR_METHODS[asrKey] || CALC.ASR_METHODS.JUMHUR;
  const y=date.getFullYear(), m=date.getMonth()+1, d=date.getDate();
  // tzHours: offset UTC kota (default: offset perangkat, DST-aware)
  const tz = (tzHours===undefined) ? -date.getTimezoneOffset()/60 : tzHours;
  const jd = julian(y,m,d);            // ≈ JD 12:00 UT
  const {decl, EqT} = sunPosition(jd);
  const noonUT = 12 - lon/15 - EqT;    // tengah hari matahari (UT, jam)
  const H = a => hourAngle(a, decl, lat); // sudut jam (jam)
  const mk = t => {
    const tt = fixhour(t + tz);        // konversi ke jam dinding lokal
    const h = Math.floor(tt), mn = Math.floor((tt-h)*60 + 0.5);
    const hh = ((h+24)%24);
    return {min: hh*60+mn, label: String(hh).padStart(2,"0")+":"+String(mn).padStart(2,"0")};
  };
  const dLat = Math.abs(lat - decl);
  // Asar: ketinggian matahari saat bayangan = panjang benda + bayangan saat zuhur
  const asrAngle = deg(Math.atan(1/(A.factor + Math.tan(rad(dLat)))));
  const sunset = noonUT + H(-0.833);
  return {
    imsak:   mk(noonUT - H(-M.fajr) - 10/60), // kehati-hatian (konvensi Indonesia)
    subuh:   mk(noonUT - H(-M.fajr)),
    terbit:  mk(noonUT - H(-0.833)),
    zuhur:   mk(noonUT),
    asar:    mk(noonUT + H(asrAngle)),
    maghrib: mk(sunset),
    isya:    mk(M.fixed>0 ? sunset + M.fixed/60 : noonUT + H(-M.isha)),
    method: M.name, asrMethod: A.name
  };
};

CALC.nextPrayer = function(times, nowMin){
  const order = [["subuh","Subuh"],["terbit","Terbit"],["zuhur","Zuhur"],["asar","Asar"],["maghrib","Maghrib"],["isya","Isya"],["imsak","Imsak"]];
  for(let i=0;i<order.length;i++){
    if(times[order[i][0]].min > nowMin) return {key:order[i][0], name:order[i][1], min:times[order[i][0]].min};
  }
  // besok subuh
  return {key:"subuh", name:"Subuh (besok)", min:times.subuh.min + 1440};
};

/* ---------- KALENDER HIJRIAH ---------- */
const HIJRI_MONTHS = ["Muharram","Safar","Rabiul Awal","Rabiul Akhir","Jumadil Awal","Jumadil Akhir","Rajab","Sya'ban","Ramadan","Syawal","Dzulqa'dah","Dzulhijjah"];
const hFmt = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {day:"numeric", month:"numeric", year:"numeric"});

CALC.hijriParts = function(date){
  const p = hFmt.formatToParts(date), o = {day:1, month:1, year:1446};
  p.forEach(x=>{ if(x.type==="day")o.day=+x.value; if(x.type==="month")o.month=+x.value; if(x.type==="year")o.year=+x.value; });
  return o;
};
CALC.hijriLabel = function(date){
  const p = CALC.hijriParts(date);
  return {hijri: p.day+" "+HIJRI_MONTHS[p.month-1]+" "+p.year+" H", day:p.day, month:p.month, monthName:HIJRI_MONTHS[p.month-1], year:p.year};
};
CALC.hijriStart = function(cursor){
  const d = new Date(cursor);
  let i=0;
  while(CALC.hijriParts(d).day!==1 && i<60){ d.setDate(d.getDate()-1); i++; }
  return d;
};
CALC.hijriMonth = function(cursor){
  const start = CALC.hijriStart(cursor);
  const parts = CALC.hijriParts(start);
  const cells = [];
  const today = new Date(); today.setHours(0,0,0,0);
  for(let i=0;i<31;i++){
    const g = new Date(start); g.setDate(start.getDate()+i);
    const p = CALC.hijriParts(g);
    if(p.month!==parts.month) break;
    const g0 = new Date(g); g0.setHours(0,0,0,0);
    cells.push({
      gDate: g, hDay: p.day,
      isToday: g0.getTime()===today.getTime(),
      dow: g.getDay(),
      events: DB.EVENTS.filter(e=>e.month===HIJRI_MONTHS[p.month-1] && e.day===p.day)
    });
  }
  return {monthName:HIJRI_MONTHS[parts.month-1], year:parts.year, cells, start};
};
CALC.shiftHijriMonth = function(cursor, dir){
  const start = CALC.hijriStart(cursor);
  const d = new Date(start);
  d.setDate(d.getDate() + (dir>0?35:-15));
  return d;
};

/* ---------- KALKULATOR ZAKAT ---------- */
const fmtRp = n => "Rp " + Math.round(n).toLocaleString("id-ID");
CALC.zakat = function(type, inp){
  const today = new Date().toLocaleDateString("id-ID", {day:"numeric", month:"long", year:"numeric"});
  const out = {result:null, label:"", rows:[], method:"", notes:[], source:"", date:today};
  const goldPrice = +inp.goldPrice||0, silverPrice = +inp.silverPrice||0;
  if(type==="fitrah"){
    const qty = +inp.qty||2.5, price = +inp.price||0;
    out.result = qty*price;
    out.label = "Zakat Fitrah";
    out.rows.push(["Beras total (jiwa × kg)", qty+" kg × Rp "+price.toLocaleString("id-ID")]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "1 sha' (±2,5 kg) makanan pokok per orang; konvensi lain 3,5 liter. Dikeluarkan sebelum shalat Idulfitri.";
    out.source = "HR. Bukhari no. 1503, Muslim no. 984; BAZNAS";
    out.notes.push("Boleh dibayar dalam bentuk uang senilai makanan pokok menurut sebagian lembaga (BAZNAS).");
    return out;
  }
  if(type==="emas"){
    const g = +inp.grams||0;
    out.result = g>=85 ? 0.025*g*goldPrice : 0;
    out.label = "Zakat Emas";
    out.rows.push(["Kepemilikan", g+" gram"]);
    out.rows.push(["Nishab", "85 gram — "+(g>=85?"tercapai":"belum tercapai")]);
    out.rows.push(["Zakat", g>=85 ? "2,5% × "+g+"g × Rp "+goldPrice.toLocaleString("id-ID") : "—"]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "2,5% dari emas ≥ 85 gram yang dimiliki selama satu tahun (haul).";
    out.source = "BAZNAS; ketentuan nishab dari hadis";
    out.notes.push("Perhiasan yang dipakai secara wajar: jumhur tidak mewajibkan zakatnya; mazhab Hanafi mewajibkan.");
    return out;
  }
  if(type==="perak"){
    const g = +inp.grams||0;
    out.result = g>=595 ? 0.025*g*silverPrice : 0;
    out.label = "Zakat Perak";
    out.rows.push(["Kepemilikan", g+" gram"]);
    out.rows.push(["Nishab", "595 gram — "+(g>=595?"tercapai":"belum tercapai")]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "2,5% dari perak ≥ 595 gram dengan haul satu tahun.";
    out.source = "BAZNAS; HR. Abu Dawud no. 1573";
    return out;
  }
  if(type==="uang"){
    const bal = +inp.balance||0;
    const nisab = 85*goldPrice;
    out.result = bal>=nisab ? 0.025*bal : 0;
    out.label = "Zakat Uang & Tabungan";
    out.rows.push(["Saldo", fmtRp(bal)]);
    out.rows.push(["Nishab (85g emas)", fmtRp(nisab)+" — "+(bal>=nisab?"tercapai":"belum tercapai")]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "Uang diqiyaskan pada emas: nishab senilai 85 gram emas, 2,5%, haul 1 tahun.";
    out.source = "BAZNAS";
    return out;
  }
  if(type==="mal"){
    const cash=+inp.cash||0, g=+inp.gold||0, s=+inp.silver||0, trade=+inp.trade||0, recv=+inp.receivables||0, debt=+inp.debts||0;
    const haul = inp.haul==="yes";
    const nMethod = inp.nisabMethod==="perak"?"perak":"emas";
    const assets = cash + g*goldPrice + s*silverPrice + trade + recv - debt;
    const nisab = nMethod==="emas" ? 85*goldPrice : 595*silverPrice;
    out.result = (haul && assets>=nisab) ? 0.025*assets : 0;
    out.label = "Zakat Mal (Harta)";
    out.rows.push(["Kas + emas + perak + dagangan + piutang", fmtRp(cash+g*goldPrice+s*silverPrice+trade+recv)]);
    out.rows.push(["Dikurangi utang jatuh tempo", "− "+fmtRp(debt)]);
    out.rows.push(["Harta bersih", fmtRp(assets)]);
    out.rows.push(["Nishab ("+nMethod+")", fmtRp(nisab)+" — "+(assets>=nisab?"tercapai":"belum tercapai")]);
    out.rows.push(["Haul 1 tahun", haul?"terpenuhi":"belum terpenuhi"]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "2,5% dari harta bersih yang mencapai nishab (85g emas / 595g perak) dan haul 1 tahun.";
    out.source = "BAZNAS; fiqih zakat";
    out.notes.push(haul?"":"Jika haul belum satu tahun, zakat mal belum wajib (kecuali jenis yang dizakati saat panen).");
    return out;
  }
  if(type==="perdagangan"){
    const asset=+inp.asset||0, debt=+inp.debt||0;
    const haul = inp.haul==="yes";
    const net = asset-debt, nisab = 85*goldPrice;
    out.result = (haul && net>=nisab) ? 0.025*net : 0;
    out.label = "Zakat Perdagangan";
    out.rows.push(["Nilai aset dagang (barang + kas + piutang)", fmtRp(asset)]);
    out.rows.push(["Dikurangi utang", "− "+fmtRp(debt)]);
    out.rows.push(["Bersih", fmtRp(net)]);
    out.rows.push(["Nishab (85g emas)", fmtRp(nisab)+" — "+(net>=nisab?"tercapai":"belum tercapai")]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "2,5% dari nilai barang dagangan (dinilai harga pasar) + kas + piutang − utang, dengan nishab 85g emas dan haul 1 tahun.";
    out.source = "BAZNAS";
    return out;
  }
  if(type==="penghasilan"){
    const inc=+inp.income||0, debtM=+inp.debtMonthly||0;
    const m = inp.method==="b"?"b":"a";
    const ricePrice=+inp.ricePrice||0;
    const net = inc-debtM;
    const nisabA = (85*goldPrice)/12;
    const nisabB = (653*ricePrice)/12;
    const nisab = m==="a"?nisabA:nisabB;
    out.result = net>=nisab ? 0.025*net : 0;
    out.label = "Zakat Penghasilan (Profesi)";
    out.rows.push(["Penghasilan bulanan", fmtRp(inc)]);
    out.rows.push(["Dikurangi utang bulanan", "− "+fmtRp(debtM)]);
    out.rows.push(["Bersih", fmtRp(net)]);
    out.rows.push(["Nishab bulanan", fmtRp(nisab)+" — "+(net>=nisab?"tercapai":"belum tercapai")]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = m==="a"
      ? "Metode A (umum): nishab 85 gram emas setahun dibagi 12; jika penghasilan bulanan mencapai nishab bulanan, keluarkan 2,5% tiap bulan."
      : "Metode B: nishab diqiyaskan pada 5 wasaq (±653 kg) beras setahun, dibagi 12.";
    out.source = "BAZNAS (Metode A); pendapat ulama kontemporer (Metode B)";
    out.notes.push("Ada perbedaan pendapat tentang nishab penghasilan — gunakan metode yang Anda yakini / konsultasikan amil setempat.");
    return out;
  }
  if(type==="pertanian"){
    const val=+inp.value||0, irr=inp.irrigation==="alami"?"alami":"berbayar";
    const ricePrice=+inp.ricePrice||0, nisab=653*ricePrice;
    const rate = irr==="alami"?0.10:0.05;
    out.result = val>=nisab ? rate*val : 0;
    out.label = "Zakat Pertanian";
    out.rows.push(["Nilai hasil panen", fmtRp(val)]);
    out.rows.push(["Nishab 5 wasaq (±653 kg × harga)", fmtRp(nisab)+" — "+(val>=nisab?"tercapai":"belum tercapai")]);
    out.rows.push(["Besaran", irr==="alami"?"10% (pengairan alami)":"5% (pengairan berbiaya)"]);
    out.rows.push(["Total", fmtRp(out.result)]);
    out.method = "Dizakati saat panen (tanpa haul): 10% bila pengairan alami, 5% bila berbiaya.";
    out.source = "QS. Al-An'am 6:141; HR. Bukhari no. 1484, Muslim no. 979";
    return out;
  }
  if(type==="peternakan"){
    const t=inp.livestock==="sapi"?"sapi":"kambing", c=+inp.count||0;
    out.label = "Zakat Peternakan ("+ (t==="sapi"?"Sapi":"Kambing/Domba") +")";
    if(t==="kambing"){
      out.result = c>=40 ? Math.floor((c-1)/100)+1 : 0;
      out.rows.push(["Jumlah", c+" ekor"]);
      out.rows.push(["Nishab", "40 ekor"]);
      out.rows.push(["Zakat", out.result+" ekor kambing/domba (umur 1–2 tahun)"]);
      out.method = "40–120: 1; 121–200: 2; 201–300: 3; 300+: 1 tiap 100.";
      out.source = "HR. Bukhari no. 1454";
    } else {
      let z="", due=0;
      if(c>=30){due=1; if(c<40)z="1 ekor tabi' (umur 1 tahun)";
        else if(c<60)z="1 ekor musinnah (umur 2 tahun)";
        else if(c<70)z="2 ekor tabi'";
        else if(c<80)z="1 musinnah + 1 tabi'";
        else if(c<90)z="2 ekor musinnah";
        else if(c<100)z="3 ekor tabi'";
        else if(c<110)z="1 musinnah + 2 tabi'";
        else if(c<120)z="2 musinnah + 1 tabi'";
        else if(c<130)z="3 musinnah (atau 4 tabi')";
        else {due=0; z="Tiap 30 ekor: +1 tabi'; tiap 40 ekor: +1 musinnah";}
      }
      out.result = due; out.zakatLabel = z;
      out.rows.push(["Jumlah", c+" ekor"]);
      out.rows.push(["Nishab", "30 ekor"]);
      out.rows.push(["Zakat", z]);
      out.method = "Tabel zakat sapi (sa'imah, haul 1 tahun).";
      out.source = "BAZNAS; ketentuan zakat ternak";
    }
    out.notes.push("Syarat: digembalakan (sa'imah), mencapai nishab, haul 1 tahun.");
    out.date = today;
    return out;
  }
  return out;
};
