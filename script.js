// =====================
// Smooth Scroll & Navigation
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Intersection Observer for Animations
// =====================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple items
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
});

// =====================
// Active Navigation Link
// =====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// =====================
// Dynamic Tag Hover Effects
// =====================
const tags = document.querySelectorAll('.tag, .tag-project, .keyword');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// =====================
// Scroll Progress Indicator (optional enhancement)
// =====================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #0077B6, #F77F00, #D62828);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// =====================
// Project Card Tilt Effect (subtle 3D effect)
// =====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// =====================
// Skill Card Animation on Hover
// =====================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// =====================
// Copy Email to Clipboard (optional enhancement)
// =====================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const email = this.textContent;
        
        if (navigator.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                // Create temporary notification
                const notification = document.createElement('div');
                notification.textContent = '✓ Email copié !';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #06A77D;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    animation: slideInUp 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOutDown 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        }
    });
});

// =====================
// Mobile Menu Toggle (if implementing mobile menu)
// =====================
function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        font-size: 1.75rem;
        background: none;
        border: none;
        color: var(--color-text);
        cursor: pointer;
    `;
    
    // Insert hamburger before nav-links
    nav.querySelector('.nav-container').appendChild(hamburger);
    
    // Toggle menu on mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });
    
    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMobileChange = (e) => {
        if (e.matches) {
            hamburger.style.display = 'block';
            navLinks.style.cssText = `
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
                opacity: 0;
                pointer-events: none;
            `;
        } else {
            hamburger.style.display = 'none';
            navLinks.style = '';
        }
    };
    
    mediaQuery.addListener(handleMobileChange);
    handleMobileChange(mediaQuery);
}

// Uncomment to enable mobile menu
createMobileMenu();

// Add active class styles for mobile menu
const style = document.createElement('style');
style.textContent = `
    .nav-links.active {
        transform: translateY(0) !important;
        opacity: 1 !important;
        pointer-events: all !important;
    }
    
    @keyframes slideInUp {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// =====================
// Performance: Lazy load images (if you add images later)
// =====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =====================
// Console Easter Egg (fun touch)
// =====================
console.log('%c👋 Salut !', 'font-size: 24px; font-weight: bold; color: #0077B6;');
console.log('%cVous êtes curieux ? C\'est une excellente qualité pour un data analyst ! 📊', 'font-size: 14px; color: #F77F00;');
console.log('%cSi vous voulez en savoir plus sur mon profil, contactez-moi ! 🚀', 'font-size: 14px; color: #06A77D;');
