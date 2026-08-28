// Gallery Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxPrice = document.getElementById('lightbox-price');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentImageIndex = 0;
    let foodItems = [];

    const foodElements = document.querySelectorAll('.food-item');

    foodElements.forEach((item, index) => {
        item.classList.add('fade-element');
        item.style.transitionDelay = (index % 12) * 0.06 + 's';

        const img = item.querySelector('.food-image img');
        const title = item.querySelector('.food-info h3').textContent;
        const description = item.querySelector('.food-info p').textContent;
        const price = item.querySelector('.food-price').textContent;

        foodItems.push({
            src: img.getAttribute('src'),
            title: title,
            description: description,
            price: price
        });

        item.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightbox();
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + foodItems.length) % foodItems.length;
            updateLightbox();
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % foodItems.length;
            updateLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + foodItems.length) % foodItems.length;
            updateLightbox();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % foodItems.length;
            updateLightbox();
        }
    });

    function updateLightbox() {
        const currentItem = foodItems[currentImageIndex];
        lightboxImage.src = currentItem.src;
        lightboxTitle.textContent = currentItem.title;
        lightboxDescription.textContent = currentItem.description;
        lightboxPrice.textContent = currentItem.price;
        lightboxImage.alt = currentItem.title;
    }

    // CTA section
    const ctaContent = document.querySelector('.visit-cta .cta-content');
    if (ctaContent) {
        ctaContent.classList.add('fade-element');
    }
});
