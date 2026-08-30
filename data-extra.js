/* ============================================================
   SILMIKAFFAH — Data Pelengkap 1 (data-extra.js)
   Menu 1: Zakat, Puasa, Haji & Umrah · Menu 2: Rukun Iman
   ============================================================ */

/* ========== MENU 01 · ZAKAT ========== */
addEntry({
  id:"zakat", menu:1, material:"zakat", type:"article",
  title:"Zakat", summary:"Rukun Islam ketiga — menyucikan harta dengan menunaikan hak Allah dan hak sesama.",
  body:[
    {h:"Pengertian", p:["Zakat secara bahasa berarti suci, tumbuh, dan berkah; secara syariat adalah kewajiban mengeluarkan bagian tertentu dari harta yang telah mencapai nishab dan haul untuk golongan yang berhak (mustahik)."]},
    {h:"Kedudukan", p:["Zakat termasuk rukun Islam dan kewajiban yang disebutkan beriringan dengan shalat dalam banyak ayat, misalnya QS. Al-Baqarah 2:43: \"Dirikanlah shalat dan tunaikanlah zakat.\""]},
    {h:"Jenis", list:["Zakat fitrah — wajib di bulan Ramadan bagi setiap Muslim.","Zakat mal — atas harta: emas, perak, uang, perdagangan, pertanian, peternakan, penghasilan."]},
    {h:"Rumah utama", p:["Seluruh materi zakat dan kalkulatornya berpusat di sini. Menu lain hanya menautkan (relasi)."]}
  ],
  sources:["quran","baznas"], related:["zakat-fitrah","zakat-mal","mustahik","zakat-kalkulator"], tags:["ibadah","zakat","rukun islam"]
});
addEntry({id:"zakat-fitrah", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"fitrah",
  title:"Zakat Fitrah", summary:"Zakat jiwa yang wajib dikeluarkan sebelum Idulfitri — 1 sha' (setara ±2,5 kg) makanan pokok per orang.",
  body:[
    {h:"Ketentuan", list:["Wajib bagi setiap Muslim: laki-laki, perempuan, dewasa, anak-anak, merdeka, atau budak (HR. Bukhari no. 1503, Muslim no. 984).","Besaran: 1 sha' makanan pokok (menurut sebagian besar ulama; di Indonesia lazimnya 2,5 kg beras atau 3,5 liter).","Waktu: boleh sejak awal Ramadan, wajib sebelum shalat Idulfitri; yang diakhirkan hingga setelah shalat Id tercatat sedekah biasa, bukan zakat fitrah."]},
    {h:"Sasaran", p:["Didahulukan untuk fakir dan miskin (HR. Abu Dawud no. 1609)."]}
  ],
  sources:["bukhari","muslim","abudawud","baznas"], related:["zakat","idulfitri","mustahik"], tags:["zakat","ramadan"]});
addEntry({id:"zakat-mal", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"mal",
  title:"Zakat Mal", summary:"Zakat atas harta: 2,5% dari harta yang mencapai nishab (setara 85 gram emas) dan haul satu tahun.",
  body:[
    {h:"Syarat wajib", list:["Islam, merdeka, dan memiliki harta secara sempurna.","Mencapai nishab: senilai 85 gram emas (atau 595 gram perak menurut pendapat lain).","Haul: dimiliki selama satu tahun Hijriah (kecuali pertanian dan rikaz yang dizakati saat panen)."]},
    {h:"Besaran", p:["2,5% dari total harta yang memenuhi syarat. Utang yang jatuh tempo dapat mengurangi harta yang dizakati — ada perbedaan rincian antar mazhab; lihat metode pada kalkulator."]}
  ],
  sources:["quran","baznas"], related:["zakat","zakat-nishab","zakat-haul","zakat-kalkulator"], tags:["zakat","harta"]});
addEntry({id:"zakat-emas", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"emas",
  title:"Zakat Emas", summary:"Emas yang mencapai nishab 85 gram dan haul satu tahun dizakati 2,5%.",
  body:[{h:"Ketentuan", list:["Nishab: 20 mitsqal = ±85 gram emas.","Besaran: 2,5%.","Perhiasan yang dipakai: ada perbedaan pendapat — jumhur (Maliki, Syafi'i, Hanbali) tidak mewajibkan zakat atas perhiasan yang dipakai secara wajar; mazhab Hanafi mewajibkannya. Tampilkan transparan."]}],
  sources:["baznas","fiqihsunnah"], related:["zakat-mal","zakat-perak","zakat-nishab"], tags:["zakat","emas"]});
addEntry({id:"zakat-perak", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"perak",
  title:"Zakat Perak", summary:"Perak yang mencapai nishab 595 gram dan haul satu tahun dizakati 2,5%.",
  body:[{h:"Ketentuan", list:["Nishab: 200 dirham = ±595 gram perak.","Besaran: 2,5%.","Dalil: hadis tentang zakat perak (HR. Abu Dawud no. 1573; pembahasan dalam kitab zakat)."]}],
  sources:["abudawud","baznas"], related:["zakat-emas","zakat-mal"], tags:["zakat","perak"]});
addEntry({id:"zakat-uang", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"uang",
  title:"Zakat Uang & Tabungan", summary:"Uang kertas, tabungan, dan deposito dianalogikan dengan emas/perak: nishab senilai 85 gram emas, 2,5%.",
  body:[{h:"Ketentuan", list:["Uang diqiyaskan kepada emas dan perak karena sama-sama alat tukar.","Nishab: senilai 85 gram emas murni.","Haul: satu tahun; dikeluarkan 2,5% dari saldo yang mencapai nishab."]}],
  sources:["baznas","qiyas"], related:["zakat-mal","zakat-kalkulator"], tags:["zakat","uang"]});
addEntry({id:"zakat-perdagangan", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"perdagangan",
  title:"Zakat Perdagangan", summary:"Barang dagangan dinilai dengan harga pasar saat haul: 2,5% dari nilai aset usaha dikurangi utang.",
  body:[{h:"Ketentuan", list:["Niat berdagang adalah syarat; aset yang dihitung: barang dagangan + kas + piutang lancar.","Dikurangi utang yang jatuh tempo.","Nishab: senilai 85 gram emas; besaran 2,5%; haul satu tahun."]}],
  sources:["baznas"], related:["zakat-mal","fiqih-muamalah"], tags:["zakat","dagang"]});
addEntry({id:"zakat-pertanian", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"pertanian",
  title:"Zakat Pertanian", summary:"Dizakati saat panen: 10% jika pengairan alami, 5% jika berbiaya; nishab 5 wasaq (±653 kg).",
  body:[{h:"Ketentuan", list:["Dalil: QS. Al-An'am 6:141 — \"...tunaikanlah haknya di hari memetik hasilnya...\"","Nishab: 5 wasaq = 300 sha' (±653 kg) menurut hadis (HR. Bukhari no. 1484, Muslim no. 979).","Besaran: 10% bila disiram air hujan/sungai; 5% bila menggunakan biaya pengairan.","Tidak mensyaratkan haul — dikeluarkan setiap panen."]}],
  sources:["quran","bukhari","muslim","baznas"], related:["zakat","zakat-nishab"], tags:["zakat","pertanian"]});
