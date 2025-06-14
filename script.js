// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Promo slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.promo-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides
let slideInterval = setInterval(nextSlide, 5000);

// Pause on hover
const slideshow = document.querySelector('.promo-slideshow');
slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slideshow.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Manual controls
document.querySelector('.promo-next').addEventListener('click', nextSlide);
document.querySelector('.promo-prev').addEventListener('click', prevSlide);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        this.reset();
    });
}

// Business Carousel Functionality
let currentBusinessSlide = 0;
const businessSlides = document.querySelectorAll('.business-slide');
const totalBusinessSlides = businessSlides.length;

function showBusinessSlide(index) {
    businessSlides.forEach(slide => slide.classList.remove('active'));
    businessSlides[index].classList.add('active');
    currentBusinessSlide = index;
}

function nextBusinessSlide() {
    currentBusinessSlide = (currentBusinessSlide + 1) % totalBusinessSlides;
    showBusinessSlide(currentBusinessSlide);
}

function prevBusinessSlide() {
    currentBusinessSlide = (currentBusinessSlide - 1 + totalBusinessSlides) % totalBusinessSlides;
    showBusinessSlide(currentBusinessSlide);
}

// Auto-advance business slides
let businessSlideInterval = setInterval(nextBusinessSlide, 3000);

// Pause on hover
const businessCarousel = document.querySelector('.business-carousel');
if (businessCarousel) {
    businessCarousel.addEventListener('mouseenter', () => {
        clearInterval(businessSlideInterval);
    });
    
    businessCarousel.addEventListener('mouseleave', () => {
        businessSlideInterval = setInterval(nextBusinessSlide, 3000);
    });
}

// Manual controls
document.querySelector('.carousel-next')?.addEventListener('click', nextBusinessSlide);
document.querySelector('.carousel-prev')?.addEventListener('click', prevBusinessSlide);