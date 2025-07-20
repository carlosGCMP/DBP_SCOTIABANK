
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.main-menu').classList.remove('active');
        document.querySelectorAll('.submenu').forEach(function(submenu) {
            submenu.style.display = '';
        });
    }
});
document.querySelectorAll('.job-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
const video = document.querySelector('video');
if (video) {
    video.addEventListener('play', function() {
        console.log('Video started playing');
    });
    
    video.addEventListener('pause', function() {
        console.log('Video paused');
    });
}
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
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
document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        const originalText = this.innerHTML;
        this.innerHTML = originalText + ' <i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            this.style.opacity = '';
            this.innerHTML = originalText;
        }, 2000);
    });
});
document.querySelectorAll('.job-card-button').forEach(function(button) {
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const main = document.querySelector('main');
            if (main) {
                main.focus();
                main.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.setAttribute('aria-label', 'Video institucional de Scotiabank Colpatria');
    }

    const iframe = document.querySelector('iframe[src*="youtube"]');
    if (iframe) {
        iframe.setAttribute('aria-label', 'Video de YouTube sobre trabajar en Scotiabank Colpatria');
    }
});
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.job-card').forEach(function(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
const videos = document.querySelectorAll('video');
videos.forEach(function(video) {
    video.addEventListener('error', function() {
        console.log('Error loading video');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Error al cargar el video. Por favor, intenta más tarde.';
        errorMsg.style.textAlign = 'center';
        errorMsg.style.padding = '20px';
        errorMsg.style.color = '#666';
        video.parentNode.replaceChild(errorMsg, video);
    });
});
const iframe = document.querySelector('iframe[src*="youtube"]');
if (iframe) {
    const originalSrc = iframe.src;
    iframe.src = '';
    
    const iframeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                iframe.src = originalSrc;
                iframeObserver.unobserve(iframe);
            }
        });
    });
    
    iframeObserver.observe(iframe);
}