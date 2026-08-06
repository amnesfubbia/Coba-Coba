# Silmikaffah — enhancements

This branch (feature/app-enhancements) adds UI improvements, interactivity, prayer times, qibla calc, basic Quran UI, zakat calculator scaffold, and PWA support.

What I added:
- assets/js/app.js — primary client JS: navigation, accordion, splash, geolocation + AlAdhan fetch, qibla compute, simple surah list & audio controls, service worker registration.
- manifest.json — PWA manifest
- sw.js — simple service worker to cache basic assets

Notes & next steps:
- I did not modify index.html in this commit to avoid conflicts; I will follow up updating index.html to include the script tag and manifest link unless you prefer me to update it now.
- The Quran audio URLs used in app.js are placeholders. To enable real murottal audio, provide preferred reciter URLs or allow me to wire in a public CDN (Mishary Alafasy or others).
- AlAdhan API is used for prayer times (no API key required for basic usage). This will make client requests to https://api.aladhan.com — consider adding server proxy if you want to hide client IPs.

If you want, I can now update index.html to include `<link rel="manifest" href="/manifest.json">` and `<script src="/assets/js/app.js"></script>` and also tidy up a few markup issues. Reply with "update index" to let me apply that change and open a PR.
