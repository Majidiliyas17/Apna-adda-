// =============================================
// Main JavaScript - All Pages
// =============================================

document.addEventListener('DOMContentLoaded', function () {
    // =============================================
    // Mobile Navigation with Side Menu
    // =============================================
    const hamburger = document.getElementById('hamburger');
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');
    const closeNav = document.getElementById('closeNav');

    if (hamburger && sideNav && overlay && closeNav) {
        function openMobileMenu() {
            hamburger.classList.add('active');
            sideNav.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            hamburger.classList.remove('active');
            sideNav.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sideNav.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        closeNav.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);

        document.querySelectorAll('.side-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sideNav.classList.contains('open')) {
                closeMobileMenu();
            }
        });

        document.addEventListener('click', (e) => {
            if (sideNav.classList.contains('open') &&
                !hamburger.contains(e.target) &&
                !sideNav.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // =============================================
    // Header Scroll Effect
    // =============================================
    const header = document.getElementById('mainHeader') || document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // =============================================
    // Active Navigation Link
    // =============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    sideNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // =============================================
    // Scroll Animations (Intersection Observer)
    // Runs after a small delay so page-specific JS
    // can add .fade-element classes first
    // =============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-element').forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    }

    // Delay observer init so page-specific JS can add .fade-element first
    setTimeout(initScrollAnimations, 100);

    // =============================================
    // WhatsApp/Call Toggle
    // =============================================
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const quickActionButtons = document.querySelectorAll('.quick-action-btn');

    if (toggleButtons.length > 0 && quickActionButtons.length > 0) {
        let currentMode = 'whatsapp';

        toggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                const mode = this.classList.contains('call') ? 'call' : 'whatsapp';
                currentMode = mode;

                toggleButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.classList.contains(mode)) {
                        btn.classList.add('active');
                    }
                });

                quickActionButtons.forEach(actionBtn => {
                    if (actionBtn.classList.contains(mode)) {
                        actionBtn.style.display = 'flex';
                    } else {
                        actionBtn.style.display = 'none';
                    }
                });
            });
        });

        toggleButtons.forEach(btn => {
            if (btn.classList.contains('whatsapp')) {
                btn.classList.add('active');
            }
        });

        quickActionButtons.forEach(actionBtn => {
            if (actionBtn.classList.contains('whatsapp')) {
                actionBtn.style.display = 'flex';
            } else {
                actionBtn.style.display = 'none';
            }
        });
    }
});
