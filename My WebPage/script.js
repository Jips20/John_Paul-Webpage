/* =========================================================
   Nenita's Bayad Latur Services
   Full Cleaned JavaScript System
   Author: ChatGPT
   Version: 1.0
   ========================================================= */

// ================== UTILITIES ==================
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

// ================== MODAL SYSTEM ==================
const modalContent = {
    about: `
        <strong>Nenita's Bayad Latur Services:</strong><br><br> &nbsp;&nbsp;&nbsp;&nbsp;Began in <strong>2006</strong> as a small neighborhood mini sari-sari store in Barangay Kristong Hari, Manila. Initially, it catered to the daily needs of the local community, providing essential goods, snacks, and household items.<br><br> &nbsp;&nbsp;&nbsp;&nbsp;Over time, the store evolved to meet the changing demands of the community. In response to the rise of digital services, Nenita's Bayad Latur Services expanded its offerings to include mobile load top-ups, bills payment, and GCash in/out transactions. This evolution transformed the store into a trusted one-stop shop for both daily needs and modern payment solutions.<br><br> &nbsp;&nbsp;&nbsp;&nbsp;Today, Nenita's Bayad Latur Services continues to serve the community with a focus on <strong>convenience, reliability, and friendliness</strong>, maintaining its roots as a neighborhood store while embracing modern financial services.
    `,
    contact: "📞 0912-345-6789<br>📧 nenitaservices@email.com",
    location: `
    <h3>📍 Our Location</h3>
    <p>82 U, Barangay Kristong Hari, Quezon City, Metro Manila</p>

    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7721.10400230007!2d121.02682953804187!3d14.624578224731842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b64a9784ad5b%3A0x6133c7e147a57c8e!2sKristong%20Hari%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1774973299508!5m2!1sen!2sph"
        width="100%" 
        height="300"
        style="border:0; border-radius:10px;"
        allowfullscreen=""
        loading="lazy">
    </iframe>
`
};

function openModal(type) {
    const modal = $('#modal');
    const text = $('#modal-text');
    text.innerHTML = modalContent[type] || '';
    modal.style.display = 'flex';
    modal.classList.add('modal-animate');
}

function closeModal() {
    const modal = $('#modal');
    modal.classList.remove('modal-animate');
    setTimeout(() => modal.style.display = 'none', 300);
}

// ================== FADE-IN SYSTEM ==================
function showFades() {
    $$('.fade').forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100 || window.innerWidth <= 768) {
            setTimeout(() => el.classList.add('show'), i * 80);
        }
    });
}

// ================== HERO PARALLAX ==================
function parallaxHero() {
    const hero = $('.hero');
    if (!hero) return;
    hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
}

// ================== HERO TYPING EFFECT ==================
function typeHeroText() {
    const heroHeading = $('.hero h1');
    if (!heroHeading) return;

    const text = "Welcome to Nenita's Bayad Latur Services!";
    let i = 0;
    heroHeading.textContent = '';

    const typing = setInterval(() => {
        heroHeading.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(typing);
    }, 70);
}

// ================== NAVBAR SCROLL EFFECT ==================
function navbarScroll() {
    const navbar = $('.navbar');
    if (!navbar) return;
    window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
}

