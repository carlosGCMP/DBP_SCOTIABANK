
function toggleCollapsible() {
    const content = document.getElementById('terms-content');
    content.classList.toggle('active');
}
document.querySelectorAll('.moments-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
                        document.querySelectorAll('.moments-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
                        const targetId = this.getAttribute('href');
        if (targetId !== '#inicio') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const navHeight = document.querySelector('.moments-nav').offsetHeight;
                const offsetTop = targetSection.offsetTop - headerHeight - navHeight;
                
                window.scrollTo({ 
                    top: offsetTop, 
                    behavior: 'smooth' 
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.moments-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { 
    threshold: 0.3,
    rootMargin: '-120px 0px -50% 0px'
});
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});


const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
                        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                console.log('Searching for:', query);
            }
        }
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const navHeight = document.querySelector('.moments-nav').offsetHeight;
            const offsetTop = target.offsetTop - headerHeight - navHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const introBanner = document.querySelector('.intro-banner');
    if (introBanner) {
        const rate = scrolled * -0.5;
        introBanner.style.transform = `translateY(${rate}px)`;
    }
});
