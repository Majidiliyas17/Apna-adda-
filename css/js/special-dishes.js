// Special Dishes Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dishCards = document.querySelectorAll('.dish-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter dishes
            dishCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Order button functionality
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('data-whatsapp');
            const itemName = this.getAttribute('data-item');
            const price = this.closest('.dish-card').querySelector('.dish-price').textContent;
            
            // Create WhatsApp message
            const message = `Hello Apna Adda! I would like to order:\n\n${itemName} - ${price}\n\nPlease confirm availability and delivery time.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        });
    });
    
    // Add staggered animation to dish cards
    dishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});