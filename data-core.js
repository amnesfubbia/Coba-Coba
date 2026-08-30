/* ============================================================
   SILMIKAFFAH — Database Inti (data-core.js)
   Registri terpusat: MENUS, SOURCES, ENTRIES, CITIES
   Prinsip: SATU TOPIK = SATU ENTRI UTAMA. Menu lain memakai relasi.
   ============================================================ */
window.SILMIKAFFAH = window.SILMIKAFFAH || {};
const DB = window.SILMIKAFFAH;

/* ---------- 14 MENU UTAMA ---------- */
DB.MENUS = [
  {id:1, num:"01", name:"Rukun Islam", icon:"pillar", short:"Lima pilar Islam",
   desc:"Syahadat, Shalat, Zakat, Puasa, serta Haji & Umrah.",
   materials:[
     {id:"syahadat", name:"Syahadat"},
     {id:"shalat", name:"Shalat"},
     {id:"zakat", name:"Zakat"},
     {id:"puasa", name:"Puasa"},
     {id:"haji", name:"Haji & Umrah"}]},
  {id:2, num:"02", name:"Rukun Iman", icon:"iman", short:"Enam rukun iman",
   desc:"Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Akhir, Qada & Qadar.",
   materials:[
     {id:"iman-kepada-allah", name:"Iman kepada Allah"},
     {id:"iman-kepada-malaikat", name:"Iman kepada Malaikat"},
     {id:"iman-kepada-kitab", name:"Iman kepada Kitab"},
     {id:"iman-kepada-rasul", name:"Iman kepada Rasul"},
     {id:"iman-kepada-hari-akhir", name:"Iman kepada Hari Akhir"},
     {id:"iman-kepada-qada-qadar", name:"Iman kepada Qada & Qadar"}]},
  {id:3, num:"03", name:"Al-Qur'an", icon:"quran", short:"Mushaf, juz, tajwid, tafsir",
   desc:"114 surah, Juz 1–30, Juz 'Amma, Iqra 1–6, Tajwid, Tafsir & Ulumul Qur'an.",
   materials:[
     {id:"mushaf", name:"Mushaf"},
     {id:"juz", name:"Juz 1–30"},
     {id:"juz-amma", name:"Juz 'Amma"},
     {id:"iqra", name:"Iqra 1–6"},
     {id:"tajwid", name:"Tajwid"},
     {id:"tafsir", name:"Tafsir & Ulumul Qur'an"}]},
  {id:4, num:"04", name:"Hadis & Sunnah", icon:"hadis", short:"Hadis, sunnah, ulumul hadis",
   desc:"Kumpulan hadis, pembahasan sunnah, ulumul hadis, dan syarah.",
   materials:[
     {id:"hadis", name:"Hadis"},
     {id:"sunnah", name:"Sunnah"},
     {id:"ulumul-hadis", name:"Ulumul Hadis"},
     {id:"syarah-hadis", name:"Syarah Hadis"}]},
  {id:5, num:"05", name:"Fiqih", icon:"fiqih", short:"Hukum Islam",
   desc:"Fiqih ibadah, muamalah, keluarga, kontemporer, ushul, kaidah, maqashid.",
   materials:[
     {id:"fiqih-ibadah", name:"Fiqih Ibadah"},
     {id:"fiqih-muamalah", name:"Fiqih Muamalah"},
     {id:"fiqih-keluarga", name:"Fiqih Keluarga"},
     {id:"fiqih-kontemporer", name:"Fiqih Kontemporer"},
     {id:"ushul-fiqih", name:"Ushul Fiqih"},
     {id:"kaidah-fiqih", name:"Kaidah Fiqih"},
     {id:"maqashid", name:"Maqashid Syariah"}]},
  {id:6, num:"06", name:"Doa & Dzikir", icon:"doa", short:"Doa harian & dzikir",
   desc:"Doa harian, doa ibadah, dzikir pagi-petang, dan dzikir setelah shalat.",
   materials:[
     {id:"doa", name:"Doa"},
     {id:"dzikir", name:"Dzikir"}]},
  {id:7, num:"07", name:"Akhlak, Adab & Tazkiyah", icon:"akhlak", short:"Akhlak & jiwa",
   desc:"Akhlak mulia, adab keseharian, dan penyucian jiwa (tazkiyah).",
   materials:[
     {id:"akhlak", name:"Akhlak"},
     {id:"adab", name:"Adab"},
     {id:"tazkiyah", name:"Tazkiyah"}]},
  {id:8, num:"08", name:"Sirah & Sejarah Islam", icon:"sirah", short:"Sejarah & ziarah",
   desc:"Perjalanan hidup Nabi Muhammad ﷺ, sejarah Islam, dan eksplorasi ziarah.",
   materials:[
     {id:"sirah-nabi", name:"Sirah Nabi Muhammad ﷺ"},
     {id:"sahabat", name:"Sahabat & Generasi Awal"},
     {id:"sejarah-islam", name:"Sejarah Islam"},
     {id:"peristiwa", name:"Peristiwa Sejarah"},
     {id:"ziarah", name:"Ziarah"}]},
  {id:9, num:"09", name:"Tokoh & Ulama", icon:"tokoh", short:"Biografi tokoh",
   desc:"Nabi, sahabat, ulama, ilmuwan Muslim, dan tokoh perempuan Muslim.",
   materials:[
     {id:"nabi-rasul", name:"Nabi & Rasul"},
     {id:"sahabat-tabiin", name:"Sahabat & Tabi'in"},
     {id:"ulama", name:"Ulama & Imam"},
     {id:"ilmuwan", name:"Ilmuwan Muslim"},
     {id:"tokoh-perempuan", name:"Tokoh Perempuan Muslim"},
     {id:"nusantara", name:"Tokoh Islam Nusantara"}]},
  {id:10, num:"10", name:"Kalender Hijriah", icon:"kalender", short:"Kalender & peristiwa",
   desc:"Tanggal Hijriah hari ini, kalender bulanan, hari besar, dan sejarah pada bulan ini.",
   materials:[
     {id:"hari-ini", name:"Hari Ini"},
     {id:"kalender-bulanan", name:"Kalender Bulanan"},
     {id:"detail-tanggal", name:"Detail Tanggal"},
     {id:"informasi-hari-ini", name:"Informasi Hari Ini"},
     {id:"sejarah-bulan-ini", name:"Sejarah pada Bulan Ini"}]},
  {id:11, num:"11", name:"Pendidikan & Dakwah", icon:"pendidikan", short:"Belajar & berdakwah",
   desc:"Adab menuntut ilmu, metode belajar, dan metode dakwah.",
   materials:[
     {id:"pendidikan-islam", name:"Pendidikan Islam"},
     {id:"dakwah", name:"Dakwah"}]},
  {id:12, num:"12", name:"Bahasa Arab & Kamus Islam", icon:"arab", short:"Belajar bahasa Arab",
   desc:"Bahasa Arab dasar, nahwu, sharaf, balaghah, dan kamus istilah Islam.",
   materials:[
     {id:"bahasa-arab-dasar", name:"Bahasa Arab Dasar"},
     {id:"nahwu", name:"Nahwu"},
     {id:"sharaf", name:"Sharaf"},
     {id:"balaghah", name:"Balaghah"},
     {id:"kamus-islam", name:"Kamus Islam"}]},
  {id:13, num:"13", name:"Peradaban Islam", icon:"peradaban", short:"Warisan peradaban",
   desc:"Kota Islam, masjid bersejarah, ilmu pengetahuan, dan kontribusi peradaban.",
   materials:[
     {id:"kota-islam", name:"Kota Islam"},
     {id:"masjid-bersejarah", name:"Masjid Bersejarah"},
     {id:"pendidikan-peradaban", name:"Pendidikan & Ilmu"},
     {id:"ekonomi-peradaban", name:"Ekonomi & Perdagangan"},
     {id:"seni-peradaban", name:"Seni & Arsitektur"}]},
  {id:14, num:"14", name:"Islam & Kehidupan Kontemporer", icon:"kontemporer", short:"Islam & zaman",
   desc:"Perspektif Islam atas teknologi, AI, media digital, ekonomi, dan isu masyarakat.",
   materials:[
     {id:"teknologi-kontemporer", name:"Teknologi & AI"},
     {id:"media-digital", name:"Media & Etika Digital"},
     {id:"ekonomi-modern", name:"Ekonomi Modern"},
     {id:"kesehatan-lingkungan", name:"Kesehatan & Lingkungan"},
     {id:"masyarakat", name:"Kehidupan Masyarakat"}]}
];