addEntry({id:"zakat-peternakan", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"peternakan",
  title:"Zakat Peternakan", summary:"Ternak yang digembalakan (sa'imah) dan mencapai nishab dizakati dengan ketentuan jumlah.",
  body:[{h:"Nishab kambing/domba", list:["40–120 ekor: 1 ekor.","121–200: 2 ekor.","201–300: 3 ekor.","300+: 1 ekor setiap 100 ekor.","Dalil: HR. Bukhari no. 1454."]},
  {h:"Nishab sapi", list:["30–39: 1 ekor tabi' (sapi umur 1 tahun).","40–59: 1 ekor musinnah (2 tahun).","60–69: 2 ekor tabi'.","70+: berkelipatan sesuai kaidah."]},
  {h:"Catatan", p:["Syarat: digembalakan di padang rumput (sa'imah), mencapai nishab, dan haul satu tahun."]}],
  sources:["bukhari","baznas"], related:["zakat","zakat-nishab"], tags:["zakat","ternak"]});
addEntry({id:"zakat-penghasilan", menu:1, material:"zakat", sub:"jenis", type:"article", calc:"penghasilan",
  title:"Zakat Penghasilan (Profesi)", summary:"Zakat atas gaji/penghasilan — diqiyaskan pada zakat mal; dipraktikkan oleh BAZNAS dan banyak lembaga.",
  body:[{h:"Metode", list:["Metode A (umum/BAZNAS): nishab senilai 85 gram emas setahun → dibagi 12 menjadi nishab bulanan; jika penghasilan bulanan mencapai nishab bulanan, dikeluarkan 2,5% langsung setiap bulan.","Metode B: dihitung seperti zakat mal (akumulasi setahun, dikurangi kebutuhan pokok) — pendapat sebagian ulama.","Kalkulator menampilkan kedua metode secara transparan."]}],
  sources:["baznas","fiqihsunnah"], related:["zakat-mal","zakat-kalkulator"], tags:["zakat","penghasilan"]});
addEntry({id:"zakat-nishab", menu:1, material:"zakat", sub:"ketentuan", type:"article",
  title:"Nishab", summary:"Batas minimal harta yang mewajibkan zakat.",
  body:[{h:"Ukuran standar", list:["Emas: 85 gram.","Perak: 595 gram.","Uang/perdagangan: senilai 85 gram emas.","Pertanian: 5 wasaq (±653 kg).","Peternakan: sesuai tabel jenis ternak."]},{h:"Catatan", p:["Sebagian ulama menjadikan perak (595 gram) sebagai nishab karena lebih mudah dijangkau fakir; sebagian lain memilih emas. Kalkulator menyediakan pilihan."]}],
  sources:["baznas","fiqihsunnah"], related:["zakat","zakat-haul"], tags:["zakat","ketentuan"]});
addEntry({id:"zakat-haul", menu:1, material:"zakat", sub:"ketentuan", type:"article",
  title:"Haul", summary:"Masa kepemilikan harta satu tahun Hijriah — syarat zakat mal selain pertanian.",
  body:[{h:"Catatan", p:["Haul dihitung sejak harta mencapai nishab. Pertanian dan rikaz (barang temuan) tidak mensyaratkan haul. Sebagian ulama kontemporer berpendapat zakat penghasilan cukup dengan nishab tanpa menunggu haul penuh — ditampilkan sebagai perbedaan pendapat."]}],
  sources:["fiqihsunnah"], related:["zakat","zakat-nishab"], tags:["zakat","ketentuan"]});
addEntry({id:"mustahik", menu:1, material:"zakat", sub:"ketentuan", type:"article",
  title:"Mustahik (Penerima Zakat)", summary:"Delapan golongan penerima zakat menurut QS. At-Taubah 9:60.",
  body:[{h:"Delapan golongan", list:["Fakir","Miskin","Amil zakat","Mualaf yang dibujuk hatinya","Budak (riqab)","Gharimin (orang yang berutang untuk kebutuhan halal)","Fi sabilillah (di jalan Allah)","Ibnu sabil (musafir yang kehabisan bekal)"]}],
  sources:["quran","baznas"], related:["zakat","penyaluran-zakat"], tags:["zakat","ketentuan"]});
addEntry({id:"muzakki", menu:1, material:"zakat", sub:"ketentuan", type:"article",
  title:"Muzakki (Pembayar Zakat)", summary:"Orang yang wajib menunaikan zakat: Muslim, balig, berakal, dan memiliki harta yang mencapai nishab.",
  body:[{h:"Catatan", p:["Zakat fitrah wajib bagi setiap Muslim yang memiliki kelebihan makanan pokok untuk dirinya dan keluarganya pada hari raya (pendapat masyhur)."]}],
  sources:["baznas"], related:["zakat","zakat-fitrah"], tags:["zakat","ketentuan"]});
addEntry({id:"penyaluran-zakat", menu:1, material:"zakat", sub:"ketentuan", type:"article",
  title:"Penyaluran Zakat", summary:"Zakat disalurkan kepada mustahik, baik langsung maupun melalui amil/lembaga resmi.",
  body:[{h:"Prinsip", list:["Utamakan fakir dan miskin di lingkungan terdekat.","Salurkan dengan amanah, tepat sasaran, dan tepat waktu.","Boleh melalui lembaga amil resmi agar pengelolaannya profesional dan terdata."]}],
  sources:["quran","baznas"], related:["mustahik","zakat"], tags:["zakat","ketentuan"]});
addEntry({id:"zakat-kalkulator", menu:1, material:"zakat", sub:"fitur", type:"feature", calc:"feature",
  title:"Kalkulator Zakat", summary:"Hitung zakat fitrah, mal, emas, perak, uang, perdagangan, penghasilan, pertanian, dan peternakan — dengan metode yang transparan.",
  body:[
    {h:"Cara pakai", list:["Pilih jenis zakat.","Masukkan nilai aset / harga emas-perak / beras (dapat diisi harga terkini).","Sistem menghitung nishab, haul, dan hasil 2,5% (atau sesuai jenis).","Hasil menampilkan metode, rincian, tanggal, dan catatan."]},
    {h:"Catatan penting", p:["Hasil adalah perkiraan berdasarkan ketentuan umum. Konfirmasikan dengan amil atau lembaga zakat setempat sebelum menunaikan. Jika terdapat perbedaan pendapat/metode, kalkulator menampilkan keduanya secara transparan."]}
  ],
  sources:["baznas","fiqihsunnah"], related:["zakat","zakat-mal","zakat-fitrah"], tags:["zakat","fitur","kalkulator"]
});

