// Menu Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
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
    
    // Add staggered animation to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-element');
    });
    
    // Add animation to category titles
    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach((title, index) => {
        title.style.animationDelay = `${index * 0.2}s`;
        title.classList.add('fade-element');
    });
});