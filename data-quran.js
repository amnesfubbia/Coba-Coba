/* ============================================================
   SILMIKAFFAH — Database Al-Qur'an (data-quran.js)
   Metadata surah (fakta standar mushaf), juz, Juz 'Amma,
   Iqra 1–6 (materi orisinal), Tajwid, Tafsir, ayat contoh.
   ============================================================ */
const DBQ = window.SILMIKAFFAH;

/* ---------- 114 SURAH (metadata standar) ----------
   [nomor, nama Arab, transliterasi, arti, tempat turun, jumlah ayat, juz awal] */
DBQ.SURAHS = [
[1,"الفاتحة","Al-Fatihah","Pembukaan","Makkiyah",7,1],
[2,"البقرة","Al-Baqarah","Sapi Betina","Madaniyah",286,1],
[3,"آل عمران","Ali 'Imran","Keluarga Imran","Madaniyah",200,3],
[4,"النساء","An-Nisa'","Wanita","Madaniyah",176,4],
[5,"المائدة","Al-Ma'idah","Hidangan","Madaniyah",120,6],
[6,"الأنعام","Al-An'am","Binatang Ternak","Makkiyah",165,7],
[7,"الأعراف","Al-A'raf","Tempat Tertinggi","Makkiyah",206,8],
[8,"الأنفال","Al-Anfal","Rampasan Perang","Madaniyah",75,9],
[9,"التوبة","At-Taubah","Pengampunan","Madaniyah",129,10],
[10,"يونس","Yunus","Nabi Yunus","Makkiyah",109,11],
[11,"هود","Hud","Nabi Hud","Makkiyah",123,11],
[12,"يوسف","Yusuf","Nabi Yusuf","Makkiyah",111,12],
[13,"الرعد","Ar-Ra'd","Guruh","Madaniyah",43,13],
[14,"إبراهيم","Ibrahim","Nabi Ibrahim","Makkiyah",52,13],
[15,"الحجر","Al-Hijr","Hijr","Makkiyah",99,14],
[16,"النحل","An-Nahl","Lebah","Makkiyah",128,14],
[17,"الإسراء","Al-Isra'","Perjalanan Malam","Makkiyah",111,15],
[18,"الكهف","Al-Kahf","Gua","Makkiyah",110,15],
[19,"مريم","Maryam","Maryam","Makkiyah",98,16],
[20,"طه","Thaha","Thaha","Makkiyah",135,16],
[21,"الأنبياء","Al-Anbiya'","Para Nabi","Makkiyah",112,17],
[22,"الحج","Al-Hajj","Haji","Madaniyah",78,17],
[23,"المؤمنون","Al-Mu'minun","Orang-orang Mukmin","Makkiyah",118,18],
[24,"النور","An-Nur","Cahaya","Madaniyah",64,18],
[25,"الفرقان","Al-Furqan","Pembeda","Makkiyah",77,19],
[26,"الشعراء","Asy-Syu'ara'","Para Penyair","Makkiyah",227,19],
[27,"النمل","An-Naml","Semut","Makkiyah",93,20],
[28,"القصص","Al-Qasas","Kisah-kisah","Makkiyah",88,20],
[29,"العنكبوت","Al-'Ankabut","Laba-laba","Makkiyah",69,21],
[30,"الروم","Ar-Rum","Bangsa Romawi","Makkiyah",60,21],
[31,"لقمان","Luqman","Luqman","Makkiyah",34,21],
[32,"السجدة","As-Sajdah","Sujud","Makkiyah",30,21],
[33,"الأحزاب","Al-Ahzab","Golongan Bersekutu","Madaniyah",73,22],
[34,"سبأ","Saba'","Kaum Saba'","Makkiyah",54,22],
[35,"فاطر","Fatir","Pencipta","Makkiyah",45,22],
[36,"يس","Ya Sin","Ya Sin","Makkiyah",83,23],
[37,"الصافات","As-Saffat","Barisan-barisan","Makkiyah",182,23],
[38,"ص","Sad","Sad","Makkiyah",88,23],
[39,"الزمر","Az-Zumar","Rombongan","Makkiyah",75,24],
[40,"غافر","Ghafir","Yang Mengampuni","Makkiyah",85,24],
[41,"فصلت","Fussilat","Yang Dijelaskan","Makkiyah",54,25],
[42,"الشورى","Asy-Syura","Musyawarah","Makkiyah",53,25],
[43,"الزخرف","Az-Zukhruf","Perhiasan","Makkiyah",89,25],
[44,"الدخان","Ad-Dukhan","Kabut","Makkiyah",59,25],
[45,"الجاثية","Al-Jatsiyah","Yang Berlutut","Makkiyah",37,25],
[46,"الأحقاف","Al-Ahqaf","Bukit Pasir","Makkiyah",35,26],
[47,"محمد","Muhammad","Nabi Muhammad","Madaniyah",38,26],
[48,"الفتح","Al-Fath","Kemenangan","Madaniyah",29,26],
[49,"الحجرات","Al-Hujurat","Kamar-kamar","Madaniyah",18,26],
[50,"ق","Qaf","Qaf","Makkiyah",45,26],
[51,"الذاريات","Adz-Dzariyat","Angin yang Menerbangkan","Makkiyah",60,27],
[52,"الطور","At-Tur","Bukit","Makkiyah",49,27],
[53,"النجم","An-Najm","Bintang","Makkiyah",62,27],
[54,"القمر","Al-Qamar","Bulan","Makkiyah",55,27],
[55,"الرحمن","Ar-Rahman","Yang Maha Pengasih","Madaniyah",78,27],
[56,"الواقعة","Al-Waqi'ah","Hari Kiamat","Makkiyah",96,27],
[57,"الحديد","Al-Hadid","Besi","Madaniyah",29,27],
[58,"المجادلة","Al-Mujadilah","Gugatan","Madaniyah",22,28],
[59,"الحشر","Al-Hasyr","Pengusiran","Madaniyah",24,28],
[60,"الممتحنة","Al-Mumtahanah","Wanita yang Diuji","Madaniyah",13,28],
[61,"الصف","As-Saff","Barisan","Madaniyah",14,28],
[62,"الجمعة","Al-Jumu'ah","Jumat","Madaniyah",11,28],
[63,"المنافقون","Al-Munafiqun","Orang-orang Munafik","Madaniyah",11,28],
[64,"التغابن","At-Taghabun","Pengungkapan Kesalahan","Madaniyah",18,28],
[65,"الطلاق","At-Talaq","Talak","Madaniyah",12,28],
[66,"التحريم","At-Tahrim","Pengharaman","Madaniyah",12,28],
[67,"الملك","Al-Mulk","Kerajaan","Makkiyah",30,29],
[68,"القلم","Al-Qalam","Pena","Makkiyah",52,29],
[69,"الحاقة","Al-Haqqah","Hari Kepastian","Makkiyah",52,29],
[70,"المعارج","Al-Ma'arij","Tempat Naik","Makkiyah",44,29],
[71,"نوح","Nuh","Nabi Nuh","Makkiyah",28,29],
[72,"الجن","Al-Jinn","Jin","Makkiyah",28,29],
[73,"المزمل","Al-Muzzammil","Orang yang Berselimut","Makkiyah",20,29],
[74,"المدثر","Al-Muddassir","Orang yang Berkemul","Makkiyah",56,29],
[75,"القيامة","Al-Qiyamah","Hari Kiamat","Makkiyah",40,29],
[76,"الإنسان","Al-Insan","Manusia","Madaniyah",31,29],
[77,"المرسلات","Al-Mursalat","Malaikat yang Diutus","Makkiyah",50,29],
[78,"النبأ","An-Naba'","Berita Besar","Makkiyah",40,30],
[79,"النازعات","An-Nazi'at","Malaikat yang Mencabut","Makkiyah",46,30],
[80,"عبس","'Abasa","Bermuka Masam","Makkiyah",42,30],
[81,"التكوير","At-Takwir","Penggulungan","Makkiyah",29,30],
[82,"الانفطار","Al-Infitar","Terbelah","Makkiyah",19,30],
[83,"المطففين","Al-Mutaffifin","Orang-orang Curang","Makkiyah",36,30],
[84,"الانشقاق","Al-Insyiqaq","Terbelah","Makkiyah",25,30],
[85,"البروج","Al-Buruj","Gugusan Bintang","Makkiyah",22,30],
[86,"الطارق","At-Tariq","Bintang yang Menembus","Makkiyah",17,30],
[87,"الأعلى","Al-A'la","Yang Maha Tinggi","Makkiyah",19,30],
[88,"الغاشية","Al-Ghasyiyah","Hari Pembalasan","Makkiyah",26,30],
[89,"الفجر","Al-Fajr","Fajar","Makkiyah",30,30],
[90,"البلد","Al-Balad","Negeri","Makkiyah",20,30],
[91,"الشمس","Asy-Syams","Matahari","Makkiyah",15,30],
[92,"الليل","Al-Lail","Malam","Makkiyah",21,30],
[93,"الضحى","Ad-Duha","Waktu Duha","Makkiyah",11,30],
[94,"الشرح","Asy-Syarh","Kelapangan","Makkiyah",8,30],
[95,"التين","At-Tin","Buah Tin","Makkiyah",8,30],
[96,"العلق","Al-'Alaq","Segumpal Darah","Makkiyah",19,30],
[97,"القدر","Al-Qadr","Kemuliaan","Makkiyah",5,30],
[98,"البينة","Al-Bayyinah","Bukti Nyata","Madaniyah",8,30],
[99,"الزلزلة","Az-Zalzalah","Guncangan","Madaniyah",8,30],
[100,"العاديات","Al-'Adiyat","Kuda Perang","Makkiyah",11,30],
[101,"القارعة","Al-Qari'ah","Hari Kiamat","Makkiyah",11,30],
[102,"التكاثر","At-Takasur","Bermegah-megahan","Makkiyah",8,30],
[103,"العصر","Al-'Asr","Masa","Makkiyah",3,30],
[104,"الهمزة","Al-Humazah","Pengumpat","Makkiyah",9,30],
[105,"الفيل","Al-Fil","Gajah","Makkiyah",5,30],
[106,"قريش","Quraisy","Suku Quraisy","Makkiyah",4,30],
[107,"الماعون","Al-Ma'un","Barang Berguna","Makkiyah",7,30],
[108,"الكوثر","Al-Kausar","Nikmat Berlimpah","Makkiyah",3,30],
[109,"الكافرون","Al-Kafirun","Orang-orang Kafir","Makkiyah",6,30],
[110,"النصر","An-Nasr","Pertolongan","Madaniyah",3,30],
[111,"المسد","Al-Lahab","Gejolak Api","Makkiyah",5,30],
[112,"الإخلاص","Al-Ikhlas","Keikhlasan","Makkiyah",4,30],
[113,"الفلق","Al-Falaq","Waktu Subuh","Makkiyah",5,30],
[114,"الناس","An-Nas","Manusia","Makkiyah",6,30]
];
DBQ.surah = n => DBQ.SURAHS[n-1];

