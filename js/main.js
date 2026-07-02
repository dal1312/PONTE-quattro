/* ========================================
   SITE ASSETS — inserisci qui le tue immagini
   Cartelle: images/logo/, images/hero/,
   images/menu/, images/gallery/
   Dimensioni consigliate:
     logo: PNG/SVG ~200×200
     hero: JPG/WebP 1920×1080
     menu/{categoria}.jpg: 800×600
======================================== */
const siteAssets = {
    logo: null,
    hero: null,
    about: null,
    menu: {
        antipasti: null,
        primi: null,
        pizze: null,
        secondi: null,
        contorni: null,
        dessert: null,
        birre: null,
        vini_rossi: null,
        vini_bianchi: null,
        bevande: null
    }
};

const categoryIcons = {
    antipasti: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11h16"/><path d="M6 11a6 6 0 0 1 12 0"/><path d="M7 15h10"/></svg>',
    primi: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3v18"/><path d="M9 3v18"/><path d="M13 3v18"/><path d="M18 5c2 2 2 5 0 7v9"/></svg>',
    pizze: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21 3 3c6 0 12 3 18 9l-9 9z"/><circle cx="10" cy="9" r="1"/><circle cx="13" cy="14" r="1"/></svg>',
    secondi: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h12"/><path d="M6 16h12"/><path d="M8 8h8"/></svg>',
    contorni: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21 3 3c6 0 12 3 18 9l-9 9z"/></svg>',
    dessert: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11h16"/><path d="M6 11l2-6h8l2 6"/></svg>',
    birre: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3h8l-1 8a4 4 0 0 1-6 0L8 3z"/><path d="M12 14v7"/></svg>',
    vini_rossi: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 22h8"/><path d="M7 10h10l-1 12H8L7 10z"/><path d="M12 10V6"/></svg>',
    vini_bianchi: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 22h8"/><path d="M7 10h10l-1 12H8L7 10z"/><path d="M12 10V6"/></svg>',
    bevande: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8v6a4 4 0 0 1-8 0V2z"/><path d="M12 12v10"/></svg>'
};

/* ========================================
   NAVBAR SCROLL EFFECT
======================================== */
const RESTAURANT_CONTACT_NUMBER = '39054329448';
const WHATSAPP_BASE_URL = `https://wa.me/${RESTAURANT_CONTACT_NUMBER}`;
const DELIVERY_FEE = 2.50;

function buildWhatsAppUrl(message = '') {
    return message ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE_URL;
}