/* ========== MENU 01 · PUASA ========== */
addEntry({
  id:"puasa", menu:1, material:"puasa", type:"article",
  title:"Puasa", summary:"Rukun Islam keempat — menahan diri dari hal yang membatalkan sejak fajar hingga terbenam matahari dengan niat.",
  body:[
    {h:"Pengertian", p:["Puasa (shaum) secara syariat adalah menahan diri dari makan, minum, dan pembatal lainnya sejak terbit fajar hingga terbenam matahari, disertai niat karena Allah."]},
    {h:"Pembagian", list:["Puasa wajib: Ramadan (dan qadha/fidyah).","Puasa sunnah: Senin-Kamis, Ayyamul Bidh, Arafah, Asyura, Tasu'a, Syawal, Daud, dan lainnya."]},
    {h:"Rumah utama", p:["Pembahasan lengkap Ramadan berpusat di sini; menu lain (Fiqih, Hadis, Kalender) hanya menautkan."]}
  ],
  sources:["quran","bukhari"], related:["puasa-ramadan","puasa-sunnah","niat-puasa","zakat-fitrah"], tags:["ibadah","puasa","rukun islam"]
});
addEntry({
  id:"puasa-ramadan", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Puasa Ramadan", summary:"Ibadah wajib sebulan penuh di bulan Ramadan — bulan diturunkannya Al-Qur'an.",
  body:[
    {h:"Pengertian & hukum", p:["Allah berfirman: \"Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.\" (QS. Al-Baqarah 2:183)."]},
    {h:"Keutamaan", list:["\"Barang siapa berpuasa Ramadan dengan iman dan mengharap pahala, diampuni dosa-dosanya yang telah lalu.\" (HR. Bukhari no. 38, Muslim no. 760).","\"...puasa itu untuk-Ku dan Aku yang membalasnya...\" (HR. Bukhari no. 1894, Muslim no. 1151)."]},
    {h:"Cakupan materi", p:["Niat, syarat, rukun, imsak, sahur, berbuka, pembatal, qadha, fidyah, i'tikaf, Lailatul Qadar, tarawih, zakat fitrah, dan Idulfitri — masing-masing sebagai entri di bawah materi ini."]}
  ],
  sources:["quran","bukhari","muslim"], related:["niat-puasa","syarat-puasa","pembatal-puasa","qadha-puasa","lailatul-qadar","tarawih","zakat-fitrah","idulfitri"], tags:["puasa","ramadan"]
});
addEntry({id:"niat-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Niat Puasa Ramadan", summary:"Niat puasa wajib dilakukan pada malam hari — tempatnya di hati.",
  arabic:{text:"نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى",translit:"Nawaitu shauma ghadin 'an ada'i fardhi syahri ramadana hadzihis-sanati lillahi ta'ala",arti:"Aku berniat puasa esok hari untuk menunaikan kewajiban bulan Ramadan tahun ini karena Allah ta'ala.",audio:"",audio_src:"",source:"Lafaz umum — niat cukup dalam hati (status perlu verifikasi sanad lafaz)"},
  body:[{h:"Ketentuan", p:["Niat adalah syarat sah puasa wajib dan dilakukan pada malam harinya (sebelum fajar). Para ulama menekankan niat di hati; lafaz di atas adalah lafaz yang umum beredar di Indonesia dan tidak dijadikan syarat."]}],
  sources:["app"], related:["puasa-ramadan"], tags:["puasa","niat"]});
addEntry({id:"syarat-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Syarat Puasa", summary:"Syarat wajib dan syarat sah puasa.",
  body:[{h:"Syarat wajib", list:["Islam","Balig","Berakal","Mampu berpuasa"]},
  {h:"Syarat sah", list:["Suci dari haid dan nifas","Berniat","Menahan diri dari pembatal sejak fajar hingga maghrib"]}],
  sources:["fiqihsunnah"], related:["puasa-ramadan"], tags:["puasa","ketentuan"]});
addEntry({id:"rukun-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Rukun Puasa", summary:"Inti puasa: niat dan menahan diri dari pembatal.",
  body:[{h:"Rukun", list:["Niat","Menahan diri dari makan, minum, dan pembatal lainnya (sejak fajar hingga terbenam matahari)"]}],
  sources:["fiqihsunnah"], related:["niat-puasa","pembatal-puasa"], tags:["puasa","ketentuan"]});
addEntry({id:"waktu-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Waktu Puasa & Imsak", summary:"Dari terbit fajar hingga terbenam matahari; imsak adalah tanda kehati-hatian, bukan syarat.",
  body:[{h:"Penjelasan", list:["Waktu puasa dimulai saat fajar shadiq (azan Subuh) hingga terbenam matahari (Maghrib).","Imsak (±10 menit sebelum Subuh) adalah informasi kehati-hatian yang lazim di Indonesia — berhenti makan sebelum Subuh, bukan penanda wajib.","Sahur dianjurkan dan diakhirkan mendekati fajar (HR. Bukhari no. 1923).","Berbuka disunnahkan segera saat Maghrib tiba (HR. Bukhari no. 1957)."]}],
  sources:["bukhari","kemenag"], related:["puasa-ramadan","sahur","berbuka"], tags:["puasa","waktu"]});
addEntry({id:"imsak", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Imsak", summary:"Waktu berhenti makan sebagai kehati-hatian menjelang Subuh.",
  body:[{h:"Catatan", p:["Imsakiyah Kemenag umumnya menetapkan imsak 10 menit sebelum Subuh. Ini bentuk kehati-hatian agar tidak melewati fajar — bukan waktu mulainya puasa secara syariat."]}],
  sources:["kemenag"], related:["waktu-puasa"], tags:["puasa","waktu"]});
addEntry({id:"sahur", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Sahur", summary:"Makan sebelum fajar — sunnah yang penuh berkah.",
  body:[{h:"Dalil", p:["Rasulullah ﷺ bersabda: \"Makan sahurlah, karena dalam sahur ada keberkahan.\" (HR. Bukhari no. 1923, Muslim no. 1095). Dianjurkan mengakhirkannya mendekati fajar."]}],
  sources:["bukhari","muslim"], related:["puasa-ramadan"], tags:["puasa","sahur"]});
addEntry({id:"berbuka", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Berbuka Puasa", summary:"Menyegerakan berbuka saat Maghrib dan berdoa.",
  arabic:{text:"ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللهُ",translit:"Dzahaba-z-zama'u wabtallatil-'uruqu wa tsabatal-ajru insya Allah",arti:"Telah hilang dahaga, urat-urat telah basah, dan pahala telah tetap, insya Allah.",audio:"",audio_src:"",source:"HR. Abu Dawud no. 2357"},
  body:[{h:"Sunnah", list:["Menyegerakan berbuka (HR. Bukhari no. 1957).","Berdoa saat berbuka; doa di atas adalah doa yang diriwayatkan.","Berbuka dengan kurma atau air."]}],
  sources:["abudawud","bukhari"], related:["puasa-ramadan","doa"], tags:["puasa","ramadan"]});
addEntry({id:"adab-ramadan", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Adab Ramadan", summary:"Menjaga lisan, pandangan, dan perbuatan selama berpuasa.",
  body:[{h:"Adab", list:["Menjaga lisan dari dusta dan ghibah: \"Barang siapa tidak meninggalkan perkataan dusta dan perbuatannya, maka Allah tidak butuh ia meninggalkan makan dan minumnya.\" (HR. Bukhari no. 1903).","Menjaga pandangan dan pendengaran.","Memperbanyak sedekah, Al-Qur'an, dan shalat malam.","Menahan amarah; menjawab dengan tenang."]}],
  sources:["bukhari"], related:["puasa-ramadan"], tags:["puasa","adab"]});
addEntry({id:"pembatal-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Hal yang Membatalkan Puasa", summary:"Perkara yang membatalkan puasa dan konsekuensinya.",
  body:[{h:"Pembatal", list:["Makan dan minum dengan sengaja.","Muntah dengan sengaja (HR. Abu Dawud no. 2380).","Hubungan suami istri di siang hari — konsekuensi: qadha + kafarah.","Haid dan nifas.","Keluar mani dengan sengaja (istimna').","Niat membatalkan puasa."]},
  {h:"Kafarah", p:["Untuk hubungan suami istri di siang hari Ramadan: memerdekakan budak, atau puasa dua bulan berturut-turut, atau memberi makan 60 orang miskin (HR. Bukhari no. 1936, Muslim no. 1111)."]}],
  sources:["bukhari","muslim","abudawud"], related:["puasa-ramadan","qadha-puasa"], tags:["puasa","ketentuan"]});
