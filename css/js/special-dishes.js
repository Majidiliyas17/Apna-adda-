// Special Dishes Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dishCards = document.querySelectorAll('.dish-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

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

    // Add fade-element class for scroll animations
    dishCards.forEach((card, index) => {
        card.classList.add('fade-element');
        card.style.transitionDelay = (index % 10) * 0.06 + 's';
    });

    // CTA section
    const ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        ctaContent.classList.add('fade-element');
    }
});