/* ---------- 30 JUZ (titik awal standar mushaf) ---------- */
DBQ.JUZ = [
[1,"Al-Fatihah","1:1"],[2,"Al-Baqarah","2:142"],[3,"Al-Baqarah","2:253"],[4,"Ali 'Imran","3:92"],
[5,"An-Nisa'","4:24"],[6,"An-Nisa'","4:148"],[7,"Al-Ma'idah","5:82"],[8,"Al-An'am","6:111"],
[9,"Al-A'raf","7:88"],[10,"Al-Anfal","8:41"],[11,"At-Taubah","9:93"],[12,"Hud","11:6"],
[13,"Yusuf","12:53"],[14,"Al-Hijr","15:1"],[15,"Al-Isra'","17:1"],[16,"Al-Kahf","18:75"],
[17,"Al-Anbiya'","21:1"],[18,"Al-Mu'minun","23:1"],[19,"Al-Furqan","25:21"],[20,"An-Naml","27:56"],
[21,"Al-'Ankabut","29:46"],[22,"Al-Ahzab","33:31"],[23,"Ya Sin","36:28"],[24,"Az-Zumar","39:32"],
[25,"Fussilat","41:47"],[26,"Al-Ahqaf","46:1"],[27,"Adz-Dzariyat","51:31"],[28,"Al-Mujadilah","58:1"],
[29,"Al-Mulk","67:1"],[30,"An-Naba'","78:1"]
];