addEntry({id:"tidak-membatalkan", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Hal yang Tidak Membatalkan", summary:"Perkara yang sering dikhawatirkan tetapi tidak membatalkan puasa.",
  body:[{h:"Tidak membatalkan", list:["Makan/minum karena lupa (HR. Bukhari no. 1933, Muslim no. 1155).","Tidak sengaja memasukkan air saat berkumur/istinsyaq (selama tidak berlebihan).","Berkumur atau mandi untuk mendinginkan diri.","Mimpi basah.","Muntah yang tidak disengaja.","Mencicipi makanan tanpa menelannya (dengan hati-hati; pendapat ulama)."]}],
  sources:["bukhari","muslim","fiqihsunnah"], related:["pembatal-puasa"], tags:["puasa","ketentuan"]});
addEntry({id:"puasa-sakit", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Puasa bagi Orang Sakit", summary:"Orang sakit diberi keringanan: berbuka lalu qadha, atau fidyah sesuai keadaan.",
  body:[{h:"Ketentuan", list:["Sakit yang berat (dikhawatirkan bertambah parah): boleh berbuka dan mengqadha di hari lain.","Sakit yang tidak ada harapan sembuh (kronis): fidyah (memberi makan satu orang miskin per hari).","Dalil: QS. Al-Baqarah 2:185 — \"...barang siapa sakit atau dalam perjalanan, maka (wajib menggantinya) sebanyak hari yang ditinggalkan...\""]},
  {h:"Catatan", p:["Keputusan berbuka sebaiknya berdasarkan pertimbangan medis dan keyakinan diri; jangan menjadikan keringanan sebagai alasan untuk meninggalkan tanpa uzur."]}],
  sources:["quran","baznas"], related:["qadha-puasa","fidyah"], tags:["puasa","rukhsah"]});
addEntry({id:"puasa-musafir", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Puasa bagi Musafir", summary:"Musafir boleh berbuka dan mengqadha; berpuasa dalam perjalanan juga dibolehkan jika mampu.",
  body:[{h:"Ketentuan", p:["QS. Al-Baqarah 2:185 memberi rukhsah. Pilihan terbaik: yang lebih memudahkan dan tetap menjaga ibadah; jika berpuasa tidak memberatkan, puasa lebih utama menurut sebagian ulama, dan sebaliknya."]}],
  sources:["quran"], related:["qadha-puasa"], tags:["puasa","rukhsah"]});
addEntry({id:"qadha-puasa", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Qadha Puasa", summary:"Mengganti puasa Ramadan yang ditinggalkan karena uzur.",
  body:[{h:"Ketentuan", list:["Wajib mengganti sebanyak hari yang ditinggalkan.","Sebaiknya segera; boleh diakhiri hingga sebelum Ramadan berikutnya.","Jika tertunda hingga Ramadan berikutnya tanpa uzur: qadha + fidyah menurut sebagian ulama (ada perbedaan pendapat).","Perempuan yang haid/nifas: qadha tanpa fidyah."]}],
  sources:["quran","fiqihsunnah"], related:["puasa-ramadan","fidyah"], tags:["puasa","qadha"]});
addEntry({id:"fidyah", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Fidyah", summary:"Memberi makan orang miskin sebagai pengganti puasa bagi yang tidak mampu berpuasa (lansia/sakit kronis).",
  body:[{h:"Ketentuan", list:["Satu mud (±0,75 kg) makanan pokok per hari puasa yang ditinggalkan — pendapat jumhur; sebagian menetapkan satu mud beras (BAZNAS: 1 mud = 0,6–0,7 kg / menyesuaikan).","Fidyah tidak menggugurkan puasa bagi yang mampu mengqadha."]}],
  sources:["baznas","fiqihsunnah"], related:["qadha-puasa"], tags:["puasa","fidyah"]});
addEntry({id:"itikaf", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"I'tikaf", summary:"Berdiam di masjid dengan niat mendekatkan diri kepada Allah — sunnah di sepuluh malam terakhir Ramadan.",
  body:[{h:"Ketentuan", list:["Disunnahkan terutama di 10 malam terakhir Ramadan.","Syarat: Muslim, berakal, suci dari hadats besar, di masjid.","Aktivitas: shalat, tilawah, dzikir, dan doa."]}],
  sources:["bukhari"], related:["lailatul-qadar","puasa-ramadan"], tags:["ramadan","i'tikaf"]});
addEntry({id:"lailatul-qadar", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Lailatul Qadar", summary:"Malam kemuliaan yang lebih baik dari seribu bulan — di sepuluh malam terakhir Ramadan.",
  body:[{h:"Ketentuan", list:["QS. Al-Qadr 97:1-5: malam turunnya Al-Qur'an, \"lebih baik daripada seribu bulan\".","Rasulullah ﷺ memburu malam ini pada 10 malam terakhir, terutama malam-malam ganjil (HR. Bukhari no. 2017, Muslim no. 1169).","Amalan: shalat malam, doa, dan dzikir. Doa yang diajarkan: \"Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni.\" (HR. Tirmidzi no. 3513)."]}],
  sources:["quran","bukhari","muslim","tirmidzi"], related:["itikaf","puasa-ramadan"], tags:["ramadan","lailatul qadar"]});
addEntry({id:"idulfitri", menu:1, material:"puasa", sub:"wajib", type:"article",
  title:"Idulfitri", summary:"Hari raya setelah sebulan berpuasa — 1 Syawal, hari kemenangan dan syukur.",
  body:[{h:"Amalan", list:["Takbir sejak terbenam matahari hingga shalat Id.","Mandi, memakai pakaian terbaik, dan makan sebelum berangkat (sunah).","Shalat Id dua rakaat, khutbah, silaturahmi, dan mengeluarkan zakat fitrah sebelum shalat."]}],
  sources:["bukhari","muslim"], related:["zakat-fitrah","puasa-ramadan"], tags:["ramadan","hari raya"]});
addEntry({
  id:"puasa-sunnah", menu:1, material:"puasa", sub:"sunnah", type:"article",
  title:"Puasa Sunnah", summary:"Puasa yang dianjurkan di luar Ramadan: Senin-Kamis, Ayyamul Bidh, Arafah, Asyura, dan lainnya.",
  body:[{h:"Catatan", p:["Puasa sunnah tidak wajib; jika ditinggalkan tanpa uzur tidak berdosa, namun meninggalkannya setelah berniat sunnah disunnahkan mengqadha menurut sebagian ulama."]}],
  sources:["muslim"], related:["puasa-senin-kamis","puasa-ayyamul-bidh","puasa-arafah","puasa-asyura","puasa-syawal","puasa-daud"], tags:["puasa sunnah"]
});
addEntry({id:"puasa-senin-kamis", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Senin-Kamis", summary:"Puasa sunnah pada hari Senin dan Kamis — hari diangkatnya amal.",
  body:[{h:"Dalil", p:["Rasulullah ﷺ berpuasa Senin-Kamis; \"Amal-amal diperlihatkan pada hari Senin dan Kamis\" (HR. Tirmidzi no. 747; Muslim no. 1162)."]}],
  sources:["muslim","tirmidzi"], related:["puasa-sunnah"], tags:["puasa sunnah"]});
