// Home Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Order buttons functionality for home page
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('data-whatsapp');
            const productName = this.closest('.dish-card').querySelector('h3').textContent;
            const price = this.closest('.dish-card').querySelector('.dish-price').textContent;
            
            // Create WhatsApp message
            const message = `Hello Apna Adda! I would like to order:\n\n${productName} - ${price}\n\nPlease confirm availability and delivery time.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        });
    });
    
    // Add staggered animation to home page elements
    const aboutContent = document.querySelector('.about-content');
    const dishCards = document.querySelectorAll('.dish-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (aboutContent) {
        aboutContent.classList.add('fade-element');
    }
    
    dishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-element');
    });
    
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        card.classList.add('fade-element');
    });
    
    // Hero section typing effect (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Uncomment below line if you want typing effect
        // setTimeout(typeWriter, 1000);
    }
});