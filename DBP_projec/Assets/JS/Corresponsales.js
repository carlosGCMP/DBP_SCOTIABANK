function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.accordion-arrow');
    const isActive = content.classList.contains('active');

    document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.accordion-arrow').forEach(arr => {
        arr.classList.remove('rotated');
    });

    if (!isActive) {
        content.classList.add('active');
        arrow.classList.add('rotated');
    }
}

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
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    
    lastScrollTop = scrollTop;
});
function toggleMobileNav() {
    const navMenu = document.querySelector('.main-menu');
    navMenu.classList.toggle('mobile-active');
}

function checkMobileMenu() {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.site-navigation');
        let mobileBtn = nav.querySelector('.mobile-menu-btn');
        
        if (!mobileBtn) {
            mobileBtn = document.createElement('button');
            mobileBtn.className = 'mobile-menu-btn';
            mobileBtn.innerHTML = '☰';
            mobileBtn.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 24px;
                padding: 15px 20px;
                cursor: pointer;
            `;
            mobileBtn.onclick = toggleMobileNav;
            nav.querySelector('.navigation-content').prepend(mobileBtn);
        }
    }
}

checkMobileMenu();
window.addEventListener('resize', checkMobileMenu);
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = this.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
                        }
    }
});
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 1000);
    });
});
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

document.querySelectorAll('.service-item, .location-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});