addEntry({id:"puasa-ayyamul-bidh", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Ayyamul Bidh", summary:"Puasa tanggal 13, 14, 15 setiap bulan Hijriah.",
  body:[{h:"Dalil", p:["Rasulullah ﷺ bersabda: \"Berpuasalah tiga hari setiap bulan; itu seperti puasa setahun.\" (HR. Bukhari no. 1979, Muslim no. 1159)."]}],
  sources:["bukhari","muslim"], related:["puasa-sunnah"], tags:["puasa sunnah"]});
addEntry({id:"puasa-arafah", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Arafah", summary:"Puasa 9 Dzulhijjah — menghapus dosa dua tahun (bagi yang tidak berhaji).",
  body:[{h:"Dalil", p:["\"Puasa Arafah menghapus dosa setahun yang lalu dan setahun yang akan datang.\" (HR. Muslim no. 1162). Jemaah haji di Arafah tidak disunnahkan berpuasa."]}],
  sources:["muslim"], related:["puasa-sunnah","wukuf"], tags:["puasa sunnah"]});
addEntry({id:"puasa-asyura", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Asyura", summary:"Puasa 10 Muharram — menghapus dosa setahun yang lalu.",
  body:[{h:"Dalil", p:["\"Puasa Asyura, aku berharap Allah menghapus dosa setahun yang lalu.\" (HR. Muslim no. 1162). Disunnahkan menambah puasa Tasu'a (9 Muharram) untuk menyelisihi kebiasaan ahlu kitab (HR. Abu Dawud no. 2445)."]}],
  sources:["muslim","abudawud"], related:["puasa-tasua","puasa-sunnah"], tags:["puasa sunnah"]});
addEntry({id:"puasa-tasua", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Tasu'a", summary:"Puasa 9 Muharram — mengiringi puasa Asyura.",
  body:[{h:"Catatan", p:["Rasulullah ﷺ bersabda: \"Jika aku masih hidup hingga tahun depan, sungguh aku akan berpuasa pada hari kesembilan (Muharram).\" (HR. Muslim no. 1134)."]}],
  sources:["muslim"], related:["puasa-asyura"], tags:["puasa sunnah"]});
addEntry({id:"puasa-syawal", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Syawal", summary:"Enam hari di bulan Syawal — seperti puasa setahun penuh.",
  body:[{h:"Dalil", p:["\"Barang siapa berpuasa Ramadan lalu diikuti enam hari Syawal, maka seperti puasa sepanjang tahun.\" (HR. Muslim no. 1164)."]}],
  sources:["muslim"], related:["puasa-sunnah","idulfitri"], tags:["puasa sunnah"]});
addEntry({id:"puasa-daud", menu:1, material:"puasa", sub:"sunnah", type:"article", title:"Puasa Daud", summary:"Puasa selang-seling — puasa yang paling dicintai Allah.",
  body:[{h:"Dalil", p:["\"Puasa yang paling dicintai Allah adalah puasa Daud; beliau berpuasa sehari dan berbuka sehari.\" (HR. Bukhari no. 1979, Muslim no. 1159)."]}],
  sources:["bukhari","muslim"], related:["puasa-sunnah"], tags:["puasa sunnah"]});

/* ========== MENU 01 · HAJI & UMRAH ========== */
addEntry({
  id:"haji", menu:1, material:"haji", type:"article",
  title:"Haji", summary:"Rukun Islam kelima — berkunjung ke Baitullah pada musim haji untuk menunaikan ibadah yang telah ditetapkan.",
  body:[
    {h:"Pengertian", p:["Haji adalah menyengaja Baitullah (Ka'bah) untuk menunaikan amalan tertentu (ihram, tawaf, sa'i, wukuf, dan lainnya) pada waktu tertentu, dengan syarat-syarat tertentu."]},
    {h:"Hukum", p:["Wajib sekali seumur hidup bagi yang mampu — QS. Ali 'Imran 3:97: \"...wajib bagi manusia (melakukan ibadah) haji ke Baitullah, yaitu bagi yang mampu mengadakan perjalanan ke sana.\""]},
    {h:"Syarat wajib", list:["Islam","Balig","Berakal","Merdeka","Mampu (biaya, keamanan, kesehatan)"]},
    {h:"Catatan", p:["Rincian rukun, wajib, sunnah, larangan, dan bacaan tersedia pada entri di bawah materi ini. Bacaan Arab menyertakan arti, transliterasi, dan sumber; audio menyusul."]}
  ],
  sources:["quran","fiqihsunnah"], related:["rukun-haji","ihram","tawaf","wukuf","umrah"], tags:["ibadah","haji","rukun islam"]
});
addEntry({id:"rukun-haji", menu:1, material:"haji", type:"article", title:"Rukun Haji", summary:"Perkara yang wajib ada dalam haji; tidak sah haji tanpa meninggalkannya.",
  body:[{h:"Rukun haji", list:["Ihram (niat haji)","Wukuf di Arafah","Tawaf ifadhah","Sa'i","Tahallul (mencukur/bergunting)","Tertib"]}],
  sources:["fiqihsunnah"], related:["haji","wukuf","tawaf"], tags:["haji","rukun"]});
addEntry({id:"syarat-haji", menu:1, material:"haji", type:"article", title:"Syarat & Wajib Haji", summary:"Syarat sah dan kewajiban yang harus ditunaikan selama haji.",
  body:[{h:"Syarat sah", list:["Islam","Berakal","Pada waktu yang ditentukan (bulan haji)","Di tempat yang ditentukan"]},
  {h:"Wajib haji", list:["Ihram dari miqat","Mabit di Muzdalifah","Mabit di Mina","Melontar jumrah","Tawaf wada' (bagi yang akan meninggalkan Makkah)","Meninggalkan larangan ihram"]}],
  sources:["fiqihsunnah"], related:["haji","miqat","mabit"], tags:["haji","ketentuan"]});
addEntry({id:"ihram", menu:1, material:"haji", type:"article", title:"Ihram", summary:"Niat masuk ibadah haji/umrah, ditandai pakaian ihram dan larangan-larangan.",
  body:[{h:"Larangan ihram", list:["Memakai wewangian","Memotong kuku/rambut","Berburu","Nikah/menikahkan","Hubungan suami istri","(laki-laki) menutup kepala dan memakai pakaian berjahit"]},
  {h:"Sunah", p:["Mandi, memakai wewangian sebelum ihram, shalat dua rakaat, lalu berniat dan bertalbiyah: \"Labbaik Allahumma labbaik...\""]}],
  sources:["fiqihsunnah"], related:["haji","miqat","larangan-ihram"], tags:["haji","ihram"]});
addEntry({id:"larangan-ihram", menu:1, material:"haji", type:"article", title:"Larangan Ihram", summary:"Perkara yang diharamkan saat berihram beserta konsekuensinya (dam/fidyah).",
  body:[{h:"Catatan", p:["Melanggar larangan ihram (selain hubungan suami istri) mengharuskan dam/fidyah sesuai ketentuan fikih; ada perbedaan rincian antar mazhab. Konsultasikan dengan pembimbing haji yang terpercaya."]}],
  sources:["fiqihsunnah"], related:["ihram","dam"], tags:["haji","larangan"]});
