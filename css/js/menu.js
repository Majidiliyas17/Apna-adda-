// Menu Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Order toggle functionality
    const orderToggle = document.getElementById('order-toggle');
    const orderButtons = document.querySelectorAll('.item-order-btn');
    const quickOrderButtons = document.querySelector('.quick-order-buttons');
    
    function updateOrderMode() {
        const isWhatsAppMode = orderToggle.checked;
        
        orderButtons.forEach(button => {
            if (isWhatsAppMode) {
                button.innerHTML = '<i class="fab fa-whatsapp"></i> Order';
                button.classList.remove('call-mode');
                button.setAttribute('data-mode', 'whatsapp');
            } else {
                button.innerHTML = '<i class="fas fa-phone"></i> Call';
                button.classList.add('call-mode');
                button.setAttribute('data-mode', 'call');
            }
        });
        
        // Update quick order buttons visibility
        const callBtn = quickOrderButtons.querySelector('.call-btn');
        const whatsappBtn = quickOrderButtons.querySelector('.whatsapp-btn');
        
        if (isWhatsAppMode) {
            callBtn.style.display = 'none';
            whatsappBtn.style.display = 'inline-block';
        } else {
            callBtn.style.display = 'inline-block';
            whatsappBtn.style.display = 'none';
        }
    }
    
    orderToggle.addEventListener('change', updateOrderMode);
    updateOrderMode(); // Initialize
    
    // Category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // Filter menu categories
            menuCategories.forEach(categoryElement => {
                if (category === 'all') {
                    categoryElement.classList.remove('hidden');
                } else {
                    if (categoryElement.getAttribute('data-category') === category) {
                        categoryElement.classList.remove('hidden');
                    } else {
                        categoryElement.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Order button functionality
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            const orderMode = this.getAttribute('data-mode');
            
            if (orderMode === 'whatsapp') {
                // WhatsApp order
                const message = `Hello Apna Adda! I would like to order:\n\n${itemName} - ₹${itemPrice}\n\nPlease confirm availability.`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/919999999999?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
            } else {
                // Call order
                const callURL = `tel:+919999999999`;
                window.location.href = callURL;
            }
        });
    });
    
    // Add staggered animation to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});