/* =========================================================
   Department of Computer Science Website JS
   Clean Version (No Store Logic)
   ========================================================= */

// ================== UTILITIES ==================
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

// ================== FADE-IN SYSTEM ==================
function showFades() {
    $$('.fade').forEach((el, i) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add('show');
            }, i * 100);
        }
    });
}

// ================== NAVBAR SCROLL EFFECT ==================
function navbarScroll() {
    const navbar = $('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 30px rgba(106,90,205,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
}

// ================== HERO TYPING EFFECT ==================
function typeHeroText() {
    const heroHeading = $('.hero h1');
    if (!heroHeading) return;

    const text = "Welcome to the Department of Computer Science!";
    let i = 0;
    heroHeading.textContent = '';

    const typing = setInterval(() => {
        heroHeading.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 60);
}

// ================== OPTIONAL: CARD HOVER TILT ==================
function tiltCard(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    card.style.transform = `
        rotateY(${dx * 10}deg)
        rotateX(${-dy * 10}deg)
        scale(1.05)
    `;
}

function resetTilt(card) {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
}

// Apply tilt to all cards
function applyCardEffects() {
    const cards = $$('.product-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => tiltCard(e, card));
        card.addEventListener('mouseleave', () => resetTilt(card));
    });
}

// ================== GLOBAL EVENTS ==================
window.addEventListener('load', () => {
    showFades();
    typeHeroText();
    applyCardEffects();
});

window.addEventListener('scroll', () => {
    showFades();
    navbarScroll();
});

function showFades() {
    $$('.fade').forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}