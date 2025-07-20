
document.querySelector('.mobile-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.primary-nav');
    menu.classList.toggle('active');
});
document.querySelectorAll('.primary-nav > li > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('dropdown-menu')) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
});

document.querySelectorAll('.collapsible-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        document.querySelectorAll('.collapsible-toggle').forEach(function(otherToggle) {
            otherToggle.classList.remove('active');
            otherToggle.nextElementSibling.classList.remove('active');
        });
                        if (!isActive) {
            this.classList.add('active');
            content.classList.add('active');
        }
    });
});
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.primary-nav').classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(function(submenu) {
            submenu.style.display = '';
        });
    }
});
const backToTopBtn = document.createElement('a');
backToTopBtn.href = '#';
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopBtn.setAttribute('aria-label', 'Volver a la cima');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});