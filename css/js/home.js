// =============================================
// Home Page - Modern Interactive JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // =============================================
    // Hero Video Play/Pause on Hover
    // =============================================
    const hero = document.getElementById('hero');
    const heroVideo = document.getElementById('heroVideo');

    if (hero && heroVideo) {
        hero.addEventListener('mouseenter', () => {
            heroVideo.play();
        });

        hero.addEventListener('mouseleave', () => {
            heroVideo.pause();
        });
    }

    // =============================================
    // Floating Particles in Hero
    // =============================================
    const particlesContainer = document.getElementById('heroParticles');

    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particlesContainer.appendChild(particle);
        }
    }

    // =============================================
    // Animated Number Counters
    // =============================================
    const counters = document.querySelectorAll('.stat-number[data-count]');

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'));
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);

                        if (target >= 1000) {
                            el.textContent = current.toLocaleString('en-IN');
                        } else {
                            el.textContent = current;
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            if (target >= 1000) {
                                el.textContent = target.toLocaleString('en-IN');
                            } else {
                                el.textContent = target;
                            }
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // =============================================
    // Add fade-element class to home page elements
    // =============================================
    const aboutContent = document.querySelector('.about-content');
    const dishCards = document.querySelectorAll('.dish-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const ctaContent = document.querySelector('.cta-content');

    if (aboutContent) aboutContent.classList.add('fade-element');

    dishCards.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.08) + 's';
        card.classList.add('fade-element');
    });

    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.15) + 's';
        card.classList.add('fade-element');
    });

    if (ctaContent) {
        ctaContent.classList.add('fade-element');
    }

    // =============================================
    // Smooth Scroll for Anchor Links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
