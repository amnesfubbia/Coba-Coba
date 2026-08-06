// assets/js/app.js
(function(){
  const KAABA = { lat: 21.422487, lng: 39.826206 };

  function el(q, ctx=document){ return ctx.querySelector(q); }
  function els(q, ctx=document){ return Array.from(ctx.querySelectorAll(q)); }

  function showScreen(id){
    els('.screen').forEach(s=> s.classList.toggle('active', s.id===id));
    // update active bottom nav if present
    els('.navbtn').forEach(b=> b.classList.toggle('active', b.dataset.goto===id));
    window.scrollTo(0,0);
  }

  function initNavigation(){
    // quick tiles
    els('.quick-tile').forEach(t=> t.addEventListener('click', ()=>{
      const g = t.dataset.goto;
      if(!g) return; showScreen('screen-'+g.replace(/^screen-/,g));
      // some tiles point directly to sub screens like 'iman' -> screen-iman
      const target = document.getElementById('screen-'+g) ? 'screen-'+g : (document.getElementById(g)? g : 'screen-'+g);
      showScreen(target);
    }));

    // elements with data-goto attribute (bottom nav or others)
    els('[data-goto]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const dest = btn.dataset.goto;
        if(!dest) return;
        const screenId = document.getElementById('screen-'+dest) ? 'screen-'+dest : dest;
        showScreen(screenId);
      });
    });

    // back-row
    els('[data-back]').forEach(b=> b.addEventListener('click', ()=>{
      // show main more hub if inside more
      const parent = b.closest('.sub-screen');
      if(parent){ parent.classList.remove('active'); document.getElementById('more-hub').style.display='block'; }
    }));

    // simple back to list handlers
    const backToSurah = el('#backToSurahList');
    if(backToSurah) backToSurah.addEventListener('click', ()=>{
      el('#surahDetailView').style.display='none';
      el('#surahListView').style.display='block';
    });
  }

  function initAccordion(){
    els('[data-card] .card-head').forEach(head=>{
      head.addEventListener('click', ()=>{
        const card = head.closest('.card');
        card.classList.toggle('open');
        const body = card.querySelector('.card-body');
        if(card.classList.contains('open')){
          body.style.maxHeight = body.scrollHeight + 'px';
        } else {
          body.style.maxHeight = null;
        }
      });
    });
  }

  function formatTime(t){
    // input HH:MM
    return t;
  }

  function updatePrayerWidget(timings, date){
    const container = el('#prayerWidget');
    if(!container) return;
    const status = el('#prayerStatus');
    status.innerHTML = '';
    const order = ['Fajr','Dhuhr','Asr','Maghrib','Isha'];
    order.forEach(k=>{
      const div = document.createElement('div');
      div.className = 'prayer-row';
      div.innerHTML = `<div>${k}</div><div>${timings[k]}</div>`;
      status.appendChild(div);
    });
    const note = document.createElement('div');
    note.className = 'prayer-status';
    note.textContent = 'Diambil dari AlAdhan (online) — waktu lokal.';
    status.appendChild(note);
  }

  function fetchPrayerTimes(lat, lng){
    const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=2`;
    fetch(url).then(r=>r.json()).then(data=>{
      if(data && data.data && data.data.timings){
        updatePrayerWidget(data.data.timings, data.data.date);
      }
    }).catch(err=>{
      const status = el('#prayerStatus'); if(status) status.textContent = 'Gagal memuat jadwal (cek koneksi).';
      console.error('Pray API error', err);
    });
  }

  function initGeolocation(){
    const btn = el('#btnLoc');
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      btn.disabled = true; btn.textContent = 'Meminta lokasi...';
      if(!navigator.geolocation){
        alert('Geolocation tidak tersedia di peramban ini.'); btn.disabled=false; btn.textContent='📍 Gunakan Lokasi Saya'; return;
      }
      navigator.geolocation.getCurrentPosition(pos=>{
        const lat = pos.coords.latitude, lng = pos.coords.longitude;
        btn.textContent = 'Lokasi diterima — memuat...';
        fetchPrayerTimes(lat,lng);
        // compute qibla bearing and show as note
        const bearing = computeQibla(lat,lng, KAABA.lat, KAABA.lng);
        const note = document.createElement('div'); note.className='prayer-status'; note.textContent = `Arah kiblat (derajat dari utara): ${bearing.toFixed(1)}°`;
        el('#prayerWidget').appendChild(note);
        btn.disabled=false; btn.textContent='📍 Gunakan Lokasi Saya';
      }, err=>{
        alert('Gagal mendapatkan lokasi: ' + (err.message||err.code)); btn.disabled=false; btn.textContent='📍 Gunakan Lokasi Saya';
      },{enableHighAccuracy:true, timeout:10000});
    });
  }

  function toRad(d){ return d * Math.PI/180; }
  function toDeg(r){ return r * 180/Math.PI; }
  function computeQibla(lat1, lon1, lat2, lon2){
    // formula bearing from point to Kaaba
    const φ1 = toRad(lat1), φ2 = toRad(lat2);
    const Δλ = toRad(lon2 - lon1);
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
    let θ = Math.atan2(y,x);
    θ = (toDeg(θ)+360) % 360; // degrees from north
    return θ;
  }

  function initSurahSearch(){
    const inp = el('#quranSearch');
    if(!inp) return;
    inp.addEventListener('input', ()=>{
      const q = inp.value.trim().toLowerCase();
      const list = el('#surahList');
      if(!list) return;
      list.innerHTML='';
      // simple placeholder: show few surah matches
      const sample = [
        {num:1, name:'Al-Fatihah', arab:'الفاتحة', verses:7},
        {num:2, name:'Al-Baqarah', arab:'البقرة', verses:286},
        {num:112, name:'Al-Ikhlas', arab:'الإخلاص', verses:4}
      ];
      const items = sample.filter(s=> s.name.toLowerCase().includes(q) || s.arab.includes(q) || String(s.num)===q || q==='');
      items.forEach(s=>{
        const div = document.createElement('div'); div.className='surah-item';
        div.innerHTML = `<div class="surah-num">${s.num}</div><div class="surah-info"><b>${s.name}</b><span>${s.verses} ayat</span></div><div class="surah-arabic">${s.arab}</div>`;
        div.addEventListener('click', ()=> openSurahDetail(s));
        list.appendChild(div);
      });
    });
    // trigger initial
    inp.dispatchEvent(new Event('input'));
  }

  function openSurahDetail(surah){
    el('#surahListView').style.display='none';
    el('#surahDetailView').style.display='block';
    el('#quranHeading').textContent = `${surah.name} — ${surah.verses} ayat`;
    const ayahList = el('#ayahList'); ayahList.innerHTML = '';
    for(let i=1;i<=Math.min(20,surah.verses);i++){
      const card = document.createElement('div'); card.className='ayah-card';
      card.innerHTML = `<div class="ayah-top"><div class="ayah-num-badge">${i}</div><button class="play-btn" data-src="https://server.mp3/surah${surah.num}_ayah${i}.mp3">▶</button></div><div class="ayah-arabic">[Arabic text ayah ${i}]</div><div class="ayah-translation">[Translation ayah ${i}]</div>`;
      ayahList.appendChild(card);
    }
  }

  function initAudioButtons(){
    document.addEventListener('click', e=>{
      const btn = e.target.closest('.play-btn'); if(!btn) return;
      const src = btn.dataset.src; if(!src) return;
      if(btn.classList.contains('playing')){ btn.classList.remove('playing'); if(window._audio) { window._audio.pause(); window._audio=null; } return; }
      // stop existing
      if(window._audio){ window._audio.pause(); }
      const a = new Audio(src); window._audio=a; a.play(); btn.classList.add('playing');
      a.addEventListener('ended', ()=> btn.classList.remove('playing'));
      a.addEventListener('pause', ()=> btn.classList.remove('playing'));
    });
  }

  function registerSW(){
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('/sw.js').catch(e=>console.warn('SW reg failed',e));
    }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    // splash hide
    setTimeout(()=>{
      const s = document.getElementById('splash'); if(s) s.classList.add('hide');
    }, 900);
    initNavigation(); initAccordion(); initGeolocation(); initSurahSearch(); initAudioButtons(); registerSW();
  });

})();
