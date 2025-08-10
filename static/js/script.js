// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        history.pushState(null, '', this.getAttribute('href'));
    });
});