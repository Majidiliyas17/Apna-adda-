// Franchise Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // Form submission
    const franchiseForm = document.getElementById('franchise-form');

    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const city = formData.get('city');
            const investment = formData.get('investment');
            const message = formData.get('message');

            const whatsappMessage = `New Franchise Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nFranchise Type: ${investment}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/919919651251?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');
            alert('Thank you for your interest! We have opened WhatsApp for you to send your inquiry. Our team will contact you within 24 hours.');
            this.reset();
        });
    }

    // Inquire buttons
    const inquireButtons = document.querySelectorAll('.inquire-btn');
    inquireButtons.forEach(button => {
        button.addEventListener('click', function () {
            const pkg = this.getAttribute('data-package');
            const message = `I'm interested in the ${pkg} package. Please provide more details about investment and franchise opportunities.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/919919651251?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Add fade-element classes for staggered animations
    document.querySelectorAll('.benefit-card').forEach((card, i) => {
        card.classList.add('fade-element');
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.process-step').forEach((step, i) => {
        step.classList.add('fade-element');
        step.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.investment-card').forEach((card, i) => {
        card.classList.add('fade-element');
        card.style.transitionDelay = (i * 0.15) + 's';
    });

    document.querySelectorAll('.faq-item').forEach((item, i) => {
        item.classList.add('fade-element');
        item.style.transitionDelay = (i * 0.1) + 's';
    });

    const formContent = document.querySelector('.form-content');
    if (formContent) formContent.classList.add('fade-element');
});