function formatPrice(value) {
    return `€${Number(value).toFixed(2).replace('.', ',')}`;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeSearchText(value) {
    return String(value ?? '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function applySiteLogo() {
    if (!siteAssets.logo) return;
    document.querySelectorAll('.logo-icon').forEach(icon => {
        const img = document.createElement('img');
        img.src = siteAssets.logo;
        img.alt = 'Al Ponte di Schiavonia';
        img.className = 'logo-img';
        icon.replaceWith(img);
    });
}

function applyHeroImage() {
    if (!siteAssets.hero) return;
    const hero = document.querySelector('.hero[data-asset="hero"]');
    if (!hero) return;
    hero.style.backgroundImage = `
        linear-gradient(90deg, rgba(26, 17, 15, 0.86) 0%, rgba(79, 25, 20, 0.68) 45%, rgba(26, 17, 15, 0.3) 100%),
        url('${siteAssets.hero}')
    `;
}

function applyAboutImage() {
    if (!siteAssets.about) return;
    const placeholder = document.querySelector('.about-image-placeholder');
    if (!placeholder) return;
    const img = document.createElement('img');
    img.src = siteAssets.about;
    img.alt = 'Al Ponte di Schiavonia';
    img.loading = 'lazy';
    placeholder.replaceWith(img);
}

function getMenuImageHtml(category, itemName) {
    const menuImage = siteAssets.menu?.[category];
    if (menuImage) {
        return `<div class="menu-item-image"><img src="${escapeHtml(menuImage)}" alt="${escapeHtml(itemName)}" loading="lazy"></div>`;
    }
    const icon = categoryIcons[category] || categoryIcons.pizze;
    return `<div class="menu-item-image"><div class="menu-item-placeholder" data-category="${escapeHtml(category)}">${icon}</div></div>`;
}

applySiteLogo();
applyHeroImage();
applyAboutImage();

const icons = {
    menu: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3v18"/><path d="M8 3v18"/><path d="M4 9h4"/><path d="M16 3c2 2 3 4.5 3 7s-1 5-3 7v4"/></svg>',
    scooter: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M9 17h5l2-6h-4l-2-4h3"/><path d="M5 11h4"/></svg>',
    phone: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L9 10.67a16 16 0 0 0 4.33 4.33l1.24-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z"/></svg>',
    message: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    home: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
    pin: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    pizza: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21 3 3c6 0 12 3 18 9l-9 9z"/><circle cx="10" cy="9" r="1"/><circle cx="13" cy="14" r="1"/><path d="M6.5 10.5c2-1 4-1 6 0"/></svg>',
    cart: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    wine: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3h8l-1 8a4 4 0 0 1-6 0L8 3z"/><path d="M12 14v7"/><path d="M9 21h6"/></svg>'
};

const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ========================================
   MOBILE MENU
======================================== */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

/* ========================================
   MOBILE QUICK ACTIONS
======================================== */
function createMobileQuickActions() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const isActive = page => currentPage === page ? ' class="active-action"' : '';
    const quickActions = document.createElement('nav');
    quickActions.className = 'mobile-quick-actions';
    quickActions.setAttribute('aria-label', 'Azioni rapide');
    quickActions.innerHTML = `
        <a href="menu.html"${isActive('menu.html')}>
            <span>${icons.menu}</span>
            <strong>Menu</strong>
        </a>
        <a href="ordina.html"${isActive('ordina.html')}>
            <span>${icons.scooter}</span>
            <strong>Ordina</strong>
        </a>
        <a href="tel:+39054329448">
            <span>${icons.phone}</span>
            <strong>Chiama</strong>
        </a>
        <a href="${WHATSAPP_BASE_URL}" target="_blank" rel="noopener">
            <span>${icons.message}</span>
            <strong>WhatsApp</strong>
        </a>
    `;
    document.body.appendChild(quickActions);
}

createMobileQuickActions();

/* ========================================
   THEME TOGGLE
======================================== */
function createThemeToggle() {
    const navContainer = document.querySelector('.nav-container');
    const menuButton = document.querySelector('.mobile-menu-btn');
    if (!navContainer || document.querySelector('.theme-toggle')) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }

    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Cambia tema');
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    `;
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    navContainer.insertBefore(button, menuButton || null);
}

createThemeToggle();

/* ========================================
   HERO PARALLAX
======================================== */
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    window.addEventListener('scroll', () => {
        const offset = Math.min(window.scrollY * 0.12, 42);
        heroContent.style.setProperty('--hero-y', `${offset}px`);
    }, { passive: true });
}

/* ========================================
   GALLERY LIGHTBOX
======================================== */
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');
    if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxCounter) return;

    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;

    function updateLightbox(index) {
        currentIndex = (index + galleryImages.length) % galleryImages.length;
        const image = galleryImages[currentIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.alt;
        lightboxCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    }

    function openLightbox(index) {
        updateLightbox(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    galleryImages.forEach((image, index) => {
        image.parentElement.setAttribute('tabindex', '0');
        image.parentElement.setAttribute('role', 'button');
        image.parentElement.addEventListener('click', () => openLightbox(index));
        image.parentElement.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(index);
            }
        });
    });

    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', () => updateLightbox(currentIndex - 1));
    nextBtn?.addEventListener('click', () => updateLightbox(currentIndex + 1));
    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', event => {
        if (!lightbox.classList.contains('active')) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
        if (event.key === 'ArrowRight') updateLightbox(currentIndex + 1);
    });
}

initGalleryLightbox();

/* ========================================
   SCROLL ANIMATIONS (Intersection Observer)
======================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observer = null;

if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
} else {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
    });
}

/* ========================================
   MENU DATA - COMPLETO DA JSON
======================================== */
const menuData = {
    antipasti: [
        {
            name: "Tartare di Controfiletto Irlandese con Senape al Miele",
            price: 12.00,
            description: "Carne cruda di controfiletto di manzo irlandese, tagliata a coltello, con cubetti di frutta fresca e senape al miele.",
            ingredients: "Controfiletto di manzo irlandese, Frutta fresca, Senape al miele",
            allergens: ["Senape"]
        },
        {
            name: "Acciughe del Cantabrico e Burrata",
            price: 11.00,
            description: "Acciughe del Mar Cantabrico con cremosità della Burrata, pane croccante e burro.",
            ingredients: "Acciughe del Mar Cantabrico, Burrata, Pane croccante, Burro",
            allergens: ["Pesce", "Latte"]
        },
        {
            name: "Bruciatini",
            price: 8.00,
            description: "Piatto tipico romagnolo: radicchio fresco e pancetta cotta in padella con aceto balsamico.",
            ingredients: "Radicchio fresco, Pancetta, Aceto balsamico",
            allergens: []
        },
        {
            name: "Flan di Zucca e Porri su Crema di Gorgonzola",
            price: 8.00,
            description: "Polpa di zucca e porri su crema di Gorgonzola dal sapore intenso e cremoso.",
            ingredients: "Zucca, Porri, Gorgonzola",
            allergens: ["Latte"]
        },
        {
            name: "Selezione di Affettati Tipici con Piadina",
            price: 10.00,
            description: "Salame, prosciutto di Parma, pancetta, mortadella e piadina romagnola calda.",
            ingredients: "Salame, Prosciutto di Parma, Pancetta, Mortadella, Piadina",
            allergens: ["Glutine", "Latte"]
        },
        {
            name: "Degustazione Formaggi DOP con Piadina",
            price: 10.00,
            description: "Fossa di Sogliano DOP, Squacquerone DOP, Scoparolo, Pecorino Romagnolo e piadina.",
            ingredients: "Pecorino, Scoparolo, Fossa di Sogliano, Squacquerone DOP, Piadina",
            allergens: ["Glutine", "Latte"]
        },
        {
            name: "Cozze alla Tarantina",
            price: 12.00,
            description: "Cozze del Mediterraneo con salsa di pomodoro, aglio, prezzemolo e peperoncino.",
            ingredients: "Cozze, Pomodoro, Aglio, Prezzemolo",
            allergens: ["Molluschi"]
        }
    ],
    primi: [
        {
            name: "Tagliatelle al Ragù della Nonna Franca",
            price: 10.00,
            description: "Tagliatelle fatte in casa con ragù lento di carne macinata, soffritto e pomodoro.",
            ingredients: "Sedano, Cipolla, Pasta fresca all'uovo, Carne di manzo e maiale, Carota",
            allergens: ["Sedano", "Glutine", "Uova"]
        },
        {
            name: "Cappelletti al Crudo di Parma e Pesto di Rucola",
            price: 12.00,
            description: "Pasta ripiena con prosciutto crudo, pomodorini ciliegini e pesto di rucola.",
            ingredients: "Prosciutto crudo, Farina, Pasta fresca all'uovo, Grana, Carne bollito",
            allergens: ["Glutine", "Uova", "Latte"]
        },
        {
            name: "Cappelletti al Ragù della Nonna Franca",
            price: 12.00,
            description: "Pasta ripiena tipica romagnola servita con ragù della tradizione.",
            ingredients: "Grana Padano, Ricotta, Uova, Farina di tipo 1, Maiale, Sale, Pollo, Pepe",
            allergens: ["Sedano", "Glutine", "Uova", "Latte"]
        },
        {
            name: "Tortelli di Ricotta e Spinaci con Guanciale",
            price: 12.00,
            description: "Con guanciale croccante, salvia aromatica e crema di burro chiarificato.",
            ingredients: "Guanciale, Pasta fresca all'uovo, Farina, Burro, Salvia",
            allergens: ["Glutine", "Uova", "Latte"]
        },
        {
            name: "Strozzapreti ai Porcini e Pecorino di Fossa",
            price: 14.00,
            description: "Strozzapreti con funghi porcini e scaglie di pecorino di fossa di Sogliano.",
            ingredients: "Porcini, Pecorino di Fossa di Sogliano, Farina di tipo 1",
            allergens: ["Glutine"]
        },
        {
            name: "Gnocchetti alle Vongole su Crema di Zucchine",
            price: 14.00,
            description: "Gnocchetti di patate fatti in casa con vongole fresche, crema di zucchine e datterini.",
            ingredients: "Vongole, Zucchine, Aglio, Pasta fresca all'uovo, Pomodorini Ciliegino",
            allergens: ["Cereali", "Molluschi"]
        },
        {
            name: "Tagliolini allo Scoglio",
            price: 17.00,
            description: "Frutti di mare misti: seppia, gamberi, polpo, cozze e vongole.",
            ingredients: "Seppia, Gamberi, Polpo, Pasta fresca all'uovo, Cozze, Vongole, Aglio, Pomodoro, Prezzemolo",
            allergens: ["Sedano", "Glutine", "Crostacei", "Pesce", "Uova", "Molluschi"]
        },
        {
            name: "Lasagne della Tradizione Romagnola",
            price: 12.00,
            description: "Sfoglia all'uovo, ragù di carne, besciamella e Parmigiano Reggiano.",
            ingredients: "Sfoglia all'uovo, Ragù di carne, Besciamella, Parmigiano Reggiano",
            allergens: ["Sedano", "Uova", "Latte"]
        }
    ],
    pizze: [
        { name: "Marinara", price: 6.00, ingredients: "Pomodoro, Prezzemolo, Aglio", allergens: ["Glutine"] },
        { name: "Margherita", price: 7.00, ingredients: "Pomodoro, Fior di Latte", allergens: ["Glutine", "Latte"] },
        { name: "Biancaneve", price: 7.00, ingredients: "Fior di Latte", allergens: ["Glutine", "Latte"] },
        { name: "Napoli", price: 8.00, ingredients: "Fior di Latte, Pomodoro, Acciughe, Origano", allergens: ["Glutine", "Pesce", "Latte"] },
        { name: "Romana", price: 8.50, ingredients: "Fior di Latte, Pomodoro, Acciughe, Capperi", allergens: ["Glutine", "Latte"] },
        { name: "Diavola", price: 9.00, ingredients: "Capperi, Fior di Latte, Pomodoro, Salame Piccante, Acciughe", allergens: ["Glutine", "Pesce", "Latte"] },
        { name: "Trevisana", price: 9.00, ingredients: "", allergens: ["Glutine", "Latte"] },
        { name: "Verdure Grigliate", price: 9.00, ingredients: "Fior di Latte, Pomodoro, Peperoni, Zucchine, Melanzane", allergens: [] },
        { name: "Ghiotta", price: 9.50, ingredients: "Fior di Latte, Pomodoro, Scamorza, Salame Piccante, Cipolla", allergens: ["Glutine", "Latte"] },
        { name: "Parmigiana", price: 9.50, ingredients: "Fior di Latte, Pomodoro, Melanzane, Grana Padano", allergens: ["Glutine", "Latte"] },
        { name: "Americana", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Wurstel, Patate Fritte", allergens: ["Glutine", "Latte"] },
        { name: "Bomba", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Salame Piccante, Fagioli, Salsiccia, Cipolla", allergens: [] },
        { name: "Mandolino", price: 10.00, ingredients: "Mozzarella di Bufala DOP, Pomodoro, Olive Taggiasche, Origano", allergens: ["Glutine", "Latte"] },
        { name: "Saporita", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Salame Piccante, Salsiccia, Wurstel", allergens: [] },
        { name: "Vegetariana", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Grana Padano, Verdure Fresche", allergens: ["Glutine", "Latte"] },
        { name: "Vigliacca", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Gorgonzola, Pancetta, Spinaci", allergens: [] },
        { name: "Vulcano", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Wurstel, Salame Piccante, Funghi Champignon, Pancetta", allergens: ["Glutine", "Latte"] },
        { name: "Boscaiola", price: 10.50, ingredients: "Fior di Latte, Pomodoro, Funghi Porcini, Pancetta, Funghi Champignon", allergens: ["Glutine", "Latte"] },
        { name: "Messicana", price: 10.50, ingredients: "Fior di Latte, Pomodoro, Salame Piccante, Pancetta, Fagioli, Peperoncino", allergens: ["Glutine", "Latte"] },
        { name: "Raffinata", price: 10.00, ingredients: "Fior di Latte, Pomodoro, Prosciutto Crudo di Parma, Grana Padano, Rucola", allergens: ["Glutine", "Latte"] },
        { name: "Rustica", price: 10.50, ingredients: "Fior di Latte, Pomodoro, Gorgonzola, Funghi Porcini, Rucola", allergens: ["Glutine", "Latte"] },
        { name: "Stravagante", price: 10.50, ingredients: "", allergens: ["Glutine", "Latte"] },
        { name: "Tirolese", price: 11.00, ingredients: "", allergens: ["Glutine", "Latte"] },
        { name: "Fuoco del Vesuvio", price: 11.00, ingredients: "Fior di Latte, Pomodoro, Peperoni, Rucola, Salame Piccante, Olive Taggiasche", allergens: ["Glutine", "Latte"] },
        { name: "Sfiziosa", price: 11.00, ingredients: "Fior di Latte, Pomodoro, Scamorza, Funghi Porcini, Speck", allergens: [] },
        { name: "Viking", price: 11.50, ingredients: "Fior di Latte, Pomodoro, Funghi Porcini, Salsiccia, Cipolla, Olive Taggiasche", allergens: ["Glutine", "Latte"] },
        { name: "Capricciosa", price: 12.00, ingredients: "Pomodoro, Prosciutto Cotto, Fior di Latte, Olive Taggiasche, Carciofi, Salsiccia, Funghi Champignon", allergens: ["Glutine", "Latte"] },
        { name: "Misteriosa", price: 12.00, ingredients: "Fior di Latte, Pomodoro, Salsiccia, Grana Padano, Rucola, Funghi Porcini, Zucchine", allergens: [] },
        { name: "Ricca", price: 12.50, ingredients: "Fior di Latte, Mozzarella di Bufala, Gorgonzola, Scamorza, Prosciutto Crudo di Parma", allergens: [] },
        { name: "Aromatica", price: 13.00, ingredients: "Mozzarella Fiordilatte, Burrata, Prosciutto Crudo di Parma", allergens: [] },
        { name: "Delicius", price: 14.00, ingredients: "Mozzarella Fiordilatte, Burrata, Acciughe del Cantabrico, Olive Taggiasche", allergens: ["Glutine", "Pesce", "Latte"] },
        { name: "Biscara", price: 11.00, ingredients: "Mozzarella di Bufala DOP, Pomodoro, Funghi Porcini, Salsiccia", allergens: ["Glutine", "Latte"] }
    ],
    secondi: [
        {
            name: "Galletto a Bassa Temperatura agli Agrumi",
            price: 15.00,
            description: "Galletto cotto a bassa temperatura con salsa agli agrumi e erbette al vapore.",
            ingredients: "Galletto, Agrumi, Spinaci, Salsa di soia",
            allergens: ["Soia"]
        },
        {
            name: "Tagliata di Controfiletto Argentino al Sale di Cervia",
            price: 22.00,
            description: "Controfiletto argentino cotto con sale di Cervia e patate rustiche al forno.",
            ingredients: "Controfiletto di manzo, Aglio, Rosmarino, Patata",
            allergens: []
        },
        {
            name: "Baccalà Mantecato su Crema di Cipolle al Nero di Seppia",
            price: 15.00,
            description: "Baccalà mantecato su crema di cipolle al nero di seppia con pesto di pomodori secchi.",
            ingredients: "Baccalà, Cipolle, Nero di seppia, Pomodori secchi",
            allergens: ["Pesce"]
        },
        {
            name: "Filetto di Manzo Angus ai Porcini",
            price: 24.00,
            description: "Filetto di manzo Angus cotto a bassa temperatura con funghi porcini.",
            ingredients: "Filetto di manzo, Aglio, Porcini",
            allergens: []
        },
        {
            name: "Filetto di Manzo Angus al Pepe Rosa",
            price: 19.00,
            description: "Filetto di manzo Angus al pepe rosa con cognac.",
            ingredients: "Filetto di manzo, Cognac, Pepe verde",
            allergens: []
        },
        {
            name: "Polpo Cotto a Bassa Temperatura su Crema di Patate",
            price: 15.00,
            description: "Polpo selezionato cotto a bassa temperatura su crema di patate e prezzemolo.",
            ingredients: "Polpo, Scalogno, Patate, Prezzemolo, Sedano, Carote, Cipolla, Olio",
            allergens: ["Sedano", "Pesce"]
        },
        {
            name: "Fritto di Mare e Verdure Croccanti",
            price: 16.00,
            description: "Mazzancolle, anelli di calamari, alici, melanzane e zucchine croccanti.",
            ingredients: "Mazzancolle, Calamari, Melanzane, Zucchine",
            allergens: ["Glutine", "Crostacei", "Pesce", "Molluschi"]
        },
        {
            name: "Grigliata di Carne con Patate al Forno",
            price: 18.00,
            description: "Salsiccia, petto di pollo, lonza, pancetta e patate al forno.",
            ingredients: "Salsiccia, Petto di pollo, Lonza di maiale, Pancetta, Patate al forno",
            allergens: []
        },
        {
            name: "Cotoletta alla Milanese con Patate Fritte",
            price: 15.00,
            description: "Cotoletta alla milanese con patate fritte.",
            ingredients: "Cotoletta, Patate fritte",
            allergens: []
        }
    ],
    contorni: [
        { name: "Patate Fritte", price: 4.50, ingredients: "", allergens: [] },
        { name: "Anelli di Cipolla Fritti", price: 4.50, ingredients: "", allergens: [] },
        { name: "Insalata Mista", price: 5.00, ingredients: "", allergens: [] },
        { name: "Verdure Grigliate", price: 5.00, ingredients: "", allergens: [] },
        { name: "Melanzane e Zucchine Fritte", price: 5.00, ingredients: "", allergens: [] }
    ],
    dessert: [
        { name: "Tiramisù", price: 5.00, ingredients: "Mascarpone, Uova, Caffè", allergens: ["Uova", "Latte"] },
        { name: "Tortino di Cioccolato con Cuore Fondente", price: 5.00, ingredients: "", allergens: [] },
        { name: "Mascarpone", price: 5.00, ingredients: "Mascarpone, Uova, Zucchero", allergens: ["Uova", "Latte"] },
        { name: "Crema Catalana", price: 5.00, ingredients: "", allergens: [] }
    ],
    birre: [
        { name: "Beck's (Tedesca Bionda) - 33 cl", price: 4.00 },
        { name: "Ceres - 33 cl (7.7% Vol)", price: 4.50 },
        { name: "Moretti Filtrata a Freddo - 55 cl", price: 5.00 },
        { name: "Ichnusa non Filtrata - 50 cl", price: 5.00 },
        { name: "Messina (Bionda Italiana) - 50 cl", price: 5.00 },
        { name: "Erdinger - 50 cl (5.3% Vol)", price: 5.00 },
        { name: "Paulaner - 50 cl", price: 5.00 },
        { name: "Leffe Blonde - 75 cl (6.6% Vol)", price: 10.00 },
        { name: "Leffe Rouge - 75 cl (6.6% Vol)", price: 10.00 }
    ],
    vini_rossi: [
        { name: "Sangiovese di Romagna 'Notturno' DOC - Tenuta Drei Donà (75cl)", price: 22.00 },
        { name: "Sangiovese Superiore 'Prugneto' DOC - Poderi Dal Nespoli (75cl)", price: 20.00 },
        { name: "Sangiovese Superiore 'Ceregio Rosso' DOC - Fattoria Zerbina (75cl)", price: 15.00 }
    ],
    vini_bianchi: [
        { name: "Gewürztraminer Trentino DOC - Mezzacorona (75cl)", price: 17.00 },
        { name: "Falanghina Del Sannio DOC - Feudi Di San Gregorio (75cl)", price: 20.00 }
    ],
    bevande: [
        { name: "Acqua Naturale Pejo in Vetro - 75 cl", price: 3.00 },
        { name: "Acqua Gassata Pejo in Vetro - 75 cl", price: 3.00 },
        { name: "Coca Cola in Vetro - 33 cl", price: 3.50 },
        { name: "Fanta in PET - 45 cl", price: 3.50 },
        { name: "Coca Cola in Vetro - 1 lt", price: 8.00 }
    ]
};

/* ========================================
   PIZZA CUSTOMIZATION DATA
======================================== */
const pizzaExtras = [
    { id: 'bufala', name: 'Mozzarella di Bufala DOP', price: 2.50 },
    { id: 'burrata', name: 'Burrata', price: 3.00 },
    { id: 'prosciutto_crudo', name: 'Prosciutto Crudo di Parma', price: 2.50 },
    { id: 'porcini', name: 'Funghi Porcini', price: 3.00 },
    { id: 'salsiccia', name: 'Salsiccia', price: 1.50 },
    { id: 'crudo_24_mesi', name: 'Crudo di Parma 24 mesi', price: 4.00 },
    { id: 'salame_piccante', name: 'Salame Piccante', price: 1.50 },
    { id: 'gorgonzola', name: 'Gorgonzola', price: 1.50 },
    { id: 'scamorza', name: 'Scamorza Affumicata', price: 1.50 },
    { id: 'olive', name: 'Olive Taggiasche', price: 1.00 },
    { id: 'rucola', name: 'Rucola Fresca', price: 1.00 },
    { id: 'pesto', name: 'Pesto alla Genovese', price: 1.50 },
    { id: 'nduja', name: "'Nduja Piccante", price: 2.00 },
    { id: 'truffle', name: 'Olio al Tartufo', price: 3.00 }
];

let currentPizza = null;
let selectedExtras = [];
let removedIngredients = [];
let pizzaNotes = '';

/* ========================================
   MODALE PERSONALIZZAZIONE PIZZA
======================================== */
function createPizzaModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'pizzaModal';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3 id="modalPizzaName">Personalizza la tua Pizza</h3>
                <button class="modal-close" onclick="closePizzaModal()">✕</button>
            </div>
            <div class="modal-body">
                <!-- EXTRA -->
                <div class="modal-section">
                    <div class="modal-section-title">${icons.pizza} Aggiunte Extra</div>
                    <div class="extra-list" id="extraList">
                        ${pizzaExtras.map(e => `
                            <label class="extra-item" data-extra="${e.id}">
                                <input type="checkbox" name="extra" value="${e.id}">
                                <div class="extra-info">
                                    <div class="extra-checkbox">✓</div>
                                    <span class="extra-name">${e.name}</span>
                                </div>
                                <span class="extra-price">+€${e.price.toFixed(2)}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>

                <!-- RIMOZIONI INGREDIENTI -->
                <div class="modal-section" id="removeSection">
                    <div class="modal-section-title">Rimuovi Ingredienti</div>
                    <div class="remove-list" id="removeList"></div>
                </div>

                <!-- NOTE -->
                <div class="modal-section">
                    <div class="modal-section-title">Note Speciali</div>
                    <div class="modal-notes">
                        <textarea id="pizzaNotes" placeholder="Es: senza cipolla, ben cotta, impasto sottile..."></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-total">
                    <span>Totale</span>
                    <span class="modal-total-price" id="modalTotal">€7,00</span>
                </div>
                <button class="btn-add-custom" onclick="addCustomPizzaToCart()">
                    ${icons.cart} Aggiungi al Carrello
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePizzaModal();
    });
}

