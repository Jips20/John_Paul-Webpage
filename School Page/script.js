const elements = document.querySelectorAll('.fade');

function showOnScroll(){
    elements.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

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

// ================= APPLE-LIKE FLOATING CARDS =================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = (x - centerX) / 15;
        targetY = (y - centerY) / 15;
    });

    function animate(){
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        card.style.setProperty('--currentX', `${currentX}deg`);
        card.style.setProperty('--currentY', `${-currentY}deg`);

        requestAnimationFrame(animate);
    }

    animate();

    card.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

});

document.getElementById('showLocation').addEventListener('click', function() {
    // Opens the Google Maps location you shared
    window.open('https://maps.app.goo.gl/i9gxHR4TwKp5X2zu8', '_blank');
});