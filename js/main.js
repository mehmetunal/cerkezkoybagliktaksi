// Main JavaScript File

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
}

// Initialize form validations
document.addEventListener('DOMContentLoaded', function() {
    validateForm('reservationForm');
    validateForm('contactForm');
});

// Phone number click handler
document.querySelectorAll('.phone-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const phone = this.getAttribute('href').replace('tel:', '');
        if (confirm(`Aramak istediğiniz numara: ${phone}`)) {
            window.location.href = this.getAttribute('href');
        } else {
            e.preventDefault();
        }
    });
});

// WhatsApp click handler
document.querySelectorAll('.whatsapp-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const message = encodeURIComponent('Merhaba, taksi rezervasyonu yapmak istiyorum.');
        const phone = this.getAttribute('data-phone');
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
});

// Price calculator (simple version)
function calculatePrice() {
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    const serviceType = document.getElementById('serviceType').value;
    let price = 0;
    
    if (serviceType === 'city') {
        price = 25 + (distance * 8); // Açılış + km başı
    } else if (serviceType === 'airport') {
        price = 450; // Sabit havalimanı fiyatı
    }
    
    document.getElementById('estimatedPrice').textContent = price.toFixed(2) + ' TL';
}

// Initialize price calculator if exists
document.addEventListener('DOMContentLoaded', function() {
    const distanceInput = document.getElementById('distance');
    const serviceTypeInput = document.getElementById('serviceType');
    
    if (distanceInput && serviceTypeInput) {
        distanceInput.addEventListener('input', calculatePrice);
        serviceTypeInput.addEventListener('change', calculatePrice);
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Back to top button - Add to floating buttons container
const floatingButtonsContainer = document.querySelector('.floating-buttons');
if (floatingButtonsContainer) {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'floating-btn back-to-top';
    backToTopButton.style.display = 'none';
    backToTopButton.title = 'Yukarı Çık';
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Insert at the beginning of floating buttons
    floatingButtonsContainer.insertBefore(backToTopButton, floatingButtonsContainer.firstChild);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Initialize counters when they come into view
if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.stat-number[data-target]').forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Google Maps initialization (placeholder)
function initMap() {
    // This will be replaced with actual Google Maps API code
    console.log('Google Maps initialized');
}

// Form submission handler
function handleFormSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading"></span> Gönderiliyor...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                alert(successMessage || 'Formunuz başarıyla gönderildi!');
                form.reset();
                form.classList.remove('was-validated');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
}

// Initialize form handlers
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmit('reservationForm', 'Rezervasyon talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    handleFormSubmit('contactForm', 'Mesajınız başarıyla gönderildi!');
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