/* ---------- SUMBER (SOURCE DATABASE) ---------- */
DB.SOURCES = {
  quran:{id:"quran", title:"Al-Qur'an", type:"Kitab Suci", note:"Teks dan terjemahan mengikuti mushaf standar."},
  bukhari:{id:"bukhari", title:"Shahih Bukhari", type:"Kitab Hadis", note:"Imam Muhammad bin Ismail al-Bukhari (194–256 H)."},
  muslim:{id:"muslim", title:"Shahih Muslim", type:"Kitab Hadis", note:"Imam Muslim bin al-Hajjaj (206–261 H)."},
  abudawud:{id:"abudawud", title:"Sunan Abu Dawud", type:"Kitab Hadis", note:"Imam Abu Dawud as-Sijistani (202–275 H)."},
  tirmidzi:{id:"tirmidzi", title:"Jami' at-Tirmidzi", type:"Kitab Hadis", note:"Imam at-Tirmidzi (209–279 H)."},
  nisai:{id:"nisai", title:"Sunan an-Nasa'i", type:"Kitab Hadis", note:"Imam an-Nasa'i (215–303 H)."},
  ibnMajah:{id:"ibnMajah", title:"Sunan Ibnu Majah", type:"Kitab Hadis", note:"Imam Ibnu Majah (209–273 H)."},
  ijma:{id:"ijma", title:"Ijma' Ulama", type:"Konsensus", note:"Kesepakatan ulama tentang suatu hukum."},
  qiyas:{id:"qiyas", title:"Qiyas", type:"Metodologi", note:"Analogi hukum karena kesamaan illat (sebab hukum)."},
  kemenag:{id:"kemenag", title:"Kementerian Agama RI", type:"Lembaga", note:"Sumber jadwal imsakiyah dan kalender."},
  baznas:{id:"baznas", title:"BAZNAS (Badan Amil Zakat Nasional)", type:"Lembaga", note:"Pedoman perhitungan zakat di Indonesia."},
  kemenkeu:{id:"kemenkeu", title:"Kemenkeu RI", type:"Lembaga", note:"Harga emas acuan untuk nisab."},
  fiqihsunnah:{id:"fiqihsunnah", title:"Fiqih Sunnah — Sayyid Sabiq", type:"Kitab Fiqih", note:"Referensi fiqih kontemporer."},
  alfiqh:{id:"alfiqh", title:"Al-Fiqh al-Islami wa Adillatuhu — Wahbah az-Zuhaili", type:"Kitab Fiqih", note:"Ensiklopedia fiqih perbandingan."},
  sirah:{id:"sirah", title:"Sirah Nabawiyah (Ibnu Hisyam / Syaikh Shafiyyurrahman al-Mubarakfuri)", type:"Kitab Sirah", note:"Biografi Nabi Muhammad ﷺ."},
  tafsir:{id:"tafsir", title:"Tafsir Ibnu Katsir", type:"Kitab Tafsir", note:"Tafsir bi al-ma'tsur."},
  app:{id:"app", title:"Materi orisinal SILMIKAFFAH", type:"Internal", note:"Konten disusun tim aplikasi; wajib ditinjau ulama."}
};

/* ---------- KOTA UNTUK JADWAL SHALAT ---------- */
DB.CITIES = [
  {id:"jakarta", name:"Jakarta", lat:-6.2088, lon:106.8456, utc:7},
  {id:"bandung", name:"Bandung", lat:-6.9175, lon:107.6191, utc:7},
  {id:"surabaya", name:"Surabaya", lat:-7.2575, lon:112.7521, utc:7},
  {id:"medan", name:"Medan", lat:3.5952, lon:98.6722, utc:7},
  {id:"makassar", name:"Makassar", lat:-5.1477, lon:119.4327, utc:8},
  {id:"yogyakarta", name:"Yogyakarta", lat:-7.7956, lon:110.3695, utc:7},
  {id:"semarang", name:"Semarang", lat:-6.9667, lon:110.4167, utc:7},
  {id:"palembang", name:"Palembang", lat:-2.9761, lon:104.7754, utc:7},
  {id:"banten", name:"Tangerang", lat:-6.1783, lon:106.6319, utc:7},
  {id:"aceh", name:"Banda Aceh", lat:5.5483, lon:95.3238, utc:7},
  {id:"pontianak", name:"Pontianak", lat:-0.0263, lon:109.3425, utc:7},
  {id:"jayapura", name:"Jayapura", lat:-2.5916, lon:140.6690, utc:9},
  {id:"singapura", name:"Singapura", lat:1.3521, lon:103.8198, utc:8},
  {id:"kualalumpur", name:"Kuala Lumpur", lat:3.1390, lon:101.6869, utc:8},
  {id:"makkah", name:"Makkah", lat:21.3891, lon:39.8579, utc:3},
  {id:"madinah", name:"Madinah", lat:24.5247, lon:39.5692, utc:3}
];