addEntry({id:"miqat", menu:1, material:"haji", type:"article", title:"Miqat", summary:"Batas waktu dan tempat memulai ihram.",
  body:[{h:"Miqat zamani", p:["Waktu ihram haji: bulan Syawal, Dzulqa'dah, dan 10 hari pertama Dzulhijjah."]},
  {h:"Miqat makani", list:["Dzulhulaifah (Abyar Ali) — bagi pendatang dari Madinah.","Al-Juhfah — dari arah Syam/Mesir.","Qarnul Manazil — dari arah Najd.","Yalamlam — dari arah Yaman.","Dzatu 'Irq — dari arah Irak.","Penduduk Makkah: ihram dari tempat tinggalnya."]}],
  sources:["bukhari","fiqihsunnah"], related:["ihram","haji"], tags:["haji","miqat"]});
addEntry({id:"tawaf", menu:1, material:"haji", type:"article", title:"Tawaf", summary:"Mengelilingi Ka'bah tujuh kali putaran, dimulai dari Hajar Aswad.",
  body:[{h:"Ketentuan", list:["Tujuh putaran; setiap putaran dimulai dari arah Hajar Aswad (dengan niat).","Tawaf ifadhah adalah rukun; tawaf qudum (kedatangan) dan wada' (perpisahan) sunah/wajib menurut pembagian.","Suci dari hadats adalah syarat menurut jumhur.","Doa dan dzikir dibaca selama tawaf; tidak ada bacaan khusus yang wajib dari Nabi ﷺ selain dzikir umum."]}],
  sources:["bukhari","fiqihsunnah"], related:["haji","sai","umrah"], tags:["haji","tawaf"]});
addEntry({id:"sai", menu:1, material:"haji", type:"article", title:"Sa'i", summary:"Berjalan antara Safa dan Marwah tujuh kali — mengenang usaha Hajar mencari air.",
  body:[{h:"Ketentuan", list:["Dimulai dari Safa dan diakhiri di Marwah, tujuh kali perjalanan.","Rukun haji dan umrah.","Boleh sambil berdzikir dan berdoa; berlari kecil di bagian yang disunnahkan bagi laki-laki."]}],
  sources:["bukhari","muslim"], related:["haji","tawaf"], tags:["haji","sa'i"]});
addEntry({id:"wukuf", menu:1, material:"haji", type:"article", title:"Wukuf di Arafah", summary:"Puncak ibadah haji pada 9 Dzulhijjah — haji tidak sah tanpanya.",
  body:[{h:"Ketentuan", list:["Rasulullah ﷺ bersabda: \"Haji itu (wukuf di) Arafah.\" (HR. Tirmidzi no. 889).","Waktunya sejak tergelincir matahari 9 Dzulhijjah hingga terbit fajar 10 Dzulhijjah.","Amalan: doa, dzikir, talbiyah, dan taubat."]}],
  sources:["tirmidzi","fiqihsunnah"], related:["haji","puasa-arafah"], tags:["haji","arafah"]});
addEntry({id:"mabit", menu:1, material:"haji", type:"article", title:"Mabit (Bermalam)", summary:"Bermalam di Muzdalifah dan Mina — bagian dari manasik haji.",
  body:[{h:"Mabit", list:["Muzdalifah: setelah wukuf, malam 10 Dzulhijjah, lalu mengambil kerikil untuk jumrah.","Mina: malam 11, 12, (dan 13) Dzulhijjah, untuk melontar jumrah.","Hukumnya wajib haji menurut jumhur; meninggalkannya mengharuskan dam."]}],
  sources:["fiqihsunnah"], related:["haji","wukuf"], tags:["haji","mina"]});
addEntry({id:"tahallul", menu:1, material:"haji", type:"article", title:"Tahallul", summary:"Mencukur atau menggunting rambut sebagai tanda keluar dari ihram.",
  body:[{h:"Ketentuan", list:["Tahallul awal: setelah melontar jumrah Aqabah dan bergunting — seluruh larangan ihram halal kecuali hubungan suami istri.","Tahallul tsani: setelah tawaf ifadhah dan sa'i — seluruh larangan halal."]}],
  sources:["fiqihsunnah"], related:["haji","rukun-haji"], tags:["haji","tahallul"]});
addEntry({id:"dam", menu:1, material:"haji", type:"article", title:"Dam (Denda Haji)", summary:"Sembelihan/tebusan karena meninggalkan wajib haji atau melanggar larangan ihram.",
  body:[{h:"Catatan", p:["Jenis dan kadar dam diatur fikih (urutan: menyembelih kambing, atau puasa, atau sedekah, sesuai kasus). Ada perbedaan rincian antar mazhab — ikuti bimbingan pembimbing haji dan referensi fikih yang mu'tabar."]}],
  sources:["fiqihsunnah"], related:["haji","larangan-ihram"], tags:["haji","dam"]});
addEntry({id:"umrah", menu:1, material:"haji", type:"article", title:"Umrah", summary:"Ziarah ke Baitullah dengan ihram, tawaf, sa'i, dan tahallul — dapat dilakukan kapan saja.",
  body:[{h:"Rukun umrah", list:["Ihram (niat umrah)","Tawaf","Sa'i","Tahallul","Tertib"]},
  {h:"Hukum", p:["Wajib sekali seumur hidup menurut jumhur; sebagian ulama berpendapat sunnah muakkad."]},
  {h:"Tata cara ringkas", p:["Mandi, berpakaian ihram, niat di miqat, talbiyah, masuk Makkah, tawaf tujuh putaran, shalat dua rakaat di belakang Maqam Ibrahim bila memungkinkan, sa'i, lalu tahallul."]}],
  sources:["fiqihsunnah"], related:["haji","ihram","tawaf","sai"], tags:["umrah","ibadah"]});
addEntry({id:"talbiyah", menu:1, material:"haji", type:"bacaan", title:"Talbiyah",
  arabic:{text:"لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",translit:"Labbaik Allahumma labbaik. Labbaik la syarika laka labbaik. Innal-hamda wan-ni'mata laka wal-mulk. La syarika lak.",arti:"Kupenuhi panggilan-Mu ya Allah, kupenuhi panggilan-Mu. Kupenuhi panggilan-Mu, tiada sekutu bagi-Mu, kupenuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu; tiada sekutu bagi-Mu.",audio:"",audio_src:"",source:"HR. Bukhari no. 1549, Muslim no. 1184"},
  body:[{h:"Keterangan", p:["Dibaca sejak ihram hingga sebelum melontar jumrah Aqabah pada 10 Dzulhijjah; disunnahkan bersuara bagi laki-laki."]}],
  sources:["bukhari","muslim"], related:["ihram","haji"], tags:["haji","bacaan"]});

