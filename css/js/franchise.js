// Franchise Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Form submission
    const franchiseForm = document.getElementById('franchise-form');
    
    franchiseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const city = formData.get('city');
        const investment = formData.get('investment');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `New Franchise Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nInvestment Range: ${investment} Lakhs\nMessage: ${message}`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/919999999999?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success message
        alert('Thank you for your interest! We have opened WhatsApp for you to send your inquiry.');
        
        // Reset form
        this.reset();
    });
    
    // Inquire buttons
    const inquireButtons = document.querySelectorAll('.inquire-btn');
    
    inquireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const package = this.getAttribute('data-package');
            
            const message = `I'm interested in the ${package} package. Please provide more details.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919999999999?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    });
    
    // Add staggered animation to elements
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});