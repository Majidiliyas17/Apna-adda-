// About Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Staggered animation for value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.classList.add('fade-element');
        card.style.transitionDelay = (index * 0.15) + 's';
    });

    // Staggered animation for story elements
    const storyElements = document.querySelectorAll('.story-text, .story-image');
    storyElements.forEach((el, index) => {
        el.classList.add('fade-element');
        el.style.transitionDelay = (index * 0.2) + 's';
    });
});