function openPizzaModal(pizzaName, pizzaPrice, pizzaIngredients) {
    currentPizza = { name: pizzaName, price: parseFloat(pizzaPrice), ingredients: pizzaIngredients };
    selectedExtras = [];
    removedIngredients = [];
    pizzaNotes = '';

    document.getElementById('modalPizzaName').innerHTML = `${icons.pizza} ${escapeHtml(pizzaName)}`;
    document.getElementById('pizzaNotes').value = '';

    document.querySelectorAll('.extra-item').forEach(item => {
        item.classList.remove('selected');
        item.querySelector('input').checked = false;
    });

    const removeList = document.getElementById('removeList');
    const removeSection = document.getElementById('removeSection');
    
    if (pizzaIngredients && pizzaIngredients.length > 0) {
        removeSection.style.display = 'block';
        removeList.innerHTML = pizzaIngredients.map(ing => `
            <label class="remove-chip" data-ingredient="${escapeHtml(ing)}">
                <input type="checkbox" name="remove" value="${escapeHtml(ing)}">
                ✕ ${escapeHtml(ing)}
            </label>
        `).join('');

        removeList.querySelectorAll('.remove-chip').forEach(chip => {
            chip.addEventListener('click', (event) => {
                event.preventDefault();
                const checkbox = chip.querySelector('input');
                const selected = !checkbox.checked;
                checkbox.checked = selected;
                chip.classList.toggle('selected', selected);
                const ing = chip.dataset.ingredient;
                if (selected) {
                    if (!removedIngredients.includes(ing)) {
                        removedIngredients.push(ing);
                    }
                } else {
                    removedIngredients = removedIngredients.filter(i => i !== ing);
                }
            });
        });
    } else {
        removeSection.style.display = 'none';
    }

    document.querySelectorAll('.extra-item').forEach(item => {
        item.onclick = function(e) {
            e.preventDefault();
            const checkbox = this.querySelector('input');
            const selected = !checkbox.checked;
            checkbox.checked = selected;
            this.classList.toggle('selected', selected);
            const extraId = this.dataset.extra;
            if (selected) {
                if (!selectedExtras.includes(extraId)) {
                    selectedExtras.push(extraId);
                }
            } else {
                selectedExtras = selectedExtras.filter(ex => ex !== extraId);
            }
            updateModalTotal();
        };
    });

    document.getElementById('pizzaNotes').oninput = function() {
        pizzaNotes = this.value;
    };

    updateModalTotal();

    const modal = document.getElementById('pizzaModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePizzaModal() {
    const modal = document.getElementById('pizzaModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalTotal() {
    if (!currentPizza) return;

    let total = currentPizza.price;

    selectedExtras.forEach(extraId => {
        const extra = pizzaExtras.find(e => e.id === extraId);
        if (extra) total += extra.price;
    });

    document.getElementById('modalTotal').textContent = formatPrice(total);
}

function addCustomPizzaToCart() {
    if (!currentPizza) return;

    let total = currentPizza.price;

    const extrasNames = [];
    selectedExtras.forEach(extraId => {
        const extra = pizzaExtras.find(e => e.id === extraId);
        if (extra) {
            total += extra.price;
            extrasNames.push(extra.name);
        }
    });

    let customName = currentPizza.name;

    let customDetails = [];
    if (extrasNames.length > 0) customDetails.push(`+ ${extrasNames.join(', ')}`);
    if (removedIngredients.length > 0) customDetails.push(`Senza: ${removedIngredients.join(', ')}`);
    if (pizzaNotes) customDetails.push(`Note: ${pizzaNotes}`);

    cart.addItem(customName, total, customDetails.join(' | ') || null);
    closePizzaModal();
}

/* ========================================
   CART SYSTEM (con localStorage)
======================================== */
class Cart {
    constructor() {
        this.items = this.load();
        this.init();
    }
    
    init() {
        this.render();
        this.updateUI();
        this.bindEvents();
    }
    
    addItem(name, price, customDetails = null) {
        const existing = this.items.find(i => i.name === name && i.customDetails === customDetails);
        if (existing) {
            existing.qty++;
        } else {
            this.items.push({ name, price: parseFloat(price), qty: 1, customDetails });
        }
        this.save();
        this.render();
        this.updateUI();
        this.showNotification(`✓ ${name} aggiunto`);
    }
    
    load() {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.warn('Carrello non leggibile, riparto da vuoto.', error);
            return [];
        }
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.save();
        this.render();
        this.updateUI();
    }
    
    updateQty(index, delta) {
        const item = this.items[index];
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                this.removeItem(index);
                return;
            }
            this.save();
            this.render();
            this.updateUI();
        }
    }
    
    clear() {
        this.items = [];
        this.save();
        this.render();
        this.updateUI();
    }
    
    save() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.items));
        } catch (error) {
            console.warn('Impossibile salvare il carrello.', error);
        }
    }
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    getDeliveryFee() {
        const deliveryMode = document.querySelector('input[name="mode"][value="consegna"]');
        return deliveryMode && deliveryMode.checked && this.getCount() > 0 ? DELIVERY_FEE : 0;
    }
    
    getCount() {
        return this.items.reduce((sum, item) => sum + item.qty, 0);
    }
    
    render() {
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;
        
        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    <p>Il carrello è vuoto.<br>Aggiungi qualcosa di buono!</p>
                </div>
            `;
            return;
        }
        
        cartItems.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    ${item.customDetails ? `<div class="cart-item-custom">${escapeHtml(item.customDetails)}</div>` : ''}
                    <div class="cart-item-price">${formatPrice(item.price)} cad.</div>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" type="button" data-cart-index="${index}" data-cart-delta="-1">−</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="qty-btn" type="button" data-cart-index="${index}" data-cart-delta="1">+</button>
                </div>
            </div>
        `).join('');

        cartItems.querySelectorAll('.qty-btn').forEach(button => {
            button.addEventListener('click', () => {
                this.updateQty(Number(button.dataset.cartIndex), Number(button.dataset.cartDelta));
            });
        });
    }
    
    updateUI() {
        const count = this.getCount();
        const subtotal = this.getTotal();
        const deliveryFee = this.getDeliveryFee();
        const total = subtotal + deliveryFee;
        
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = count;
        
        const floatingCart = document.getElementById('floatingCart');
        if (floatingCart) {
            if (count > 0) {
                floatingCart.classList.add('active');
            } else {
                floatingCart.classList.remove('active');
            }
        }
        
        const subtotalEl = document.getElementById('subtotal');
        const deliveryRow = document.getElementById('deliveryRow');
        const deliveryFeeEl = document.getElementById('deliveryFee');
        const totalEl = document.getElementById('total');
        if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
        if (deliveryRow) deliveryRow.hidden = deliveryFee === 0;
        if (deliveryFeeEl) deliveryFeeEl.textContent = formatPrice(deliveryFee);
        if (totalEl) totalEl.textContent = formatPrice(total);
        
        const submitBtn = document.getElementById('submitOrder');
        if (submitBtn) {
            submitBtn.disabled = count === 0;
        }
    }
    
    showNotification(message) {
        document.querySelectorAll('.cart-notification').forEach(item => item.remove());
        const notif = document.createElement('div');
        notif.className = 'cart-notification';
        notif.innerHTML = `
            <span class="cart-notification-icon">${icons.cart}</span>
            <span>${escapeHtml(message)}</span>
            <a href="ordina.html">Vedi ordine</a>
        `;
        notif.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 2rem;
            max-width: min(360px, calc(100vw - 2rem));
            background: var(--surface);
            color: var(--dark);
            padding: 0.85rem 1rem;
            border-radius: 18px;
            font-size: 0.9rem;
            z-index: 3001;
            box-shadow: 0 18px 48px rgba(0,0,0,0.18);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            animation: slideInRight 0.3s ease;
        `;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.opacity = '0';
            setTimeout(() => notif.remove(), 300);
        }, 2000);
    }
    
    bindEvents() {
        document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.dataset.name;
                const price = btn.dataset.price;
                this.addItem(name, price);
            });
        });
        
        const clearBtn = document.getElementById('clearCart');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('Svuotare il carrello?')) {
                    this.clear();
                }
            });
        }

        const floatingCart = document.getElementById('floatingCart');
        if (floatingCart) {
            floatingCart.addEventListener('click', () => {
                window.location.href = 'ordina.html';
            });
        }
    }
}

const cart = new Cart();
createPizzaModal();

/* ========================================
   ORDER PAGE - Genera items dalle categorie
======================================== */
function createSkeletonCard() {
    return `
        <div class="skeleton-card" aria-hidden="true">
            <div class="skeleton-line title"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-pill"></div>
        </div>
    `;
}

function createSkeletonOrderItem() {
    return `
        <div class="skeleton-order-item" aria-hidden="true">
            <div class="skeleton-line title"></div>
            <div class="skeleton-line short"></div>
        </div>
    `;
}

function showMenuSkeleton() {
    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        menuGrid.setAttribute('aria-busy', 'true');
        menuGrid.innerHTML = Array.from({ length: 8 }, createSkeletonCard).join('');
    }
}

function showOrderSkeleton() {
    ['pizze', 'antipasti', 'primi', 'bevande', 'dessert'].forEach(category => {
        const container = document.getElementById(`${category}-list`);
        if (!container) return;
        container.setAttribute('aria-busy', 'true');
        container.innerHTML = Array.from({ length: 4 }, createSkeletonOrderItem).join('');
    });
}

function renderOrderItems() {
    const categories = ['pizze', 'antipasti', 'primi', 'bevande', 'dessert'];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category}-list`);
        if (!container || !menuData[category]) return;
        container.removeAttribute('aria-busy');
        
        const isPizza = category === 'pizze';
        
        container.innerHTML = menuData[category].map(item => {
            const ingredientsArray = item.ingredients ? item.ingredients.split(', ').filter(i => i.trim()) : [];
            
            if (isPizza) {
                const ingredientsJson = escapeHtml(JSON.stringify(ingredientsArray));
                return `
                    <div class="order-item">
                        <div class="order-item-name">${escapeHtml(item.name)}</div>
                        <div class="order-item-bottom">
                            <span class="order-item-price">${formatPrice(item.price)}</span>
                            <button class="btn-add-small btn-customize-order" type="button" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-ingredients='${ingredientsJson}' aria-label="Personalizza ${escapeHtml(item.name)}">${icons.pizza}</button>
                        </div>
                    </div>
                `;
            }
            
            return `
                <div class="order-item">
                    <div class="order-item-name">${escapeHtml(item.name)}</div>
                    <div class="order-item-bottom">
                        <span class="order-item-price">${formatPrice(item.price)}</span>
                        <button class="btn-add-small" type="button" data-name="${escapeHtml(item.name)}" data-price="${item.price}" aria-label="Aggiungi ${escapeHtml(item.name)}">+</button>
                    </div>
                </div>
            `;
        }).join('');
        
        container.querySelectorAll('.btn-add-small').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-customize-order')) {
                    const name = btn.dataset.name;
                    const price = btn.dataset.price;
                    const ingredients = JSON.parse(btn.dataset.ingredients || '[]');
                    openPizzaModal(name, price, ingredients);
                } else {
                    cart.addItem(btn.dataset.name, btn.dataset.price);
                }
            });
        });
    });
}

