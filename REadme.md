# Al Ponte di Schiavonia - Sito Web Unificato

Trattoria e Pizzeria a Forlì dal 1978.

## Struttura

```
├── index.html          ← Homepage con hero, specialità, galleria
├── menu.html           ← Menu completo con filtri e carrello
├── ordina.html         ← Ordina online con carrello e WhatsApp
├── contatti.html       ← Contatti, orari, mappa
├── css/
│   └── styles.css      ← Stili unificati (1459 righe)
├── js/
│   └── main.js         ← Logica: carrello, filtri, ordini WhatsApp
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker per cache
└── images/             ← Icone PWA e favicon
```

## Funzionalità

- ✅ Responsive (mobile, tablet, desktop)
- ✅ Navbar sticky con blur + hamburger mobile
- ✅ Menu completo: 7 antipasti, 8 primi, 33 pizze, 9 secondi, 5 contorni, 4 dessert, 9 birre, 3 vini rossi, 2 vini bianchi, 5 bevande
- ✅ Filtri categorie sticky nel menu
- ✅ Carrello persistente con localStorage
- ✅ Ordine via WhatsApp con messaggio strutturato
- ✅ Scroll animations con IntersectionObserver
- ✅ Schema.org LocalBusiness + Restaurant
- ✅ Open Graph + Twitter Card
- ✅ PWA con manifest + service worker
- ✅ Galleria fotografica
- ✅ Mappa Google Maps integrata

## Da fare

- [ ] Aggiungere immagini reali del ristorante
- [ ] Aggiungere P.IVA nel footer
- [ ] Aggiornare link social media
- [ ] Testare su dispositivi reali

## Tech Stack

- HTML5 + CSS3 (custom, senza framework)
- JavaScript vanilla (ES6+)
- Google Fonts: Playfair Display + Inter
- Font Awesome (via CDN, opzionale)
- PWA (Service Worker + Manifest)