/* ---------- AYAT CONTOH TERVERIFIKASI ----------
   Hanya teks yang telah diperiksa. Mushaf penuh memerlukan sumber berlisensi. */
DBQ.AYAT = {
  "1:1": {s:1, a:1, arab:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", arti:"Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang."},
  "1:2": {s:1, a:2, arab:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", arti:"Segala puji bagi Allah, Tuhan seluruh alam."},
  "1:3": {s:1, a:3, arab:"الرَّحْمَٰنِ الرَّحِيمِ", arti:"Yang Maha Pengasih lagi Maha Penyayang."},
  "1:4": {s:1, a:4, arab:"مَالِكِ يَوْمِ الدِّينِ", arti:"Pemilik hari pembalasan."},
  "1:5": {s:1, a:5, arab:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", arti:"Hanya kepada Engkau kami menyembah dan hanya kepada Engkau kami memohon pertolongan."},
  "1:6": {s:1, a:6, arab:"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", arti:"Tunjukilah kami jalan yang lurus."},
  "1:7": {s:1, a:7, arab:"صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", arti:"(Yaitu) jalan orang-orang yang telah Engkau beri nikmat; bukan (jalan) mereka yang dimurkai dan bukan pula (jalan) orang-orang yang sesat."},
  "2:255": {s:2, a:255, arab:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", arti:"Allah, tidak ada tuhan selain Dia, Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi, dan Dia tidak merasa berat memelihara keduanya. Dia Maha Tinggi lagi Maha Besar."},
  "103:1": {s:103, a:1, arab:"وَالْعَصْرِ", arti:"Demi masa."},
  "103:2": {s:103, a:2, arab:"إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", arti:"Sungguh, manusia berada dalam kerugian."},
  "103:3": {s:103, a:3, arab:"إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", arti:"Kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan kesabaran."},
  "112:1": {s:112, a:1, arab:"قُلْ هُوَ اللَّهُ أَحَدٌ", arti:"Katakanlah: Dialah Allah Yang Maha Esa."},
  "112:2": {s:112, a:2, arab:"اللَّهُ الصَّمَدُ", arti:"Allah tempat meminta segala sesuatu."},
  "112:3": {s:112, a:3, arab:"لَمْ يَلِدْ وَلَمْ يُولَدْ", arti:"Dia tidak beranak dan tidak pula diperanakkan."},
  "112:4": {s:112, a:4, arab:"وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", arti:"Dan tidak ada sesuatu yang setara dengan Dia."},
  "113:1": {s:113, a:1, arab:"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", arti:"Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh (fajar)."},
  "113:2": {s:113, a:2, arab:"مِن شَرِّ مَا خَلَقَ", arti:"Dari kejahatan (makhluk) yang Dia ciptakan."},
  "113:3": {s:113, a:3, arab:"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", arti:"Dan dari kejahatan malam apabila telah gelap gulita."},
  "113:4": {s:113, a:4, arab:"وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", arti:"Dan dari kejahatan (perempuan-perempuan penyihir) yang meniup pada buhul-buhul (talinya)."},
  "113:5": {s:113, a:5, arab:"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", arti:"Dan dari kejahatan orang yang dengki apabila dia dengki."},
  "114:1": {s:114, a:1, arab:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ", arti:"Katakanlah: Aku berlindung kepada Tuhan manusia."},
  "114:2": {s:114, a:2, arab:"مَلِكِ النَّاسِ", arti:"Raja manusia."},
  "114:3": {s:114, a:3, arab:"إِلَٰهِ النَّاسِ", arti:"Sembahan manusia."},
  "114:4": {s:114, a:4, arab:"مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", arti:"Dari kejahatan (bisikan) setan yang bersembunyi."},
  "114:5": {s:114, a:5, arab:"الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", arti:"Yang membisikkan (kejahatan) ke dalam dada manusia."},
  "114:6": {s:114, a:6, arab:"مِنَ الْجِنَّةِ وَالنَّاسِ", arti:"Dari (golongan) jin dan manusia."}
};
DBQ.ayatOf = (s,a) => DBQ.AYAT[s+":"+a];

/* ---------- ENTRI MENU 03 ---------- */
addEntry({
  id:"alquran", menu:3, material:"mushaf", type:"article",
  title:"Al-Qur'an", summary:"Kitab suci umat Islam, wahyu Allah kepada Nabi Muhammad ﷺ, pedoman hidup yang terjaga keasliannya.",
  body:[
    {h:"Pengertian", p:["Al-Qur'an adalah firman Allah yang diturunkan kepada Nabi Muhammad ﷺ melalui malaikat Jibril, ditulis dalam mushaf, disampaikan secara mutawatir, dan membacanya bernilai ibadah."]},
    {h:"Keutamaan", list:["Membacanya mendapat pahala: satu huruf = satu kebaikan yang dilipatgandakan (HR. Tirmidzi no. 2910).","Sebaik-baik manusia adalah yang belajar dan mengajarkan Al-Qur'an (HR. Bukhari no. 5027).","Al-Qur'an menjadi syafaat bagi pembacanya (HR. Muslim no. 804)."]},
    {h:"Adab", list:["Membaca dalam keadaan suci, menghadap kiblat bila memungkinkan.","Membaca ta'awudz sebelum memulai.","Membaca dengan tartil (perlahan dan benar).","Menghayati makna dan mengamalkannya."]},
    {h:"Status data", p:["Aplikasi menampilkan metadata 114 surah dan kumpulan ayat contoh terverifikasi. Mushaf digital lengkap memerlukan sumber berlisensi dan akan ditambahkan kemudian — tidak diisi dengan data karangan."]}
  ],
  sources:["quran","bukhari","muslim"], related:["surah-1","juz-amma","iqra-1","tajwid"], tags:["al-quran","akidah"]
});
addEntry({
  id:"mushaf", menu:3, material:"mushaf", type:"article",
  title:"Mushaf", summary:"Bentuk Al-Qur'an yang ditulis: 30 juz, 114 surah, lebih dari 6.200 ayat.",
  body:[
    {h:"Struktur", list:["30 juz — pembagian untuk memudahkan khatam.","114 surah — dari Al-Fatihah hingga An-Nas.","Ayat — satuan wahyu; jumlahnya menurut riwayat Kufi 6.236 ayat.","Setiap surah: nama, jumlah ayat, dan tempat turun (Makkiyah/Madaniyah)."]},
    {h:"Kodifikasi", p:["Pada masa Abu Bakar, Al-Qur'an dibukukan atas usul Umar bin Khattab; pada masa Utsman diseragamkan menjadi satu mushaf (mushaf Utsmani) yang menjadi dasar mushaf hingga kini."]}
  ],
  sources:["quran"], related:["alquran","juz-amma"], tags:["al-quran","ulumul quran"]
});
addEntry({
  id:"juz-amma", menu:3, material:"juz-amma", type:"article",
  title:"Juz 'Amma", summary:"Juz 30 — 37 surah pendek, jendela pertama bagi penghafal dan pemula.",
  body:[
    {h:"Isi", p:["Juz 'Amma terdiri dari 37 surah, dari An-Naba' (78) hingga An-Nas (114). Kebanyakan surah pendek dan sering dibaca dalam shalat."]},
    {h:"Cara belajar", list:["Baca dengan tartil dan dengarkan murottal (audio menyusul).","Hafal bertahap dengan pengulangan.","Pahami arti tiap ayat.","Evaluasi hafalan dengan setoran kepada guru."]}
  ],
  sources:["quran","app"], related:["alquran","iqra-1"], tags:["al-quran","hafalan"]
});
addEntry({id:"iqra", menu:3, material:"iqra", type:"article", title:"Iqra 1–6", summary:"Tahapan belajar membaca Al-Qur'an. Materi ini disusun orisinal oleh tim aplikasi, bukan salinan buku berhak cipta.",
  body:[{h:"Catatan penting", p:["Urutan pelajaran dibuat aplikasi sebagai panduan umum. Belajar membaca Al-Qur'an tetap paling baik melalui talaqqi (tatap muka) dengan guru. Setelah Iqra selesai, pengguna diarahkan ke pembelajaran membaca mushaf."]}],
  sources:["app"], related:["iqra-1","tajwid","huruf-hijaiyah"], tags:["al-quran","iqra","belajar"]});
addEntry({id:"iqra-1", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 1 — Huruf Hijaiyah & Fathah", summary:"Mengenal 28 huruf hijaiyah dengan harakat fathah (a).",
  body:[
    {h:"Tujuan", p:["Mengenal bentuk dan bunyi huruf hijaiyah tunggal berharakat fathah: ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن و ه ي."]},
    {h:"Latihan", list:["Baca huruf demi huruf dari kanan ke kiri.","Contoh: بَ = ba, تَ = ta, جَ = ja, دَ = da.","Ulangi hingga lancar tanpa mengeja."]},
    {h:"Catatan", p:["Materi orisinal aplikasi. Disarankan belajar dengan guru (talaqqi)."]}
  ],
  sources:["app"], related:["iqra-2","huruf-hijaiyah"], tags:["al-quran","iqra"]});
addEntry({id:"iqra-2", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 2 — Kasrah, Dhammah & Sukun", summary:"Melanjutkan harakat: kasrah (i), dhammah (u), dan sukun.",
  body:[
    {h:"Materi", list:["Kasrah: بِ = bi, تِ = ti, جِ = ji.","Dhammah: بُ = bu, تُ = tu, جُ = ju.","Sukun: huruf mati — اَبْ = ab, بَتْ = bat.","Perbedaan bunyi harakat sangat menentukan makna."]},
    {h:"Latihan", p:["Gabungkan tiga huruf: بَكْتَ = bakta, تِبْ = tib. Baca perlahan lalu percepat."]}
  ],
  sources:["app"], related:["iqra-1","iqra-3"], tags:["al-quran","iqra"]});
addEntry({id:"iqra-3", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 3 — Tanwin & Huruf Sambung", summary:"Belajar tanwin dan cara menulis/membaca huruf bersambung.",
  body:[
    {h:"Materi", list:["Tanwin: ـً ـٍ ـٌ — بًا = ban, بٍ = bin, بٌ = bun.","Bentuk huruf berubah saat bersambung (awal, tengah, akhir).","Contoh kata bersambung: كَتَبَ (ka-ta-ba) = menulis."]},
    {h:"Latihan", p:["Baca kata: مَسْجِدٌ (masjidun), كِتَابٌ (kitabun). Perhatikan tanwin di akhir kata."]}
  ],
  sources:["app"], related:["iqra-2","iqra-4"], tags:["al-quran","iqra"]});
addEntry({id:"iqra-4", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 4 — Mad Thabi'i", summary:"Belajar panjang pendek bacaan (mad asli).",
  body:[
    {h:"Materi", list:["Mad thabi'i: harakat fathah + alif (بَا = baa, 2 harakat), kasrah + ya sukun (بِي = bii), dhammah + wau sukun (بُو = buu).","Panjang mad thabi'i: 2 harakat.","Contoh: قَالَ (qaala), يَقُولُ (yaquulu), قِيلَ (qiila)."]},
    {h:"Latihan", p:["Bedakan بَ (ba) dan بَا (baa) saat membaca. Ini fondasi tajwid."]}
  ],
  sources:["app"], related:["iqra-3","iqra-5","mad"], tags:["al-quran","iqra"]});
addEntry({id:"iqra-5", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 5 — Hukum Bacaan Dasar", summary:"Mengenal nun sukun/tanwin dan mim sukun secara sederhana.",
  body:[
    {h:"Materi", list:["Izhar (jelas): nun sukun/tanwin bertemu huruf halqi.","Idgham (melebur) dan ikhfa (samar) secara ringkas.","Mim sukun bertemu mim (idgham mimi) dan ba (ikhfa syafawi).","Contoh: مِنْ مَالٍ, عَنْ بَعْضٍ — perhatikan bunyinya."]},
    {h:"Catatan", p:["Pembahasan lengkap ada di materi Tajwid. Tahap ini berlatih mengenali dan membunyikannya."]}
  ],
  sources:["app"], related:["iqra-4","iqra-6","tajwid"], tags:["al-quran","iqra"]});
addEntry({id:"iqra-6", menu:3, material:"iqra", sub:"level", type:"lesson", title:"Iqra 6 — Bacaan Lancar Menuju Mushaf", summary:"Tahap akhir: membaca kalimat dan ayat pendek dengan lancar dan benar.",
  body:[
    {h:"Materi", list:["Membaca ayat pendek (Juz 'Amma) dengan tartil.","Memperhatikan mad, ghunnah, dan waqaf sederhana.","Berhenti di akhir kalimat dengan benar."]},
    {h:"Selanjutnya", p:["Setelah Iqra 6 tuntas, lanjutkan ke pembelajaran membaca Al-Qur'an (mushaf) dan pelajaran tajwid."]}
  ],
  sources:["app"], related:["iqra-5","juz-amma","tajwid"], tags:["al-quran","iqra"]});

/* ---- TAJWID ---- */
addEntry({id:"tajwid", menu:3, material:"tajwid", type:"article", title:"Tajwid", summary:"Ilmu tentang kaidah membaca Al-Qur'an dengan benar — memberi hak dan mustahak setiap huruf.",
  body:[{h:"Tujuan", p:["Menjaga lisan dari kesalahan (lahn) dalam membaca Al-Qur'an. Hukum mempelajarinya fardhu kifayah, mengamalkannya fardhu 'ain bagi yang membaca Al-Qur'an."]},{h:"Cakupan", list:["Nun mati & tanwin: izhar, idgham, ikhfa, iqlab.","Mim mati: ikhfa syafawi, idgham mimi, izhar syafawi.","Mad, qalqalah, ghunnah, waqaf, dan ibtida'."]}],
  sources:["app"], related:["nun-mati","mim-mati","mad","qalqalah","waqaf"], tags:["al-quran","tajwid"]});
addEntry({id:"nun-mati", menu:3, material:"tajwid", type:"article", title:"Nun Mati & Tanwin", summary:"Empat hukum nun sukun/tanwin: izhar, idgham, ikhfa, iqlab.",
  body:[
    {h:"Pembagian", list:["Izhar halqi: bertemu huruf halqi (ء هـ ع ح غ خ) — dibaca jelas.","Idgham: bertemu ن م ي و ل ر — bighunnah (ن م ي و) / bila ghunnah (ل ر).","Ikhfa: bertemu 15 huruf lainnya — dibaca samar dengan ghunnah.","Iqlab: bertemu ب — berubah menjadi mim samar."]},
    {h:"Contoh", p:["مِنْ عَمَلِهِ (izhar), مِنْ نُّعْمَةٍ (idgham), مِنْ بَعْدِ (iqlab), عَنْ دَابَّةٍ (ikhfa)."]}
  ],
  sources:["app"], related:["tajwid","mim-mati"], tags:["al-quran","tajwid"]});
addEntry({id:"mim-mati", menu:3, material:"tajwid", type:"article", title:"Mim Mati", summary:"Tiga hukum mim sukun: ikhfa syafawi, idgham mimi, izhar syafawi.",
  body:[{h:"Pembagian", list:["Ikhfa syafawi: mim mati bertemu ب — samar dengan ghunnah.","Idgham mimi: mim mati bertemu م — dilebur dengan ghunnah.","Izhar syafawi: mim mati bertemu selain م dan ب — jelas tanpa ghunnah."]}],
  sources:["app"], related:["tajwid","nun-mati"], tags:["al-quran","tajwid"]});
addEntry({id:"idgham", menu:3, material:"tajwid", type:"article", title:"Idgham", summary:"Meleburkan dua huruf menjadi satu yang ditasydidkan.",
  body:[{h:"Jenis", list:["Idgham bighunnah: ن/ي/م/و (contoh: مِنْ نُّعْمَةٍ).","Idgham bila ghunnah: ل/ر (contoh: مِنْ لَدُنْ).","Idgham mutamatsilain/mutajanisain/mutaqaribain: dua huruf sama/sejenis/dekat makhrajnya."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});
addEntry({id:"ikhfa", menu:3, material:"tajwid", type:"article", title:"Ikhfa", summary:"Membaca nun sukun/tanwin secara samar antara izhar dan idgham, dengan ghunnah.",
  body:[{h:"Huruf ikhfa", p:["15 huruf: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك. Contoh: مِنْ تَحْتِهَا dibaca samar."]}],
  sources:["app"], related:["tajwid","nun-mati"], tags:["al-quran","tajwid"]});
addEntry({id:"iqlab", menu:3, material:"tajwid", type:"article", title:"Iqlab", summary:"Nun sukun/tanwin bertemu ba — berubah bunyi menjadi mim samar dengan ghunnah.",
  body:[{h:"Contoh", p:["مِنْ بَعْدِ — dibaca mim samar (mimba'di). Tanda: mim kecil di atas nun dalam mushaf standar."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});
addEntry({id:"izhar", menu:3, material:"tajwid", type:"article", title:"Izhar Halqi", summary:"Membaca nun sukun/tanwin dengan jelas tanpa ghunnah saat bertemu huruf halqi.",
  body:[{h:"Huruf halqi", p:["ء هـ ع ح غ خ. Contoh: مِنْ عَمَلِهِ, أَنْعَمْتَ."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});
addEntry({id:"mad", menu:3, material:"tajwid", type:"article", title:"Mad", summary:"Hukum panjang bacaan; ada mad thabi'i dan mad far'i.",
  body:[{h:"Pembagian ringkas", list:["Mad thabi'i: 2 harakat (بَا, بِىْ, بُوْ).","Mad wajib muttashil: 4–5 harakat.","Mad jaiz munfashil: 4–5 harakat.","Mad 'aridh lissukun: 2, 4, atau 6 harakat (saat waqaf).","Mad lazim: 6 harakat."]}],
  sources:["app"], related:["tajwid","iqra-4"], tags:["al-quran","tajwid"]});
addEntry({id:"qalqalah", menu:3, material:"tajwid", type:"article", title:"Qalqalah", summary:"Memantulkan bunyi huruf saat sukun: ق ط ب ج د.",
  body:[{h:"Pembagian", list:["Qalqalah sughra: huruf qalqalah di tengah kata (contoh: يَجْعَلُ).","Qalqalah kubra: huruf qalqalah di akhir kata / saat waqaf (contoh: الْحَقُّ → dibaca mantul kuat)."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});
addEntry({id:"ghunnah", menu:3, material:"tajwid", type:"article", title:"Ghunnah", summary:"Bunyi dengung pada nun dan mim yang bertasydid (2 harakat).",
  body:[{h:"Contoh", p:["إِنَّ (in-na dengan dengung), ثُمَّ (tsum-ma). Juga pada idgham bighunnah dan ikhfa."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});
addEntry({id:"waqaf", menu:3, material:"tajwid", type:"article", title:"Waqaf & Ibtida'", summary:"Cara berhenti dan memulai bacaan agar makna tidak rusak.",
  body:[{h:"Tanda waqaf", list:["مـ (waqaf lazim — wajib berhenti).","ج (jaiz — boleh berhenti).","صلى (al-washlu aula — sambung lebih utama).","قلى (al-waqfu aula — berhenti lebih utama)."]},{h:"Catatan", p:["Berhenti di tempat yang merusak makna hukumnya tidak dibenarkan; pelajari tanda dan konteks ayat."]}],
  sources:["app"], related:["tajwid"], tags:["al-quran","tajwid"]});

/* ---- TAFSIR & ULUMUL QUR'AN ---- */
addEntry({id:"tafsir", menu:3, material:"tafsir", type:"article", title:"Tafsir Al-Qur'an", summary:"Penjelasan makna ayat Al-Qur'an berdasarkan kaidah dan sumber yang kuat.",
  body:[{h:"Metode", list:["Tafsir bi al-ma'tsur: berdasarkan Al-Qur'an, hadis, dan atsar sahabat.","Tafsir bi ar-ra'yi: berdasarkan ijtihad dengan kaidah bahasa dan syariat.","Tafsir isyari (sinyal): penafsiran batin yang tidak bertentangan dengan makna lahir."]},{h:"Catatan", p:["Ringkasan tafsir per surah memerlukan rujukan kitab tafsir berlisensi; akan ditambahkan bertahap. Sebagian entri di menu ini berstatus perlu verifikasi."]}],
  sources:["tafsir"], related:["asbabun-nuzul","makkiyah-madaniyah"], tags:["al-quran","tafsir"]});
addEntry({id:"asbabun-nuzul", menu:3, material:"tafsir", type:"article", title:"Asbabun Nuzul", summary:"Sebab-sebab turunnya ayat — kunci memahami konteks wahyu.",
  body:[{h:"Fungsi", p:["Menjelaskan hikmah disyariatkannya hukum, mengkhususkan yang umum, dan menghilangkan keraguan. Contoh: asbab nuzul QS. Al-Lail 92:3-4 tentang perbedaan usaha manusia."]}],
  sources:["tafsir"], related:["tafsir"], tags:["al-quran","ulumul quran"]});
addEntry({id:"makkiyah-madaniyah", menu:3, material:"tafsir", type:"article", title:"Makkiyah & Madaniyah", summary:"Pembagian surah berdasarkan tempat/waktu turun: sebelum dan sesudah hijrah.",
  body:[{h:"Ciri", list:["Makkiyah: umumnya pendek, fokus akidah, menyebutkan \"ya ayyuhan-nas\", berisi kisah para nabi.","Madaniyah: umumnya panjang, fokus hukum dan muamalah, menyebutkan \"ya ayyuhal-lazina amanu\", berisi ahlu kitab dan munafik."]}],
  sources:["tafsir"], related:["tafsir"], tags:["al-quran","ulumul quran"]});
addEntry({id:"munasabah", menu:3, material:"tafsir", type:"article", title:"Munasabah", summary:"Keterkaitan antarayat dan antarsurah — menunjukkan kesatuan tema Al-Qur'an.",
  body:[{h:"Contoh", p:["Akhir QS. Al-Baqarah (ayat 285-286) menegaskan iman dan doa, sambung dengan awal QS. Ali 'Imran yang juga menegaskan keimanan pada kitab yang diturunkan."]}],
  sources:["tafsir"], related:["tafsir"], tags:["al-quran","ulumul quran"]});
addEntry({id:"kodifikasi-quran", menu:3, material:"tafsir", type:"article", title:"Kodifikasi & Mushaf", summary:"Sejarah pembukuan Al-Qur'an: dari hafalan dan tulisan lepas hingga mushaf.",
  body:[{h:"Tahapan", list:["Masa Nabi ﷺ: hafalan para sahabat + tulisan di pelepah/batu.","Masa Abu Bakar: dibukukan atas usul Umar.","Masa Utsman: penyeragaman mushaf (mushaf Utsmani) dan pengiriman salinan ke berbagai wilayah."]}],
  sources:["tafsir"], related:["mushaf"], tags:["al-quran","ulumul quran"]});
addEntry({id:"qiraat", menu:3, material:"tafsir", type:"article", title:"Qira'at", summary:"Ragam bacaan Al-Qur'an yang mutawatir dan sahih, bersumber dari Rasulullah ﷺ.",
  body:[{h:"Catatan", p:["Tujuh qira'at masyhur (qira'at sab'ah) masing-masing memiliki sanad. Perbedaan bacaan tidak mengubah makna pokok; pelajari bersama guru yang bersanad."]}],
  sources:["app"], related:["tafsir"], tags:["al-quran","ulumul quran"]});
addEntry({id:"ulumul-quran", menu:3, material:"tafsir", type:"article", title:"Ulumul Qur'an", summary:"Ilmu-ilmu yang membahas Al-Qur'an: wahyu, nuzul, kodifikasi, i'jaz, dan kaidah tafsir.",
  body:[{h:"Cakupan", list:["Ilmu wahyu dan cara turunnya.","Ilmu makki-madani, asbabun nuzul, nasikh-mansukh.","Ilmu i'jaz dan kaidah penafsiran."]}],
  sources:["app"], related:["tafsir","kodifikasi-quran"], tags:["al-quran","ulumul quran"]});
