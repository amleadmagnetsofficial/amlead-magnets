// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.1)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !phone || !service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your inquiry! We will contact you soon at ' + phone);
            contactForm.reset();
        });
    }
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const testimonialTrack = document.querySelector('.testimonial-track');

function showTestimonial(index) {
    if (testimonialTrack) {
        const translateX = -index * 100;
        testimonialTrack.style.transform = `translateX(${translateX}%)`;
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
setInterval(() => {
    if (testimonials.length > 0) {
        nextTestimonial();
    }
}, 5000);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});

// Enhanced floating particles animation
function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Enhanced speed indicator animation
function animateSpeedIndicator() {
    const speedText = document.querySelector('.speed-text');
    if (!speedText) return;

    const speeds = ['100M', '500M', '1G', 'Ultra'];
    let currentSpeed = 0;

    setInterval(() => {
        speedText.textContent = speeds[currentSpeed];
        speedText.style.transform = 'translate(-50%, -50%) scale(1.1)';
        
        setTimeout(() => {
            speedText.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
        
        currentSpeed = (currentSpeed + 1) % speeds.length;
    }, 2000);
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateSpeedIndicator();
    
    // Add dynamic background animation
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        setInterval(() => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            heroBackground.style.background = `
                radial-gradient(circle at ${randomX}% ${randomY}%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at ${100-randomX}% ${100-randomY}%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)
            `;
        }, 3000);
    }
});

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
        // Add analytics tracking here if needed
    });
});

// Form validation and enhancement
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Loading screen (if needed)
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// Performance optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Add any scroll-based functionality here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical images
const preloadImages = [
    // Add any critical image URLs here
];

preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hype Air Net website initialized');
    
    // Ensure all phone links are properly formatted
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        const phoneNumber = link.href.replace('tel:', '');
        if (phoneNumber !== '8665588171') {
            console.warn('Phone number mismatch detected:', phoneNumber);
        }
    });
    
    // Add dynamic typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 2000);
    }
});

// Make functions globally available
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;