// ================== PRODUCT DATABASE ==================
const products = {

    powder_milk: [
        { name: "Birch Tree Fortified Choco", image: "birch-tree.jpg", desc: "Chocolate milk powder", price: 10 },
        { name: "Bear Brand Fortified", image: "bear-brand.jpg", desc: "Fortified milk", price: 11 },
        { name: "Milo Activ-Go Choco", image: "milo.jpg", desc: "Energy chocolate drink", price: 9 }
    ],

    powder_detergents: [
        { name: "Surf Cherry Blossom", image: "Powder Detergent final.png", desc: "Floral scent detergent", price: 7 },
        { name: "Surf Rose", image: "surf-rose.jpg", desc: "Rose scent detergent", price: 7 },
        { name: "Surf Sun Fresh", image: "surf-sun.jpg", desc: "Fresh scent detergent", price: 7 },
        { name: "Surf Kalamansi", image: "surf-kalamansi.jpg", desc: "Citrus scent detergent", price: 7 },
        { name: "Ariel Sunrise", image: "ariel-sunrise.jpg", desc: "Power clean detergent", price: 14 },
        { name: "Tide", image: "tide.jpg", desc: "Strong stain remover", price: 15 },
        { name: "Tide with Downy Garden Bloom", image: "tide-downy-garden.jpg", desc: "Soft + clean", price: 15 },
        { name: "Tide with Downy Perfume Fantasy", image: "tide-downy-fantasy.jpg", desc: "Perfume scent", price: 15 }
    ],

    ready_drink_juice: [
        { name: "BIG 250 Apple", image: "big-apple.jpg", desc: "Apple juice", price: 11 },
        { name: "BIG 250 Grape", image: "big-grape.jpg", desc: "Grape juice", price: 11 },
        { name: "BIG 250 Mango", image: "big-mango.jpg", desc: "Mango juice", price: 11 },
        { name: "BIG 250 Orange", image: "big-orange.jpg", desc: "Orange juice", price: 11 }
    ],

    alcohol: [
        { name: "Ginebra Gin Round", image: "ginebra.jpg", desc: "Local gin", price: 68 },
        { name: "Alfonso 1 Light Brandy", image: "alfonso.jpg", desc: "Premium brandy", price: 279 },
        { name: "Emperador Light Litro (1L)", image: "emperador.jpg", desc: "Brandy 1 liter", price: 183 }
    ],

    cigarettes: [
        { name: "Winston Red", image: "winston.jpg", desc: "20 sticks", price: 182 },
        { name: "Fortune Green", image: "fortune.jpg", desc: "Green", price: 147 },
    ],

    coffee: [
        { name: "Nescafe Creamy White 3in1", image: "nescafe-creamy.jpg", desc: "3in1 coffee", price: 14 },
        { name: "Nescafe Original 3in1", image: "nescafe-original.jpg", desc: "3in1 coffee", price: 14 },
        { name: "Great Taste Chocolate 3in1", image: "gt-choco.jpg", desc: "3in1 coffee", price: 13 },
        { name: "Great Taste White 3in1", image: "gt-white.jpg", desc: "3in1 coffee", price: 12 },
        { name: "Kopiko Black 3in1", image: "kopiko-black.jpg", desc: "3in1 coffee", price: 13 },
        { name: "Kopiko Brown 3in1", image: "kopiko-brown.jpg", desc: "3in1 coffee", price: 13 },
        { name: "Kopiko Blanca 3in1", image: "kopiko-blanca.jpg", desc: "3in1 coffee", price: 13 }
    ],

    softdrinks: [
        { name: "Coke Mismo", image: "coke-mismo.jpg", desc: "Softdrink", price: 20 },
        { name: "Sprite Mismo", image: "sprite-mismo.jpg", desc: "Softdrink", price: 17 },
        { name: "Royal Mismo", image: "royal-mismo.jpg", desc: "Softdrink", price: 17 },
        { name: "Coke 1.5", image: "coke-1.5.jpg", desc: "1.5L bottle", price: 65 },
        { name: "Sprite 1.5", image: "sprite-1.5.jpg", desc: "1.5L bottle", price: 71 },
        { name: "Royal 1.5", image: "royal-1.5.jpg", desc: "1.5L bottle", price: 67 }
    ],

};

// ================== PRODUCT VIEW ==================
function showCategory(category) {
    const list = $('#product-list');
    const title = $('#product-title');

    list.innerHTML = '';
    title.textContent = category.replace(/_/g, ' ').toUpperCase();

    products[category].forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'product-card fade';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <span class="price">₱${item.price}</span>
        `;
        list.appendChild(card);

        setTimeout(() => card.classList.add('show'), index * 80);

        // 3D Tilt
        card.addEventListener('mousemove', (e) => tiltCard(e, card));
        card.addEventListener('mouseleave', () => resetTilt(card));
    });

    $('#categories').style.display = 'none';
    list.style.display = 'flex';
    $('#back-btn').style.display = 'inline-block';
}

function goBack() {
    $('#product-title').textContent = 'Product Categories';
    $('#categories').style.display = 'flex';
    $('#product-list').style.display = 'none';
    $('#back-btn').style.display = 'none';
}

// ================== CARD EFFECTS ==================
function tiltCard(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    card.style.transform = `rotateY(${dx * 12}deg) rotateX(${-dy * 12}deg) scale(1.08)`;
    card.style.boxShadow = `${dx*15}px ${dy*15}px 40px rgba(107,90,205,0.4)`;
}

function resetTilt(card) {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    card.style.boxShadow = '0 15px 40px rgba(106,90,205,0.2)';
}

// ================== GLOBAL EVENTS ==================
window.addEventListener('load', () => {
    showFades();
    typeHeroText();
});

window.addEventListener('scroll', () => {
    showFades();
    parallaxHero();
    navbarScroll();
});
