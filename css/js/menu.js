// Menu Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

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

    // Add fade-element class for scroll animations
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.classList.add('fade-element');
        item.style.transitionDelay = (index % 10) * 0.05 + 's';
    });

    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach((title, index) => {
        title.classList.add('fade-element');
        title.style.transitionDelay = (index * 0.1) + 's';
    });

    // Quick order section
    const quickOrder = document.querySelector('.quick-order');
    if (quickOrder) {
        quickOrder.querySelector('.quick-order-content').classList.add('fade-element');
    }
});
