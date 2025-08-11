// --- Smooth Scrolling ---
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', this.getAttribute('href'));
    });
});

// --- Basic Animation on Scroll ---
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card, .services-grid li');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.section, .project-card, .services-grid li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// --- Intersection Observer for Animated Sections ---
const animatedSections = document.querySelectorAll('.animated-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            // Animate paragraphs in About section with delay
            if (entry.target.id === 'about') {
                const paragraphs = entry.target.querySelectorAll('.animated-paragraph');
                paragraphs.forEach((p, index) => {
                    p.style.setProperty('--delay', `${index * 0.2}s`);
                    p.classList.add('is-visible');
                });
            }
        }
    });
}, { threshold: 0.1 });

animatedSections.forEach(section => {
    observer.observe(section);
});

// --- Carousel ---
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.nav-next');
const prevBtn = document.querySelector('.nav-prev');
const items = Array.from(document.querySelectorAll('.carousel-item'));
let currentIndex = 0;

if (track && items.length > 0) {
    const itemWidth = items[0].getBoundingClientRect().width + 32;
    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 3) {
            currentIndex++;
            track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });
}

// --- Scroll-to-top Button ---
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- Mobile Menu Toggle ---
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const newNavLinks = document.querySelector('.new-nav-links');
if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => {
        newNavLinks.classList.toggle('active');
    });
}

// --- Magical Weather Animations ---
const weatherContainer = document.getElementById('weather-container');
const weatherEffects = ['snow', 'rain', 'thunder', 'sunny'];
let currentEffect = null;

function clearWeatherEffects() {
    if (weatherContainer) weatherContainer.innerHTML = '';
    currentEffect = null;
}

function createWeatherEffect(type) {
    if (currentEffect === type) return;
    clearWeatherEffects();
    currentEffect = type;

    switch (type) {
        case 'snow':
            for (let i = 0; i < 100; i++) {
                const flake = document.createElement('div');
                flake.className = 'weather-effect snow';
                flake.style.width = `${Math.random() * 5 + 5}px`;
                flake.style.height = flake.style.width;
                flake.style.left = `${Math.random() * window.innerWidth}px`;
                flake.style.animationDuration = `${Math.random() * 15 + 10}s`;
                flake.style.animationDelay = `${Math.random() * 5}s`;
                weatherContainer.appendChild(flake);
            }
            break;

        case 'rain':
            for (let i = 0; i < 50; i++) {
                const drop = document.createElement('div');
                drop.className = 'weather-effect rain';
                drop.style.left = `${Math.random() * window.innerWidth}px`;
                drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
                drop.style.animationDelay = `${Math.random() * 2}s`;
                weatherContainer.appendChild(drop);
            }
            break;

        case 'thunder':
            for (let i = 0; i < 3; i++) {
                const bolt = document.createElement('div');
                bolt.className = 'weather-effect thunder';
                bolt.style.left = `${Math.random() * window.innerWidth}px`;
                bolt.style.animationDuration = `${Math.random() * 5 + 3}s`;
                bolt.style.animationDelay = `${Math.random() * 5}s`;
                weatherContainer.appendChild(bolt);
            }
            break;

        case 'sunny':
            const sun = document.createElement('div');
            sun.className = 'weather-effect sunny';
            sun.style.left = `${Math.random() * 80 + 10}%`;
            sun.style.top = `${Math.random() * 30 + 10}%`;
            sun.style.animationDuration = '10s';
            sun.style.animationDelay = '0s';
            weatherContainer.appendChild(sun);
            break;
    }
}

function changeWeatherRandomly() {
    const randomEffect = weatherEffects[Math.floor(Math.random() * weatherEffects.length)];
    createWeatherEffect(randomEffect);
}

window.addEventListener('load', () => {
    changeWeatherRandomly();
    setInterval(changeWeatherRandomly, 20000);
});

// --- Firecracker Animation ---
const firecrackerContainer = document.getElementById('firecracker-container');
const firecrackerColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function createFirecracker(x, y) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'firecracker-particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = firecrackerColors[Math.floor(Math.random() * firecrackerColors.length)];

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 10 + 5;
        const xDir = `${Math.cos(angle) * speed * 20}px`;
        const yDir = `${Math.sin(angle) * speed * 20}px`;
        particle.style.setProperty('--x-dir', xDir);
        particle.style.setProperty('--y-dir', yDir);

        firecrackerContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const successFlash = document.querySelector('.flash.success');
    if (successFlash) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        createFirecracker(centerX, centerY);
    }
});
