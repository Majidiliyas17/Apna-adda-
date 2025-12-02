// Gallery Page Specific JavaScript - Food Items Version

document.addEventListener('DOMContentLoaded', () => {
    // Lightbox functionality
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
    
    // Initialize food items array from gallery
    const foodElements = document.querySelectorAll('.food-item');
    
    foodElements.forEach((item, index) => {
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
        
        // Add click event to each food item
        item.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightbox();
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + foodItems.length) % foodItems.length;
        updateLightbox();
    });
    
    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % foodItems.length;
        updateLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
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
        
        // Add alt text to image
        lightboxImage.alt = currentItem.title;
    }
    
    // Add image loading animation
    const images = document.querySelectorAll('.food-image img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});