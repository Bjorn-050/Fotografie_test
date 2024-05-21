document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    // Array of image URLs
    const images = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
        'photo6.jpg',
    ];

    // Load images into the gallery
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Fotografie';
        gallery.appendChild(img);
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Bedankt voor je bericht!');
        contactForm.reset();
    });
});
