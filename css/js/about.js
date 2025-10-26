// About Page Specific JavaScript

// Additional animations for about page
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation to value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.3}s`;
    });
});