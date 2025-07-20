
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
}

function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function autoPlay() {
    changeSlide(1);
}

setInterval(autoPlay, 5000);

document.getElementById('loginBtn').addEventListener('click', function() {
    const dropdown = document.createElement('div');
    dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        background: #e31e24;
        min-width: 280px;
        border-radius: 8px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        z-index: 1000;
        margin-top: 8px;
        overflow: hidden;
    `;
    
    dropdown.innerHTML = `
        <ul style="list-style: none; margin: 0; padding: 0;">
            <li><a href="https://www.banco.scotiabankcolpatria.com/banca-virtual/login/" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Banca Virtual Personas</a></li>
            <li><a href="https://www.bancaempresarial.scotiabankcolpatria.com/login.aspx" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Banca Virtual Empresarial</a></li>
            <li><a href="https://ccop.scotiabank.com/login?countryId=CO" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">ScotiaConnect</a></li>
            <li><a href="https://pinespago.olimpiait.com/pago/" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Pines Scotiabank Colpatria</a></li>
            <li><a href="https://psedian.pse.com.co/PSEHostingUI/DIANTicketOffice.aspx?Banco=1019" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Pago impuestos DIAN</a></li>
            <li><a href="https://www.nuevosoi.com.co/inicio" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Pago Pila SOI</a></li>
            <li><a href="https://www.banco.scotiabankcolpatria.com/banca-virtual/login/" target="_blank" style="display: block; padding: 12px 20px; color: white; text-decoration: none; font-size: 13px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Extractos y certificaciones</a></li>
        </ul>
    `;
    
    const existingDropdown = document.querySelector('.login-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    dropdown.className = 'login-dropdown';
    this.parentElement.appendChild(dropdown);
    
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !document.getElementById('loginBtn').contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 100);
});

document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = this.querySelector('.search-input').value;
    if (query.trim()) {
        alert('Búsqueda: ' + query);

    }
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const mobileToggle = document.createElement('button');
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.cssText = `
            position: fixed;
            top: 15px;
            right: 20px;
            background: #e31e24;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            z-index: 1001;
            display: none;
        `;
        
        if (window.innerWidth <= 768) {
            mobileToggle.style.display = 'block';
            document.body.appendChild(mobileToggle);
            
            mobileToggle.addEventListener('click', function() {
                const nav = document.getElementById('productNav');
                if (nav.style.display === 'none') {
                    nav.style.display = 'block';
                    nav.style.position = 'fixed';
                    nav.style.top = '60px';
                    nav.style.left = '0';
                    nav.style.right = '0';
                    nav.style.zIndex = '1000';
                    nav.style.background = 'white';
                    nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                } else {
                    nav.style.display = 'none';
                }
            });
        }
    }
}

window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

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

document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
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
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
});