/* ========== MENU 02 — RUKUN IMAN ========== */
addEntry({
  id:"iman", menu:2, material:"iman-kepada-allah", type:"article",
  title:"Rukun Iman", summary:"Enam perkara yang wajib diyakini: Allah, malaikat, kitab, rasul, hari akhir, qada dan qadar.",
  body:[{h:"Enam rukun", list:["Iman kepada Allah","Iman kepada malaikat-malaikat-Nya","Iman kepada kitab-kitab-Nya","Iman kepada rasul-rasul-Nya","Iman kepada hari akhir","Iman kepada qada dan qadar"]},
  {h:"Dalil", p:["Hadis Jibril: \"...iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan beriman kepada takdir baik dan buruk.\" (HR. Muslim no. 8)."]}],
  sources:["muslim"], related:["iman-kepada-allah","iman-kepada-malaikat","iman-kepada-kitab","iman-kepada-rasul","iman-kepada-hari-akhir","iman-kepada-qada-qadar"], tags:["akidah","rukun iman"]
});
addEntry({
  id:"iman-kepada-allah", menu:2, material:"iman-kepada-allah", type:"article",
  title:"Iman kepada Allah", summary:"Meyakini keberadaan, keesaan, dan kesempurnaan Allah; mencakup tauhid rububiyah, uluhiyah, dan asma wa sifat.",
  body:[
    {h:"Pengertian", p:["Iman kepada Allah adalah membenarkan dengan hati, mengucapkan dengan lisan, dan mengamalkan dengan anggota tubuh bahwa Allah Maha Esa, satu-satunya Rabb, satu-satunya sesembahan, dan memiliki nama serta sifat yang sempurna."]},
    {h:"Tauhid", list:["Rububiyah: meyakini Allah satu-satunya Pencipta, Pengatur, dan Pemilik alam.","Uluhiyah: beribadah hanya kepada Allah.","Asma wa Sifat: menetapkan nama dan sifat Allah yang Dia tetapkan tanpa menyerupakan-Nya dengan makhluk."]},
    {h:"Pengaruh", p:["Iman kepada Allah melahirkan ketenangan, keberanian, dan ketulusan dalam beramal — karena segala sesuatu berada di tangan-Nya."]}
  ],
  sources:["quran","muslim"], related:["tauhid","asmaul-husna","shahada-tauhid"], tags:["akidah","tauhid"]
});
addEntry({id:"tauhid", menu:2, material:"iman-kepada-allah", sub:"tauhid", type:"article", title:"Tauhid", summary:"Mengesakan Allah dalam rububiyah, uluhiyah, dan nama-sifat-Nya.",
  body:[{h:"Pengertian", p:["Tauhid secara bahasa berarti menjadikan sesuatu satu; secara syariat: mengesakan Allah dalam rububiyah (ketuhanan), uluhiyah (ibadah), dan asma wa sifat (nama dan sifat)."]},
  {h:"Keutamaan", p:["Tauhid adalah hak Allah atas hamba — \"...agar mereka menyembah-Ku dan tidak mempersekutukan-Ku dengan sesuatu pun.\" (HR. Muslim no. 30). Ikhlas dalam tauhid menjadi syarat diterimanya amal."]}],
  sources:["quran","muslim"], related:["tauhid-rububiyah","tauhid-uluhiyah","asma-wa-sifat"], tags:["akidah","tauhid"]});
addEntry({id:"tauhid-rububiyah", menu:2, material:"iman-kepada-allah", sub:"tauhid", type:"article", title:"Tauhid Rububiyah", summary:"Mengesakan Allah sebagai Rabb: Pencipta, Pemilik, dan Pengatur alam semesta.",
  body:[{h:"Cakupan", list:["Allah menciptakan segala sesuatu (QS. Az-Zumar 39:62).","Allah mengatur urusan alam (QS. Yunus 10:31).","Rezeki, hidup, dan mati berada di tangan-Nya (QS. Al-Mulk 67:2)."]}],
  sources:["quran"], related:["tauhid"], tags:["akidah","tauhid"]});
addEntry({id:"tauhid-uluhiyah", menu:2, material:"iman-kepada-allah", sub:"tauhid", type:"article", title:"Tauhid Uluhiyah", summary:"Mengesakan Allah dalam ibadah: doa, nadzar, penyembelihan, dan ketaatan hanya untuk-Nya.",
  body:[{h:"Cakupan", list:["Ibadah adalah hak Allah semata — \"...dan tidaklah mereka diperintah kecuali untuk beribadah kepada Allah dengan ikhlas.\" (QS. Al-Bayyinah 98:5).","Doa, takut, harap, cinta, dan tawakal ditujukan kepada Allah.","Tauhid uluhiyah inilah inti kalimat la ilaha illallah."]}],
  sources:["quran"], related:["tauhid","shahada-tauhid"], tags:["akidah","tauhid"]});
addEntry({id:"asma-wa-sifat", menu:2, material:"iman-kepada-allah", sub:"tauhid", type:"article", title:"Asma wa Sifat", summary:"Keyakinan terhadap nama dan sifat Allah sebagaimana ditetapkan Al-Qur'an dan sunnah, tanpa takyif (menanyakan hakikat) dan tamtsil (menyerupakan).",
  body:[{h:"Kaedah", list:["Menetapkan nama dan sifat yang Allah tetapkan bagi diri-Nya.","Tidak menyerupakan dengan makhluk: \"...tidak ada sesuatu pun yang serupa dengan Dia.\" (QS. Asy-Syura 42:11).","Tidak menolak atau menakwilkan tanpa dalil.","Pembahasan ini disusun hati-hati; aplikasi tidak membuat klaim tanpa referensi."]}],
  sources:["quran"], related:["tauhid","asmaul-husna"], tags:["akidah","tauhid"]});
addEntry({id:"iman-kepada-malaikat", menu:2, material:"iman-kepada-malaikat", type:"article", title:"Iman kepada Malaikat", summary:"Meyakini keberadaan malaikat sebagai makhluk Allah yang taat, serta nama dan tugas mereka.",
  body:[{h:"Pengertian & sifat", list:["Diciptakan dari cahaya (HR. Muslim no. 2996).","Makhluk mulia, selalu taat, tidak makan-minum, tidak berjenis kelamin, dan tidak berkehendak maksiat.","Jumlah mereka hanya Allah yang tahu."]},
  {h:"Nama & tugas (yang wajib diketahui)", list:["Jibril — menyampaikan wahyu.","Mikail — mengatur rezeki/hujan.","Israfil — meniup sangkakala.","Malaikat Maut (Izrail) — mencabut nyawa.","Munkar & Nakir — menanya di kubur.","Raqib & Atid — mencatat amal.","Malik — penjaga neraka.","Ridwan — penjaga surga."]},
  {h:"Hikmah", p:["Iman kepada malaikat mendorong istiqamah — karena setiap amal dicatat, dan mendorong rasa aman karena malaikat memohonkan ampunan bagi orang beriman (QS. Ghafir 40:7)."]}],
  sources:["quran","muslim"], related:["iman"], tags:["akidah","rukun iman"]});
addEntry({id:"iman-kepada-kitab", menu:2, material:"iman-kepada-kitab", type:"article", title:"Iman kepada Kitab", summary:"Meyakini kitab-kitab yang Allah turunkan kepada para rasul; fokus utama pembelajaran aplikasi adalah Al-Qur'an.",
  body:[{h:"Kitab yang disebut", list:["Taurat — kepada Musa.","Zabur — kepada Dawud.","Injil — kepada Isa.","Shuhuf (lembaran) — kepada beberapa nabi.","Al-Qur'an — kepada Muhammad ﷺ, penutup dan pembenar kitab sebelumnya."]},
  {h:"Iman kepada Al-Qur'an", p:["Meyakini Al-Qur'an sebagai firman Allah, terjaga, dan pedoman hingga akhir zaman. Pembahasan lengkap di menu Al-Qur'an."]},
  {h:"Catatan", p:["Taurat, Zabur, dan Injil dibahas dalam konteks konsep iman kepada kitab menurut Islam, bukan sebagai katalog pembelajaran tersendiri."]}],
  sources:["quran"], related:["iman","alquran"], tags:["akidah","rukun iman"]});
