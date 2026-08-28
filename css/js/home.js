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
        let soundEnabled = false;

        // Step 1: Play muted on load (browsers require this for autoplay)
        heroVideo.muted = true;
        heroVideo.volume = 1;
        heroVideo.play().catch(() => {});

        // Step 2: On first real user interaction → unmute automatically
        // Desktop: mousemove, click, scroll | Mobile: touchstart
        const enableSound = () => {
            if (!soundEnabled) {
                soundEnabled = true;
                heroVideo.muted = false;
                heroVideo.volume = 1;
                heroVideo.play().catch(() => {});
            }
        };

        // Desktop: mousemove is the most reliable first gesture
        document.addEventListener('mousemove', enableSound, { once: true, passive: true });
        document.addEventListener('click', enableSound, { once: true, passive: true });
        document.addEventListener('keydown', enableSound, { once: true, passive: true });

        // Mobile: touchstart
        document.addEventListener('touchstart', enableSound, { once: true, passive: true });

        // Scroll: skip first auto-fire by checking user actually scrolled
        let scrollFired = false;
        window.addEventListener('scroll', () => {
            if (!scrollFired && window.scrollY > 10) {
                scrollFired = true;
                enableSound();
            }
        }, { passive: true });

        // Step 3: Hero visible → unmute & play, Hero hidden → mute & pause
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (soundEnabled) {
                        heroVideo.muted = false;
                        heroVideo.volume = 1;
                    }
                    if (heroVideo.paused) {
                        heroVideo.play().catch(() => {});
                    }
                } else {
                    heroVideo.muted = true;
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.1 });

        heroObserver.observe(hero);

        // Step 4: Fallback - if video didn't autoplay, retry on visibility
        if (heroVideo.paused) {
            const retryPlay = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        heroVideo.play().catch(() => {});
                        retryPlay.disconnect();
                    }
                });
            }, { threshold: 0.1 });
            retryPlay.observe(hero);
        }
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

    function animateCounter(el) {
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
    }

    if (counters.length > 0) {
        const statsSection = document.querySelector('.about-stats');
        let countersAnimated = false;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    counters.forEach(counter => animateCounter(counter));
                    counterObserver.disconnect();
                }
            });
        }, { threshold: 0.2 });

        if (statsSection) {
            counterObserver.observe(statsSection);
        }

        // Fallback: if section is already visible on load, animate after short delay
        setTimeout(() => {
            if (!countersAnimated && statsSection) {
                const rect = statsSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    countersAnimated = true;
                    counters.forEach(counter => animateCounter(counter));
                }
            }
        }, 500);
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
