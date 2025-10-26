// Common JavaScript for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation with Side Menu
    const hamburger = document.getElementById('hamburger');
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');
    const closeNav = document.getElementById('closeNav');

    if (hamburger && sideNav && overlay && closeNav) {
        // Open mobile menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.add('active');
            sideNav.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        function closeMobileMenu() {
            hamburger.classList.remove('active');
            sideNav.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }

        // Close when clicking X button
        closeNav.addEventListener('click', closeMobileMenu);

        // Close when clicking overlay
        overlay.addEventListener('click', closeMobileMenu);

        // Close when clicking on a link
        document.querySelectorAll('.side-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sideNav.classList.contains('open')) {
                closeMobileMenu();
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (sideNav.classList.contains('open') && 
                !hamburger.contains(e.target) && 
                !sideNav.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
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

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.fade-element');
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // WhatsApp/Call Toggle Functionality (for all pages)
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const quickActionButtons = document.querySelectorAll('.quick-action-btn');
    
    if (toggleButtons.length > 0 && quickActionButtons.length > 0) {
        let currentMode = 'whatsapp'; // Default mode
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const mode = this.classList.contains('call') ? 'call' : 'whatsapp';
                currentMode = mode;
                
                // Update toggle buttons
                toggleButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.classList.contains(mode)) {
                        btn.classList.add('active');
                    }
                });
                
                // Update quick action buttons visibility
                quickActionButtons.forEach(actionBtn => {
                    if (actionBtn.classList.contains(mode)) {
                        actionBtn.style.display = 'flex';
                    } else {
                        actionBtn.style.display = 'none';
                    }
                });
            });
        });
        
        // Set initial state - default to WhatsApp
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