addEntry({id:"iman-kepada-rasul", menu:2, material:"iman-kepada-rasul", type:"article", title:"Iman kepada Rasul", summary:"Meyakini para nabi dan rasul pilihan Allah serta risalah yang mereka bawa.",
  body:[{h:"Pengertian", list:["Nabi: manusia yang diberi wahyu tanpa diwajibkan menyampaikan kepada kaumnya (definisi umum).","Rasul: nabi yang diperintahkan menyampaikan risalah.","Perbedaan utama: rasul diutus dengan syariat baru atau untuk menyampaikan risalah kepada kaumnya; nabi meneruskan syariat sebelumnya.","Jumlah nabi yang disebut 124.000 dan rasul 313 (HR. Ahmad; riwayat ini perlu diteliti sanadnya) — yang wajib diketahui ada 25."]},
  {h:"Sifat rasul", list:["Siddiq (jujur)","Amanah (dapat dipercaya)","Tabligh (menyampaikan)","Fathanah (cerdas)","Terjaga dari dosa besar dan hal yang merusak kepercayaan"]},
  {h:"Mukjizat", p:["Bukti kenabian yang melampaui kebiasaan, seperti tongkat Musa, penyembuhan oleh Isa dengan izin Allah, dan Al-Qur'an sebagai mukjizat terbesar Muhammad ﷺ."]}],
  sources:["quran"], related:["iman","nabi-vs-rasul","nabi-muhammad"], tags:["akidah","rukun iman"]});
addEntry({id:"nabi-vs-rasul", menu:2, material:"iman-kepada-rasul", type:"article", title:"Nabi dan Rasul", summary:"Perbedaan konsep nabi dan rasul secara ringkas.",
  body:[{h:"Ringkasan", list:["Setiap rasul adalah nabi; tidak setiap nabi adalah rasul.","Rasul membawa syariat baru atau risalah khusus; nabi mengikuti syariat rasul sebelumnya.","25 nabi/rasul yang disebutkan dalam Al-Qur'an; biografi masing-masing ditautkan ke menu Tokoh & Ulama agar tidak ada biografi ganda."]}],
  sources:["quran","app"], related:["iman-kepada-rasul"], tags:["akidah"]});
addEntry({id:"iman-kepada-hari-akhir", menu:2, material:"iman-kepada-hari-akhir", type:"article", title:"Iman kepada Hari Akhir", summary:"Meyakini kehidupan setelah mati: barzakh, kebangkitan, hisab, surga, dan neraka.",
  body:[{h:"Urutan peristiwa", list:["Kematian dan alam barzakh (alam kubur).","Tanda-tanda kiamat dan tiupan sangkakala.","Kebangkitan dari kubur.","Mahsyar (berkumpul) dan hisab (perhitungan).","Mizan (timbangan amal) dan shirath (jembatan).","Syafaat dengan izin Allah.","Surga dan neraka — tempat tinggal abadi."]},
  {h:"Hikmah", p:["Mendorong taubat, amal saleh, dan kesiapan menghadapi kematian."]}],
  sources:["quran","muslim"], related:["iman","kematian","surga","neraka"], tags:["akidah","rukun iman"]});
addEntry({id:"kematian", menu:2, material:"iman-kepada-hari-akhir", type:"article", title:"Kematian & Alam Barzakh", summary:"Kematian adalah awal perjalanan akhirat; barzakh adalah alam antara dunia dan kebangkitan.",
  body:[{h:"Catatan", p:["\"Setiap yang berjiwa akan merasakan mati.\" (QS. Ali 'Imran 3:185). Di barzakh, manusia ditanya oleh Malaikat Munkar dan Nakir; amal menemani jenazah (HR. Tirmidzi no. 2516, hasan)."]}],
  sources:["quran","tirmidzi"], related:["iman-kepada-hari-akhir"], tags:["akidah","kematian"]});
addEntry({id:"surga", menu:2, material:"iman-kepada-hari-akhir", type:"article", title:"Surga", summary:"Balasan bagi orang beriman dan bertakwa — kenikmatan yang belum pernah dilihat mata.",
  body:[{h:"Catatan", p:["\"Maka tidak seorang pun mengetahui berbagai nikmat yang menanti, yang indah dipandang, sebagai balasan atas apa yang mereka kerjakan.\" (QS. As-Sajdah 32:17). Pintu-pintunya: Ar-Rayyan bagi yang berpuasa (HR. Bukhari no. 1896)."]}],
  sources:["quran","bukhari"], related:["iman-kepada-hari-akhir"], tags:["akidah","surga"]});
addEntry({id:"neraka", menu:2, material:"iman-kepada-hari-akhir", type:"article", title:"Neraka", summary:"Balasan bagi yang ingkar dan berbuat dosa besar tanpa taubat — tempat yang penuh azab.",
  body:[{h:"Catatan", p:["\"Peliharalah dirimu dari api neraka...\" (QS. Ali 'Imran 3:131). Iman kepada neraka mendorong menjauhi maksiat dan segera bertobat."]}],
  sources:["quran"], related:["iman-kepada-hari-akhir"], tags:["akidah","neraka"]});
addEntry({id:"iman-kepada-qada-qadar", menu:2, material:"iman-kepada-qada-qadar", type:"article", title:"Iman kepada Qada & Qadar", summary:"Meyakini ketetapan Allah yang baik maupun buruk — dengan tetap berikhtiar dan bertawakal.",
  body:[{h:"Pengertian", list:["Qada: ketetapan Allah atas segala sesuatu.","Qadar: takdir/ukuran Allah yang telah ditetapkan sejak azali.","Iman kepada takdir mencakup: ilmu Allah, penulisan di Lauh Mahfuzh, kehendak-Nya, dan penciptaan-Nya."]},
  {h:"Hubungan usaha & takdir", p:["Takdir tidak meniadakan ikhtiar; justru beriman kepada takdir mendorong beramal — \"beramallah, setiap orang dimudahkan sesuai apa yang diciptakan untuknya\" (HR. Bukhari no. 4949, Muslim no. 2647)."]},
  {h:"Hikmah", p:["Ketenangan menghadapi musibah, kejujuran dalam ikhtiar, dan keridhaan atas ketetapan Allah."]}],
  sources:["quran","bukhari","muslim"], related:["iman","ikhtiar-tawakal"], tags:["akidah","takdir"]});
addEntry({id:"ikhtiar-tawakal", menu:2, material:"iman-kepada-qada-qadar", type:"article", title:"Ikhtiar, Tawakal & Takdir", summary:"Berusaha dengan sungguh-sungguh, lalu berserah diri kepada Allah.",
  body:[{h:"Penjelasan", list:["Ikhtiar: usaha maksimal yang disyariatkan — \"...dan katakanlah: Bekerjalah kalian...\" (QS. At-Taubah 9:105).","Tawakal: bersandar kepada Allah setelah berusaha — \"...dan barang siapa bertawakal kepada Allah, niscaya Allah mencukupkan (keperluan)nya.\" (QS. At-Talaq 65:3).","Tawakal bukan berarti meninggalkan sebab."]}],
  sources:["quran"], related:["iman-kepada-qada-qadar"], tags:["akidah","tawakal"]});
