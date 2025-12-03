// Contact Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Contact toggle functionality
    const contactToggle = document.getElementById('contact-toggle');
    
    function updateContactMode() {
        const isWhatsAppMode = contactToggle.checked;
        
        // Update all contact links based on toggle state
        const callOptions = document.querySelectorAll('.call-option');
        const whatsappOptions = document.querySelectorAll('.whatsapp-option');
        
        if (isWhatsAppMode) {
            callOptions.forEach(option => {
                if (option.tagName === 'A') {
                    option.style.display = 'none';
                }
            });
            whatsappOptions.forEach(option => {
                if (option.tagName === 'A') {
                    option.style.display = 'inline-block';
                }
            });
        } else {
            callOptions.forEach(option => {
                if (option.tagName === 'A') {
                    option.style.display = 'inline-block';
                }
            });
            whatsappOptions.forEach(option => {
                if (option.tagName === 'A') {
                    option.style.display = 'none';
                }
            });
        }
    }
    
    contactToggle.addEventListener('change', updateContactMode);
    updateContactMode(); // Initialize
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Determine contact method based on toggle
        const isWhatsAppMode = contactToggle.checked;
        
        if (isWhatsAppMode) {
            // Send via WhatsApp
            const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/919919651251?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        } else {
            // For call mode, we'll just show a success message
            alert(`Thank you ${name}! Your message has been received. We will call you back at ${phone} shortly.`);
        }
        
        // Reset form
        this.reset();
    });
    
    // Add staggered animation to elements
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});