if (document.getElementById('pizze-list')) {
    showOrderSkeleton();
    setTimeout(renderOrderItems, 180);
}

/* ========================================
   MENU PAGE - Render Items
======================================== */
function renderMenuItems() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    menuGrid.removeAttribute('aria-busy');
    
    let html = '';
    
    Object.keys(menuData).forEach(category => {
        menuData[category].forEach(item => {
            const allergensHtml = item.allergens && item.allergens.length > 0
                ? `<div class="allergens">${item.allergens.map(a => `<span class="allergen">${escapeHtml(a)}</span>`).join('')}</div>`
                : '';
            
            const descHtml = item.description
                ? `<p>${escapeHtml(item.description)}</p>`
                : (item.ingredients ? `<p>${escapeHtml(item.ingredients)}</p>` : '');
            
            const isPizza = category === 'pizze';
            const ingredientsArray = item.ingredients ? item.ingredients.split(', ').filter(i => i.trim()) : [];
            
            const addBtnHtml = isPizza
                ? `<button class="btn-add-to-cart btn-customize" type="button" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-ingredients='${escapeHtml(JSON.stringify(ingredientsArray))}'>${icons.pizza} Personalizza</button>`
                : `<button class="btn-add-to-cart" type="button" data-name="${escapeHtml(item.name)}" data-price="${item.price}">+ Aggiungi</button>`;
            
            const searchText = normalizeSearchText([
                item.name,
                item.description,
                item.ingredients,
                item.allergens ? item.allergens.join(' ') : '',
                category
            ].join(' '));

            html += `
                <div class="menu-item animate-on-scroll category-${escapeHtml(category)}" data-category="${escapeHtml(category)}" data-search="${escapeHtml(searchText)}">
                    ${getMenuImageHtml(category, item.name)}
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3>${escapeHtml(item.name)}</h3>
                            <span class="price">${formatPrice(item.price)}</span>
                        </div>
                        ${descHtml}
                        ${allergensHtml}
                        ${addBtnHtml}
                    </div>
                </div>
            `;
        });
    });
    
    menuGrid.innerHTML = html;
    
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('btn-customize')) {
                const name = btn.dataset.name;
                const price = btn.dataset.price;
                const ingredients = JSON.parse(btn.dataset.ingredients || '[]');
                openPizzaModal(name, price, ingredients);
            } else {
                cart.addItem(btn.dataset.name, btn.dataset.price);
            }
        });
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (observer) {
            observer.observe(el);
        } else {
            el.classList.add('visible');
        }
    });
}

