
class ScotiabankApp {
    constructor() {
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isAutoPlaying = true;
        
        this.init();
    }

    init() {
        this.initSlider();
        this.initTabs();
        this.initSearch();
        this.initMobileMenu();
        this.initBackToTop();
        this.initAnimations();
        this.initEconomicIndicators();
        this.initAccessibility();
        
        console.log('Scotiabank Colpatria - App initialized');
    }
    initSlider() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const slider = document.querySelector('.hero-slider');

        if (!slides.length) return;
        this.startAutoPlay();
        prevBtn?.addEventListener('click', () => this.previousSlide());
        nextBtn?.addEventListener('click', () => this.nextSlide());
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        this.initTouchControls(slider);

        slider?.addEventListener('mouseenter', () => this.stopAutoPlay());
        slider?.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        if (index < 0 || index >= slides.length) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        this.currentSlide = index;
    }

    nextSlide() {
        const slides = document.querySelectorAll('.slide');
        const next = (this.currentSlide + 1) % slides.length;
        this.goToSlide(next);
    }

    previousSlide() {
        const slides = document.querySelectorAll('.slide');
        const prev = (this.currentSlide - 1 + slides.length) % slides.length;
        this.goToSlide(prev);
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) return;
        this.stopAutoPlay();
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    initTouchControls(element) {
        if (!element) return;

        let startX = 0;
        let endX = 0;

        element.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        element.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }
    initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                this.switchTab(targetTab);
            });
        });
    }
    switchTab(targetTab) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    }
    initSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');

        if (!searchInput || !searchBtn) return;

        const handleSearch = () => {
            const query = searchInput.value.trim();
            
            if (query.length < 2) {
                this.showNotification('Ingresa al menos 2 caracteres', 'warning');
                return;
            }

            console.log('Searching for:', query);
            this.showNotification(`Buscando: ${query}`, 'info');
        };

        searchBtn.addEventListener('click', handleSearch);
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 0) {
                e.target.style.borderColor = '#2ecc71';
            } else {
                e.target.style.borderColor = '';
            }
        });
    }
    initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (!mobileToggle) return;

        mobileToggle.addEventListener('click', () => {
            const isVisible = mainNav.style.display === 'block';
            
            if (isVisible) {
                mainNav.style.display = 'none';
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                mainNav.style.display = 'block';
                mobileToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mainNav.style.display = '';
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    initBackToTop() {
        const backToTop = document.querySelector('.back-to-top');
        if (!backToTop) return;
        window.addEventListener('scroll', this.throttle(() => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, 100));
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        const animatedElements = document.querySelectorAll('.product-card, .service-card, .indicator');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    }
    initEconomicIndicators() {
        this.updateIndicators();
        setInterval(() => this.updateIndicators(), 30000);
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator-value');
        
        indicators.forEach(indicator => {
            indicator.style.color = '#2ecc71';
            indicator.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                indicator.style.color = '';
                indicator.style.transform = 'scale(1)';
            }, 500);
        });
    }
    initAccessibility() {
        document.addEventListener('keydown', (e) => {
            if (e.target.closest('.hero-slider')) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.previousSlide();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide();
                }
            }
            if (e.key === 'Escape') {
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                const mainNav = document.querySelector('.main-nav');
                
                if (mainNav.style.display === 'block') {
                    mainNav.style.display = 'none';
                    mobileToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
        const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
        focusableElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '3px solid #ec111a';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    showNotification(message, type = 'info') {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const colors = {
            info: '#3498db',
            success: '#2ecc71',
            warning: '#f39c12',
            error: '#e74c3c'
        };

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${colors[type] || colors.info};
            color: white;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;

        document.body.appendChild(notification);
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    formatCurrency(amount) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    }
    getDeviceType() {
        const width = window.innerWidth;
        if (width <= 768) return 'mobile';
        if (width <= 1024) return 'tablet';
        return 'desktop';
    }
    trackEvent(action, category = 'general', label = '') {
        console.log('Event tracked:', { action, category, label, device: this.getDeviceType() });
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    }
}
class FormValidator {
    static validate(form) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    static validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let errorMessage = '';
        this.clearError(field);
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo es requerido';
        }
        if (value && type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
        }

        if (value && type === 'tel') {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value.replace(/\D/g, ''))) {
                isValid = false;
                errorMessage = 'Teléfono debe tener 10 dígitos';
            }
        }
        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    static showError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            display: block;
            color: #e74c3c;
            font-size: 12px;
            margin-top: 5px;
        `;
        
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    static clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
}
class LazyLoader {
    static init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                img.classList.add('lazy');
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s';
                
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                });
                
                imageObserver.observe(img);
            });
        }
    }
}
class PerformanceMonitor {
    static init() {
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0];
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                
                console.log(`Page load time: ${loadTime}ms`);
                
                // Report to analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math.round(loadTime)
                    });
                }
            }
        });
        this.measureCLS();
        this.measureFID();
        this.measureLCP();
    }

    static measureCLS() {
        let clsValue = 0;
        let clsEntries = [];

        const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsEntries.push(entry);
                    clsValue += entry.value;
                }
            }
        });

        observer.observe({ type: 'layout-shift', buffered: true });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('CLS:', clsValue);
            }
        });
    }

    static measureFID() {
        const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                console.log('FID:', entry.processingStart - entry.startTime);
            }
        });

        observer.observe({ type: 'first-input', buffered: true });
    }

    static measureLCP() {
        const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
        });

        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    window.scotiabankApp = new ScotiabankApp();
    LazyLoader.init();
    PerformanceMonitor.init();
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!FormValidator.validate(this)) {
                e.preventDefault();
                scotiabankApp.showNotification('Por favor corrige los errores en el formulario', 'error');
            }
        });
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                FormValidator.validateField(this);
            });
        });
    });
    const trackableLinks = document.querySelectorAll('a[href^="/"], a[href^="http"]');
    trackableLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            const text = this.textContent.trim();
            scotiabankApp.trackEvent('link_click', 'navigation', `${text}: ${href}`);
        });
    });

    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            const className = this.className;
            scotiabankApp.trackEvent('button_click', 'interaction', `${text} (${className})`);
        });
    });
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                description: e.error.message,
                fatal: false
            });
        }
    });
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled Promise Rejection:', e.reason);
    });

    console.log('Scotiabank Colpatria - All modules initialized successfully');
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

window.ScotiabankApp = ScotiabankApp;
window.FormValidator = FormValidator;
window.LazyLoader = LazyLoader;
window.PerformanceMonitor = PerformanceMonitor;