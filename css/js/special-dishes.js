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
    
    // Order button functionality REMOVED
    // All order button related code has been removed
    
    // Add staggered animation to dish cards
    dishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});