/* ---------- REGISTRI ENTRI (SATU SUMBER KEBENARAN) ---------- */
DB.ENTRIES = [];

/* Helper: tambah entri (dipakai semua file data) */
function addEntry(e){
  e.slug = e.slug || e.id;
  e.status = e.status || "ready";
  e.tags = e.tags || [];
  e.related = e.related || [];
  e.sources = e.sources || [];
  e.body = e.body || [];
  DB.ENTRIES.push(e);
  return e;
}
function getEntry(id){ return DB.ENTRIES.find(e => e.id === id); }

/* ============================================================
   MENU 01 — RUKUN ISLAM
   ============================================================ */

/* ---- MATERI 1: SYAHADAT ---- */
addEntry({
  id:"syahadat", menu:1, material:"syahadat", type:"article",
  title:"Syahadat", summary:"Dua kalimat syahadat adalah pintu masuk Islam dan inti akidah seorang Muslim.",
  arabic:{text:"أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ", translit:"Asyhadu an la ilaha illallah, wa asyhadu anna Muhammadar rasulullah", arti:"Aku bersaksi bahwa tiada tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.", audio:"", audio_src:"", source:"HR. Muslim no. 16"},
  body:[
    {h:"Pengertian", p:["Syahadat berasal dari kata syahida — menyaksikan, bersaksi, dan meyakini. Dua kalimat syahadat (syahadatain) adalah pernyataan keyakinan yang menjadi rukun Islam pertama dan syarat sah keislaman seseorang."]},
    {h:"Kandungan", list:["Syahadat Tauhid: menetapkan keesaan Allah dan menafikan segala sesembahan selain-Nya.","Syahadat Rasul: membenarkan kerasulan Muhammad ﷺ, mengikuti syariatnya, dan mencintainya.","Konsekuensi: konsekuensi syahadat adalah beribadah hanya kepada Allah dan menjadikan sunnah Rasulullah ﷺ sebagai pedoman hidup."]},
    {h:"Kedudukan", p:["Rasulullah ﷺ bersabda: \"Islam dibangun di atas lima perkara: bersaksi bahwa tiada tuhan selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, berpuasa Ramadan, dan haji ke Baitullah.\" (HR. Bukhari no. 8, Muslim no. 16)."]}
  ],
  sources:["quran","bukhari","muslim"], related:["shahada-tauhid","shahada-rasul","iman-kepada-allah"], tags:["akidah","rukun islam"]
});
addEntry({
  id:"shahada-tauhid", menu:1, material:"syahadat", type:"article",
  title:"Syahadat Tauhid", summary:"Bagian pertama syahadat: menegaskan keesaan Allah dalam beribadah.",
  arabic:{text:"أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ", translit:"Asyhadu an la ilaha illallah", arti:"Aku bersaksi bahwa tiada tuhan yang berhak disembah selain Allah.", audio:"", audio_src:"", source:""},
  body:[
    {h:"Makna", p:["Bagian ini menafikan segala sesembahan selain Allah (nafi) dan menetapkan ibadah hanya kepada Allah (itsbat). Konsekuensinya: tidak ada yang berhak disembah, diminta, dan dituju dalam ibadah kecuali Allah."]},
    {h:"Syarat diterima", list:["Ilmu (mengetahui maknanya).","Yakin tanpa keraguan.","Ikhlas tanpa syirik.","Jujur dalam mengucapkan.","Cinta dan membenci karena Allah.","Tunduk dan patuh pada konsekuensinya."]}
  ],
  sources:["quran"], related:["syahadat","shahada-rasul","tauhid"], tags:["akidah","tauhid"]
});
addEntry({
  id:"shahada-rasul", menu:1, material:"syahadat", type:"article",
  title:"Syahadat Rasul", summary:"Bagian kedua syahadat: mengakui kerasulan Muhammad ﷺ.",
  arabic:{text:"وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ", translit:"Wa asyhadu anna Muhammadar rasulullah", arti:"Dan aku bersaksi bahwa Muhammad adalah utusan Allah.", audio:"", audio_src:"", source:""},
  body:[
    {h:"Konsekuensi", list:["Membenarkan segala yang disampaikannya.","Menjadikan sunnahnya sebagai sumber hukum kedua.","Mencintai dan menghormatinya sebagai utusan Allah.","Meneladani akhlaknya."]}
  ],
  sources:["quran"], related:["syahadat","shahada-tauhid","nabi-muhammad"], tags:["akidah"]
});

/* ---- MATERI 2: SHALAT ---- */
addEntry({
  id:"shalat", menu:1, material:"shalat", type:"article",
  title:"Shalat", summary:"Shalat adalah tiang agama dan ibadah wajib paling utama dalam Islam. Seluruh materi shalat berpusat di sini; menu lain hanya menautkan.",
  body:[
    {h:"Kedudukan", p:["Shalat adalah rukun Islam kedua dan amalan pertama yang dihisab pada hari kiamat. Rasulullah ﷺ bersabda: \"Shalat adalah tiang agama; barang siapa menegakkannya, sungguh ia telah menegakkan agama.\" (HR. al-Baihaqi; redaksi umum)."]},
    {h:"Hukum", p:["Shalat lima waktu (Subuh, Zuhur, Asar, Maghrib, Isya) hukumnya wajib bagi setiap Muslim yang balig, berakal, dan suci. Kewajiban ini disyariatkan pada peristiwa Isra' Mi'raj."]},
    {h:"Rumah utama", p:["Materi tata cara, gerakan, bacaan, dan ketentuan shalat dikembangkan di bawah materi ini. Menu Fiqih, Doa, Hadis, dan fitur lain menautkan ke sini (relasi), tidak membuat artikel shalat kedua."]}
  ],
  sources:["quran","bukhari"], related:["shalat-wajib","tata-cara-shalat","rukun-shalat","fiqih-ibadah"], tags:["ibadah","rukun islam"]
});
addEntry({
  id:"shalat-wajib", menu:1, material:"shalat", sub:"wajib", type:"article",
  title:"Shalat Wajib (Lima Waktu)", summary:"Subuh, Zuhur, Asar, Maghrib, dan Isya — lima shalat fardhu sehari semalam.",
  body:[
    {h:"Jumlah rakaat", list:["Subuh: 2 rakaat (waktu: sejak fajar shadiq hingga terbit matahari).","Zuhur: 4 rakaat (setelah matahari condong ke barat hingga bayangan sama panjang).","Asar: 4 rakaat (hingga matahari menguning / terbenam).","Maghrib: 3 rakaat (setelah terbenam matahari hingga hilang mega merah).","Isya: 4 rakaat (setelah hilang mega merah hingga terbit fajar)."]},
    {h:"Catatan", p:["Penentuan waktu mengikuti perhitungan astronomi/rukyah; aplikasi ini menyediakan jadwal shalat berbasis perhitungan dengan metode yang dapat dipilih di Pengaturan."]}
  ],
  sources:["quran","kemenag"], related:["subuh","zuhur","asar","maghrib","isya","jadwal-shalat"], tags:["ibadah","shalat"]
});
addEntry({id:"subuh", menu:1, material:"shalat", sub:"wajib", type:"article", title:"Shalat Subuh", summary:"2 rakaat, dikerjakan sejak terbit fajar hingga terbit matahari.",
  body:[{h:"Waktu", p:["Dimulai sejak fajar shadiq (fajar kedua yang menyebar di ufuk) hingga terbit matahari. Disunnahkan menyegerakan dan memperpanjang bacaan."]},{h:"Keutamaan", p:["Rasulullah ﷺ bersabda: \"Barang siapa mengerjakan shalat Bardain (Subuh dan Asar) niscaya masuk surga.\" (HR. Bukhari no. 574, Muslim no. 635)."]}],
  sources:["bukhari","muslim"], related:["shalat-wajib"], tags:["ibadah","shalat"]});