if (document.getElementById('menu-grid')) {
    showMenuSkeleton();
    setTimeout(renderMenuItems, 180);
}

/* ========================================
   MENU FILTERS
======================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const menuSearch = document.getElementById('menuSearch');
const menuEmpty = document.getElementById('menuEmpty');
let activeMenuCategory = 'all';

function applyMenuFilters(shouldScroll = false) {
    const items = document.querySelectorAll('#menu-grid .menu-item');
    const query = normalizeSearchText(menuSearch ? menuSearch.value : '');
    let visibleCount = 0;

    items.forEach(item => {
        const categoryMatches = activeMenuCategory === 'all' || item.dataset.category === activeMenuCategory;
        const searchMatches = !query || (item.dataset.search || '').includes(query);
        const visible = categoryMatches && searchMatches;
        item.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
    });

    if (menuEmpty) {
        menuEmpty.hidden = visibleCount !== 0;
    }

    if (shouldScroll) {
        const menuGrid = document.getElementById('menu-grid');
        if (menuGrid) {
            const stickyOffset = 180;
            const top = menuGrid.getBoundingClientRect().top + window.scrollY - stickyOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeMenuCategory = btn.dataset.category;
        applyMenuFilters(true);
    });
});

if (menuSearch) {
    menuSearch.addEventListener('input', () => {
        applyMenuFilters(false);
    });
}

/* ========================================
   ORDER FORM - Indirizzo condizionale
======================================== */
const modeRadios = document.querySelectorAll('input[name="mode"]');
const addressField = document.getElementById('addressField');

modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (!addressField) return;

        if (e.target.value === 'consegna') {
            addressField.style.display = 'block';
            addressField.querySelector('input').required = true;
        } else {
            addressField.style.display = 'none';
            addressField.querySelector('input').required = false;
        }
        cart.updateUI();
    });
});

/* ========================================
   ORDER SUBMIT - Invio WhatsApp
======================================== */
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.getCount() === 0) {
            alert('Aggiungi almeno un prodotto al carrello!');
            return;
        }
        
        const formData = new FormData(orderForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const mode = formData.get('mode');
        const time = formData.get('time');
        const address = formData.get('address') || '-';
        const notes = formData.get('notes') || '-';
        const deliveryFee = cart.getDeliveryFee();
        const totalWithDelivery = cart.getTotal() + deliveryFee;
        
        let message = `*NUOVO ORDINE - Al Ponte di Schiavonia*\n\n`;
        message += `*Cliente:* ${name}\n`;
        message += `*Telefono:* ${phone}\n`;
        message += `*Modalità:* ${mode === 'ritiro' ? 'Ritiro in loco' : 'Consegna a domicilio'}\n`;
        message += `*Orario preferito:* ${time}\n`;
        if (mode === 'consegna') {
            message += `*Indirizzo:* ${address}\n`;
            message += `*Consegna:* ${formatPrice(deliveryFee)}\n`;
        }
        message += `\n*ORDINE:*\n`;
        
        cart.items.forEach(item => {
            message += `• ${item.qty}x ${item.name} = €${(item.price * item.qty).toFixed(2)}\n`;
            if (item.customDetails) {
                message += `  └ ${item.customDetails}\n`;
            }
        });
        
        message += `\n*TOTALE: ${formatPrice(totalWithDelivery)}*`;
        if (notes !== '-') {
            message += `\n\n*Note:* ${notes}`;
        }
        
        const whatsappUrl = buildWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    });
}

/* ========================================
   NOTIFICATION STYLE
======================================== */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

/* ========================================
   PWA SERVICE WORKER REGISTRATION
======================================== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✓ Service Worker registrato'))
            .catch(err => console.log('✗ SW error:', err));
    });
}