addEntry({id:"zuhur", menu:1, material:"shalat", sub:"wajib", type:"article", title:"Shalat Zuhur", summary:"4 rakaat, dimulai saat matahari tergelincir ke barat.",
  body:[{h:"Waktu", p:["Setelah matahari condong ke barat (zawal) hingga bayangan suatu benda sama panjang dengan bendanya. Pada hari Jumat, zuhur diganti shalat Jumat bagi yang memenuhi syarat."]},{h:"Hari Jumat", p:["Shalat Jumat hukumnya wajib bagi laki-laki Muslim yang mukim; dua rakaat dengan khutbah. Ini pengganti zuhur, bukan shalat tambahan."]}],
  sources:["bukhari"], related:["shalat-wajib","shalat-jumat"], tags:["ibadah","shalat"]});
addEntry({id:"asar", menu:1, material:"shalat", sub:"wajib", type:"article", title:"Shalat Asar", summary:"4 rakaat, dari bayangan sama panjang hingga terbenam matahari.",
  body:[{h:"Peringatan", p:["Rasulullah ﷺ bersabda: \"Barang siapa meninggalkan shalat Asar, sungguh hapus amalnya.\" (HR. Bukhari no. 553). Waktu Asar habis saat matahari terbenam."]}],
  sources:["bukhari"], related:["shalat-wajib"], tags:["ibadah","shalat"]});
addEntry({id:"maghrib", menu:1, material:"shalat", sub:"wajib", type:"article", title:"Shalat Maghrib", summary:"3 rakaat, segera setelah matahari terbenam.",
  body:[{h:"Waktu", p:["Dimulai saat matahari terbenam hingga hilangnya mega merah (syafaq). Disunnahkan menyegerakan shalat Maghrib."]}],
  sources:["bukhari"], related:["shalat-wajib"], tags:["ibadah","shalat"]});
addEntry({id:"isya", menu:1, material:"shalat", sub:"wajib", type:"article", title:"Shalat Isya", summary:"4 rakaat, dari hilangnya mega merah hingga terbit fajar.",
  body:[{h:"Waktu", p:["Setelah hilang mega merah hingga terbit fajar shadiq. Disunnahkan mengakhirkannya sedikit selama tidak memberatkan."]}],
  sources:["bukhari"], related:["shalat-wajib","witir"], tags:["ibadah","shalat"]});

addEntry({
  id:"shalat-sunnah", menu:1, material:"shalat", sub:"sunnah", type:"article",
  title:"Shalat Sunnah", summary:"Shalat yang dianjurkan: rawatib, dhuha, tahajud, witir, tarawih, dan lainnya.",
  body:[{h:"Catatan", p:["Shalat sunnah tidak menggantikan kewajiban, tetapi menyempurnakan kekurangan shalat wajib dan mendekatkan diri kepada Allah. Masing-masing dibahas sebagai entri tersendiri di bawah materi ini."]}],
  sources:["muslim"], related:["rawatib","dhuha","tahajud","witir","tarawih","istikharah","hajat","gerhana","tahiyyatul-masjid"], tags:["ibadah","shalat sunnah"]
});
addEntry({id:"rawatib", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Rawatib", summary:"Sunnah yang mengiringi shalat fardhu, sebelum atau sesudahnya.",
  body:[{h:"Pembagian", list:["Muakkad (sangat dianjurkan): 2 rakaat sebelum Subuh, 2/4 sebelum Zuhur, 2 sesudah Zuhur, 2 sesudah Maghrib, 2 sesudah Isya.","Ghairu muakkad: sunnah tambahan lainnya."]},{h:"Dalil", p:["Rasulullah ﷺ bersabda: \"Barang siapa menjaga 12 rakaat (sunnah rawatib), Allah membangunkan baginya rumah di surga.\" (HR. Tirmidzi no. 414)."]}],
  sources:["tirmidzi"], related:["shalat-sunnah"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"dhuha", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Dhuha", summary:"Sunnah pada pagi hari, minimal 2 rakaat.",
  body:[{h:"Waktu", p:["Setelah matahari naik setinggi tombak hingga sebelum zawal. Dianjurkan 2–8 rakaat."]},{h:"Dalil", p:["Dalam hadis qudsi, Allah berfirman: \"Wahai anak Adam, janganlah engkau lemah dari empat rakaat di awal harimu, niscaya Aku cukupkan engkau di akhirnya.\" (HR. Abu Dawud no. 1289)."]}],
  sources:["abudawud"], related:["shalat-sunnah"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"tahajud", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Tahajud", summary:"Sunnah di sepertiga malam, kebiasaan orang saleh.",
  body:[{h:"Waktu", p:["Setelah tidur, pada sepertiga malam — terutama sepertiga terakhir, saat doa mustajab. Jumlah rakaat tidak dibatasi; dikerjakan dua-dua rakaat."]},{h:"Dalil", p:["QS. Al-Muzzammil 73:1-4 memerintahkan qiyamul lail; \"Pada malam hari, hendaklah engkau shalat tahajud sebagai ibadah tambahan bagimu\" (QS. Al-Isra' 17:79)."]}],
  sources:["quran"], related:["shalat-sunnah","lailatul-qadar"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"witir", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Witir", summary:"Penutup ibadah malam, ganjil jumlah rakaatnya.",
  body:[{h:"Ketentuan", p:["Minimal 1 rakaat; umumnya 1, 3, 5, atau 11 rakaat. Rasulullah ﷺ bersabda: \"Jadikanlah akhir shalat malam kalian berupa witir.\" (HR. Bukhari no. 998, Muslim no. 751)."]}],
  sources:["bukhari","muslim"], related:["shalat-sunnah","tarawih"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"tarawih", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Tarawih", summary:"Qiyam Ramadan, dikerjakan malam hari di bulan Ramadan.",
  body:[{h:"Ketentuan", p:["Dikerjakan berjamaah atau sendiri, biasanya 8 atau 20 rakaat, ditutup witir. Rasulullah ﷺ bersabda: \"Barang siapa menghidupkan malam Ramadan dengan iman dan mengharap pahala, diampuni dosa-dosanya yang telah lalu.\" (HR. Bukhari no. 37, Muslim no. 759)."]}],
  sources:["bukhari","muslim"], related:["puasa-ramadan","witir"], tags:["ibadah","ramadan"]});
addEntry({id:"istikharah", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Istikharah", summary:"Memohon petunjuk Allah ketika dihadapkan pada pilihan.",
  body:[{h:"Tata cara", p:["Dua rakaat di luar fardhu, lalu membaca doa istikharah yang diajarkan Rasulullah ﷺ (HR. Bukhari no. 1162): memohon agar Allah memilihkan yang terbaik dan menganugerahkan keridhaan."]}],
  sources:["bukhari"], related:["shalat-sunnah","doa"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"hajat", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Hajat", summary:"Sunnah ketika memiliki kebutuhan penting, lalu berdoa kepada Allah.",
  body:[{h:"Catatan", p:["Dikerjakan 2–12 rakaat sesuai kemampuan, lalu memuji Allah, bershalawat, dan memohon hajat. Inti utamanya adalah keikhlasan dan doa."]}],
  sources:["tirmidzi"], related:["shalat-sunnah","doa"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"tahiyyatul-masjid", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Tahiyyatul Masjid", summary:"Menghormati masjid dengan dua rakaat sebelum duduk.",
  body:[{h:"Ketentuan", p:["Rasulullah ﷺ bersabda: \"Apabila salah seorang dari kalian masuk masjid, janganlah duduk hingga shalat dua rakaat.\" (HR. Bukhari no. 444, Muslim no. 714)."]}],
  sources:["bukhari","muslim"], related:["shalat-sunnah"], tags:["ibadah","shalat sunnah"]});
addEntry({id:"gerhana", menu:1, material:"shalat", sub:"sunnah", type:"article", title:"Shalat Gerhana (Kusuf & Khusuf)", summary:"Sunnah muakkad saat terjadi gerhana matahari atau bulan.",
  body:[{h:"Tata cara", p:["Dua rakaat dengan dua kali berdiri, dua kali rukuk, dan dua kali sujud pada tiap rakaat; disunnahkan berjamaah, khutbah, dan memperbanyak doa (HR. Bukhari no. 1046, Muslim no. 901)."]}],
  sources:["bukhari","muslim"], related:["shalat-sunnah","doa"], tags:["ibadah","shalat sunnah"]});

/* ---- Submateri C: Tata Cara + Gerakan ---- */
addEntry({
  id:"tata-cara-shalat", menu:1, material:"shalat", sub:"tata-cara", type:"guide",
  title:"Tata Cara Shalat (Langkah demi Langkah)", summary:"Urutan gerakan shalat sesuai tuntunan; setiap gerakan memiliki entri tersendiri dengan urutan (sequence).",
  body:[
    {h:"Urutan gerakan", list:["1. Niat dalam hati","2. Takbiratul ihram (mengangkat tangan)","3. Berdiri tegak bagi yang mampu","4. Membaca Al-Fatihah","5. Rukuk","6. I'tidal","7. Sujud pertama","8. Duduk antara dua sujud","9. Sujud kedua","10. Berdiri untuk rakaat berikutnya / tasyahud akhir","11. Tasyahud akhir + shalawat","12. Salam ke kanan dan kiri"]},
    {h:"Catatan", p:["Urutan mengikuti tata cara yang dijelaskan dari sumber hadis (HR. Bukhari dan Muslim — hadis Musi' Shalatuh). Rincian tiap gerakan ada pada entri gerakan di bawah ini."]}
  ],
  sources:["bukhari","muslim"], related:["gerakan-takbir","gerakan-rukuk","gerakan-sujud","gerakan-tasyahud","bacaan-fatihah"], tags:["ibadah","shalat"]
});

/* Gerakan — sequence diisi nomor urut utama */
const MOVEMENTS = [
  {id:"gerakan-niat", seq:1, name:"Niat", desc:"Niat di dalam hati untuk mengerjakan shalat tertentu; tempatnya hati, bukan lafaz.",
   arabic:{text:"",translit:"",arti:"Niat dalam hati, misalnya: aku niat shalat zuhur empat rakaat karena Allah ta'ala.",audio:"",audio_src:"",source:""}},
  {id:"gerakan-takbir", seq:2, name:"Gerakan Takbiratul Ihram", desc:"Mengangkat kedua tangan sejajar telinga/bahu lalu bertakbir; tangan kanan diletakkan di atas tangan kiri di dada.",
   arabic:{text:"اللهُ أَكْبَرُ",translit:"Allahu akbar",arti:"Allah Maha Besar.",audio:"",audio_src:"",source:""}},
  {id:"gerakan-berdiri", seq:3, name:"Berdiri", desc:"Berdiri tegak menghadap kiblat bagi yang mampu, pandangan ke tempat sujud; membaca Al-Fatihah dan bacaan lainnya."},
  {id:"gerakan-rukuk", seq:5, name:"Rukuk", desc:"Membungkuk hingga punggung rata, kedua tangan di lutut, membaca tasbih rukuk. Kesalahan umum: punggung tidak rata atau kepala menunduk berlebihan.",
   arabic:{text:"سُبْحَانَ رَبِّيَ الْعَظِيمِ",translit:"Subhana rabbiyal-'azhim",arti:"Mahasuci Tuhanku Yang Maha Agung.",audio:"",audio_src:"",source:""}},
  {id:"gerakan-itidal", seq:6, name:"I'tidal", desc:"Bangkit dari rukuk dengan mengangkat kedua tangan, lalu berdiri tegak dan membaca bacaan i'tidal sebelum sujud."},
  {id:"gerakan-sujud", seq:7, name:"Sujud", desc:"Sujud dengan tujuh anggota badan: dahi, dua telapak tangan, dua lutut, dan ujung dua kaki; membaca tasbih sujud.",
   arabic:{text:"سُبْحَانَ رَبِّيَ الْأَعْلَى",translit:"Subhana rabbiyal-a'la",arti:"Mahasuci Tuhanku Yang Maha Tinggi.",audio:"",audio_src:"",source:""}},
  {id:"gerakan-duduk-sujud", seq:8, name:"Duduk antara Dua Sujud", desc:"Duduk iftirasy (bertumpu pada kaki kiri), telapak tangan di atas paha, membaca doa duduk antara dua sujud."},
  {id:"gerakan-tasyahud", seq:11, name:"Tasyahud Akhir", desc:"Duduk tawarruk (kaki kiri dimasukkan ke bawah kaki kanan), membaca tasyahud, shalawat, lalu salam. Tasyahud awal dilakukan pada rakaat kedua."},
  {id:"gerakan-salam", seq:12, name:"Gerakan Salam", desc:"Menoleh ke kanan lalu ke kiri sambil mengucapkan salam, mengakhiri shalat.",
   arabic:{text:"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",translit:"Assalamu 'alaikum wa rahmatullah",arti:"Semoga keselamatan dan rahmat Allah tercurah kepadamu.",audio:"",audio_src:"",source:""}}
];
MOVEMENTS.forEach(m => {
  addEntry({
    id:m.id, menu:1, material:"shalat", sub:"gerakan", type:"movement",
    title:m.name, summary:m.desc, sequence:m.seq,
    arabic:m.arabic || null,
    body:[
      {h:"Cara melakukan", p:[m.desc]},
      {h:"Kesalahan umum", p:["Tergesa-gesa (tidak thuma'ninah). Thuma'ninah — berhenti sejenak hingga tenang — adalah bagian dari rukun shalat."]}
    ],
    sources:["bukhari","muslim"], related:["tata-cara-shalat","rukun-shalat"], tags:["ibadah","shalat","gerakan"]
  });
});

/* ---- Submateri D: Bacaan Shalat ---- */
addEntry({id:"bacaan-takbir", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Takbiratul Ihram",
  arabic:{text:"اللهُ أَكْبَرُ",translit:"Allahu akbar",arti:"Allah Maha Besar.",audio:"",audio_src:"",source:""},
  body:[{h:"Keterangan", p:["Diucapkan saat memulai shalat sambil mengangkat kedua tangan. Termasuk rukun shalat (takbiratul ihram)."]}],
  sources:["muslim"], related:["gerakan-takbir"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-iftitah", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Doa Iftitah",
  arabic:{text:"اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",translit:"Allahumma ba'id baini wa baina khatayaya kama ba'adta baina-l-masyriqi wa-l-maghrib. Allahumma naqqini min khatayaya kama yunaqqats-tsaubul-abyadhu minad-danas. Allahumma-ghsilni min khatayaya bil-ma'i wats-tsalji wal-barad.",arti:"Ya Allah, jauhkanlah antara aku dan kesalahan-kesalahanku sebagaimana Engkau menjauhkan antara timur dan barat. Ya Allah, bersihkanlah aku dari kesalahan-kesalahanku sebagaimana dibersihkannya kain putih dari kotoran. Ya Allah, basuhlah aku dari kesalahan-kesalahanku dengan air, salju, dan air dingin.",audio:"",audio_src:"",source:"HR. Bukhari no. 744, Muslim no. 598"},
  body:[{h:"Keterangan", p:["Dibaca setelah takbiratul ihram sebelum Al-Fatihah. Termasuk sunnah; ada beberapa redaksi lain yang sahih."]}],
  sources:["bukhari","muslim"], related:["tata-cara-shalat"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-fatihah", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Surat Al-Fatihah",
  arabic:{text:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾",translit:"Bismillahir-rahmanir-rahim. Alhamdu lillahi rabbil-'alamin. Ar-rahmanir-rahim. Maliki yaumid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-lazina an'amta 'alaihim ghairil-maghdubi 'alaihim wa lad-dallin.",arti:"Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam. Yang Maha Pengasih lagi Maha Penyayang. Pemilik hari pembalasan. Hanya kepada Engkau kami menyembah dan hanya kepada Engkau kami memohon pertolongan. Tunjukilah kami jalan yang lurus, yaitu jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan orang-orang yang sesat.",audio:"",audio_src:"",source:"QS. Al-Fatihah 1:1-7"},
  body:[{h:"Kedudukan", p:["Al-Fatihah adalah rukun shalat; tidak sah shalat tanpa membacanya (HR. Bukhari no. 756, Muslim no. 394)."]}],
  sources:["quran","bukhari","muslim"], related:["surah-1","rukun-shalat"], tags:["shalat","al-quran"]});
addEntry({id:"bacaan-rukuk", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Bacaan Rukuk",
  arabic:{text:"سُبْحَانَ رَبِّيَ الْعَظِيمِ",translit:"Subhana rabbiyal-'azhim (3×)",arti:"Mahasuci Tuhanku Yang Maha Agung.",audio:"",audio_src:"",source:"HR. Abu Dawud no. 873"},
  body:[{h:"Keterangan", p:["Dibaca minimal tiga kali saat rukuk. Boleh ditambah: \"Subhanakallahumma rabbana wa bihamdik, Allahummaghfir li.\""]}],
  sources:["abudawud"], related:["gerakan-rukuk"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-itidal", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Bacaan I'tidal",
  arabic:{text:"سَمِعَ اللهُ لِمَنْ حَمِدَهُ — رَبَّنَا وَلَكَ الْحَمْدُ",translit:"Sami'allahu liman hamidah. Rabbana wa lakal-hamd.",arti:"Allah mendengar orang yang memuji-Nya. Wahai Tuhan kami, bagi-Mu segala puji.",audio:"",audio_src:"",source:"HR. Bukhari no. 789, Muslim no. 392"},
  body:[{h:"Keterangan", p:["\"Sami'allahu liman hamidah\" diucapkan saat bangkit; \"Rabbana wa lakal-hamd\" saat berdiri tegak (makmum cukup membaca yang kedua)."]}],
  sources:["bukhari","muslim"], related:["gerakan-itidal"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-sujud", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Bacaan Sujud",
  arabic:{text:"سُبْحَانَ رَبِّيَ الْأَعْلَى",translit:"Subhana rabbiyal-a'la (3×)",arti:"Mahasuci Tuhanku Yang Maha Tinggi.",audio:"",audio_src:"",source:"HR. Abu Dawud no. 874"},
  body:[{h:"Keterangan", p:["Dibaca saat sujud. Disunnahkan memperbanyak doa ketika sujud, karena saat itu hamba paling dekat dengan Tuhannya (HR. Muslim no. 482)."]}],
  sources:["abudawud","muslim"], related:["gerakan-sujud"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-duduk", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Doa Duduk antara Dua Sujud",
  arabic:{text:"رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي",translit:"Rabbighfirli, rabbighfirli",arti:"Ya Tuhanku, ampunilah aku; ya Tuhanku, ampunilah aku.",audio:"",audio_src:"",source:"HR. Abu Dawud no. 874, Ibnu Majah no. 897"},
  body:[{h:"Keterangan", p:["Dibaca pada duduk di antara dua sujud. Boleh ditambah doa yang lebih lengkap sebagaimana diajarkan Nabi ﷺ."]}],
  sources:["abudawud","ibnMajah"], related:["gerakan-duduk-sujud"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-tasyahud", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Tasyahud (Attahiyyat)",
  arabic:{text:"التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",translit:"Attahiyyatu lillahi was-shalawatu wat-tayyibat. Assalamu 'alaika ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. Assalamu 'alaina wa 'ala 'ibadillahis-shalihin. Asyhadu an la ilaha illallah wa asyhadu anna Muhammadan 'abduhu wa rasuluh.",arti:"Segala penghormatan, shalawat, dan kebaikan hanya bagi Allah. Semoga keselamatan, rahmat, dan keberkahan tercurah kepadamu wahai Nabi, dan semoga keselamatan tercurah kepada kami dan hamba-hamba Allah yang saleh. Aku bersaksi tiada tuhan selain Allah dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",audio:"",audio_src:"",source:"HR. Bukhari no. 831, Muslim no. 402"},
  body:[{h:"Keterangan", p:["Tasyahud awal dibaca pada rakaat kedua; tasyahud akhir dibaca sebelum salam dan ditambah shalawat."]}],
  sources:["bukhari","muslim"], related:["gerakan-tasyahud","bacaan-shalawat"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-shalawat", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Shalawat Ibrahimiyah",
  arabic:{text:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",translit:"Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad kama shallaita 'ala Ibrahim wa 'ala ali Ibrahim, innaka hamidun majid. Allahumma barik 'ala Muhammad wa 'ala ali Muhammad kama barakta 'ala Ibrahim wa 'ala ali Ibrahim, innaka hamidun majid.",arti:"Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad sebagaimana Engkau limpahkan kepada Ibrahim dan keluarga Ibrahim; sungguh Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berkahilah Muhammad dan keluarga Muhammad sebagaimana Engkau berkahi Ibrahim dan keluarga Ibrahim; sungguh Engkau Maha Terpuji lagi Maha Mulia.",audio:"",audio_src:"",source:"HR. Bukhari no. 3370, Muslim no. 406"},
  body:[{h:"Keterangan", p:["Dibaca pada tasyahud akhir setelah attahiyyat; termasuk bagian yang diperintahkan Nabi ﷺ."]}],
  sources:["bukhari","muslim"], related:["bacaan-tasyahud"], tags:["shalat","bacaan"]});
addEntry({id:"bacaan-salam", menu:1, material:"shalat", sub:"bacaan", type:"bacaan", title:"Salam",
  arabic:{text:"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",translit:"Assalamu 'alaikum wa rahmatullah",arti:"Semoga keselamatan dan rahmat Allah tercurah kepadamu.",audio:"",audio_src:"",source:""},
  body:[{h:"Keterangan", p:["Diucapkan sambil menoleh ke kanan, lalu ke kiri. Salam menandai berakhirnya shalat."]}],
  sources:["muslim"], related:["gerakan-salam"], tags:["shalat","bacaan"]});

/* ---- Submateri E: Ketentuan Shalat ---- */
addEntry({id:"rukun-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Rukun Shalat", summary:"Perkara yang wajib ada; jika salah satunya tertinggal, shalat tidak sah.",
  body:[{h:"Rukun shalat", list:["Niat","Takbiratul ihram","Berdiri bagi yang mampu","Membaca Al-Fatihah","Rukuk dengan thuma'ninah","I'tidal dengan thuma'ninah","Sujud dua kali dengan thuma'ninah","Duduk antara dua sujud dengan thuma'ninah","Tasyahud akhir","Duduk untuk tasyahud akhir","Shalawat kepada Nabi ﷺ","Salam"]}],
  sources:["muslim"], related:["tata-cara-shalat","syarat-sah-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"syarat-wajib-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Syarat Wajib Shalat", summary:"Syarat yang menjadikan shalat wajib bagi seseorang.",
  body:[{h:"Syarat wajib", list:["Islam","Balig","Berakal","Suci dari haid dan nifas (bagi perempuan)","Telah sampai dakwah"]}],
  sources:["fiqihsunnah"], related:["syarat-sah-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"syarat-sah-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Syarat Sah Shalat", summary:"Ketentuan yang harus terpenuhi agar shalat dianggap sah.",
  body:[{h:"Syarat sah", list:["Suci dari hadats besar dan kecil","Suci badan, pakaian, dan tempat dari najis","Menutup aurat","Menghadap kiblat","Masuk waktu shalat","Mengetahui masuknya waktu (bagi yang mampu)"]}],
  sources:["fiqihsunnah"], related:["wudhu","rukun-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"wajib-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Wajib Shalat", summary:"Perkara yang wajib; jika tertinggal karena lupa diganti sujud sahwi.",
  body:[{h:"Contoh wajib shalat", list:["Takbir selain takbiratul ihram","Membaca \"Sami'allahu liman hamidah\" bagi imam/munfarid","Bacaan tasbih rukuk dan sujud","Tasyahud awal","Duduk untuk tasyahud awal","Salam pertama"]}],
  sources:["fiqihsunnah"], related:["rukun-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"sunnah-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Sunnah Shalat", summary:"Perkara yang dianjurkan; tidak membatalkan shalat bila ditinggalkan.",
  body:[{h:"Contoh sunnah", list:["Mengangkat tangan saat takbir, rukuk, dan i'tidal","Meletakkan tangan kanan di atas tangan kiri","Membaca doa iftitah","Membaca ta'awudz","Membaca amin","Membaca surah setelah Al-Fatihah pada dua rakaat pertama","Memperbanyak doa saat sujud"]}],
  sources:["fiqihsunnah"], related:["bacaan-iftitah"], tags:["shalat","ketentuan"]});
addEntry({id:"pembatal-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Pembatal Shalat", summary:"Hal-hal yang membatalkan shalat.",
  body:[{h:"Pembatal shalat", list:["Meninggalkan rukun atau syarat secara sengaja","Berbicara dengan sengaja di luar bacaan shalat","Banyak bergerak di luar gerakan shalat","Makan atau minum","Tertawa terbahak-bahak","Batal wudhu","Terbuka aurat tanpa segera menutupnya","Berpaling dari kiblat tanpa uzur"]}],
  sources:["fiqihsunnah"], related:["rukun-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"makruh-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Makruh dalam Shalat", summary:"Perkara yang sebaiknya dihindari; tidak membatalkan shalat.",
  body:[{h:"Contoh makruh", list:["Bermain-main dengan pakaian atau anggota badan","Memalingkan wajah tanpa keperluan","Shalat saat makanan telah dihidangkan (bagi yang sangat lapar)","Menahan buang air","Mengerjakan shalat sunnah ketika iqamah telah dikumandangkan (selain rawatib Subuh)"]}],
  sources:["fiqihsunnah"], related:["pembatal-shalat"], tags:["shalat","ketentuan"]});
addEntry({id:"jamaah-shalat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Shalat Berjamaah", summary:"Shalat bersama dengan imam dan makmum; utama dibanding sendiri.",
  body:[{h:"Ketentuan", list:["Imam: memimpin shalat; disyaratkan sah shalatnya dan lebih utama yang lebih paham.","Makmum: mengikuti imam; tidak boleh mendahului atau menyelisihi gerakannya.","Masbuk: makmum yang tertinggal sebagian rakaat; menyempurnakan sisa rakaat setelah imam salam.","Saf: barisan; disunnahkan merapatkan dan meluruskan saf, imam di depan."]},{h:"Dalil", p:["\"Shalat berjamaah lebih utama dua puluh tujuh derajat daripada shalat sendirian.\" (HR. Bukhari no. 645, Muslim no. 650)."]}],
  sources:["bukhari","muslim"], related:["shalat"], tags:["shalat","jamaah"]});
addEntry({id:"shalat-jumat", menu:1, material:"shalat", sub:"ketentuan", type:"article", title:"Shalat Jumat", summary:"Wajib bagi laki-laki Muslim yang mukim; dua rakaat setelah dua khutbah.",
  body:[{h:"Ketentuan", list:["Wajib bagi laki-laki merdeka, balig, berakal, dan mukim.","Dilaksanakan pada waktu zuhur.","Syarat: ada khutbah dua kali sebelum shalat, berjamaah, dan di tempat pemukiman.","Perempuan dan musafir boleh menghadirinya; jika tidak, shalat zuhur."]}],
  sources:["bukhari"], related:["zuhur"], tags:["shalat","jumat"]});

/* ---- Submateri F: Kondisi Khusus ---- */
addEntry({id:"shalat-musafir", menu:1, material:"shalat", sub:"kondisi-khusus", type:"article", title:"Shalat Musafir", summary:"Keringanan bagi musafir: jamak dan qashar.",
  body:[{h:"Keringanan", list:["Qashar: meringkas shalat 4 rakaat menjadi 2 (Zuhur, Asar, Isya).","Jamak: menggabungkan dua shalat dalam satu waktu (Zuhur+Asar, Maghrib+Isya).","Jamak qashar: menggabungkan sekaligus meringkas.","Berlaku selama perjalanan yang dibolehkan syariat (umumnya jarak yang disebut safar) dan tidak bermukim."]}],
  sources:["bukhari","muslim"], related:["jamak","qashar"], tags:["shalat","rukhsah"]});
addEntry({id:"jamak", menu:1, material:"shalat", sub:"kondisi-khusus", type:"article", title:"Shalat Jamak", summary:"Menggabungkan dua shalat dalam satu waktu karena uzur (safar, hujan deras, dsb).",
  body:[{h:"Jenis", list:["Jamak taqdim: dikerjakan di waktu shalat pertama (mis. Zuhur+Asar di waktu Zuhur).","Jamak takhir: dikerjakan di waktu shalat kedua.","Catatan: Subuh tidak bisa dijamak."]}],
  sources:["muslim"], related:["shalat-musafir","qashar"], tags:["shalat","rukhsah"]});
addEntry({id:"qashar", menu:1, material:"shalat", sub:"kondisi-khusus", type:"article", title:"Shalat Qashar", summary:"Meringkas shalat empat rakaat menjadi dua rakaat ketika safar.",
  body:[{h:"Ketentuan", p:["Disyariatkan bagi musafir; tidak berlaku untuk Subuh (2 rakaat) dan Maghrib (3 rakaat). Sebagian ulama mensyaratkan jarak safar; sebagian lain cukup dengan 'urf safar. Lihat perbedaan pendapat pada kitab fiqih."]}],
  sources:["bukhari"], related:["shalat-musafir","jamak"], tags:["shalat","rukhsah"]});
addEntry({id:"shalat-sakit", menu:1, material:"shalat", sub:"kondisi-khusus", type:"article", title:"Shalat bagi Orang Sakit", summary:"Shalat tetap wajib; tata cara disesuaikan kemampuan.",
  body:[{h:"Urutan keringanan", list:["Berdiri bila mampu; jika tidak, duduk.","Jika tidak mampu duduk, berbaring miring menghadap kiblat.","Jika tidak mampu berbaring, sesuai kemampuan — shalat tidak gugur selama akal masih sehat.","Rukuk dan sujud disesuaikan; sujud lebih rendah dari rukuk bila memungkinkan."]}],
  sources:["bukhari"], related:["shalat"], tags:["shalat","rukhsah"]});
addEntry({id:"shalat-jenazah", menu:1, material:"shalat", sub:"kondisi-khusus", type:"article", title:"Shalat Jenazah", summary:"Fardhu kifayah atas jenazah Muslim; tanpa rukuk dan sujud.",
  body:[{h:"Tata cara ringkas", list:["Niat shalat jenazah.","Empat kali takbir.","Setelah takbir pertama: membaca Al-Fatihah.","Setelah takbir kedua: shalawat kepada Nabi ﷺ.","Setelah takbir ketiga: doa untuk jenazah.","Setelah takbir keempat: doa lalu salam."]},{h:"Status", p:["Fardhu kifayah: gugur bila sebagian kaum Muslimin telah melaksanakannya."]}],
  sources:["bukhari","muslim"], related:["shalat","iman-kepada-hari-akhir"], tags:["ibadah","jenazah"]});

/* Fitur jadwal shalat (relasi ke halaman Home/Perhitungan) */
addEntry({id:"jadwal-shalat", menu:1, material:"shalat", sub:"kondisi-khusus", type:"feature", title:"Jadwal Shalat", summary:"Jadwal shalat harian berbasis perhitungan astronomis sesuai lokasi dan metode yang dipilih — tersedia di Home dan Pengaturan.",
  body:[{h:"Keterangan", p:["Waktu dihitung dari posisi matahari (bukan hardcode) dengan metode: MWL, ISNA, Mesir, Umm al-Qura, Karachi, atau Kemenag. Hasil bersifat perkiraan; untuk keperluan resmi gunakan jadwal dari lembaga setempat."]}],
  sources:["kemenag"], related:["shalat"], tags:["shalat","fitur"]});

/* Data terpisah: zakat, puasa, haji, rukun iman, dan menu lain ada di data-extra*.js */
