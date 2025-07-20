
const modalOverlay = document.getElementById('modalOverlay');
const modalHeader = document.getElementById('modalHeader');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const modalData = {
    anguila: {
        title: '¿Qué ofrecemos en Anguila?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    antigua: {
        title: '¿Qué ofrecemos en Antigua y Barbuda?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    bahamas: {
        title: '¿Qué ofrecemos en Bahamas?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    barbados: {
        title: '¿Qué ofrecemos en Barbados?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    caiman: {
        title: '¿Qué ofrecemos en Islas Caimán?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    canada: {
        title: '¿Qué ofrecemos en Canadá?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Corretaje en línea</a>
            <a href="#">ScotiaFunds</a>
            <a href="#">Dynamic Funds</a>
            <a href="#">Scotia Institutional Asset Management</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Relaciones con los inversionistas</a>
        `
    },
    chile: {
        title: '¿Qué ofrecemos en Chile?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
        `
    },
    'costa-rica': {
        title: '¿Qué ofrecemos en Costa Rica?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
        `
    },
    curacao: {
        title: '¿Qué ofrecemos en Curazao?',
        content: `
            <a href="#">Información general</a>
        `
    },
    dominica: {
        title: '¿Qué ofrecemos en Dominica?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    'republica-dominicana': {
        title: '¿Qué ofrecemos en República Dominicana?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Microfinanciamiento</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Centro de prensa</a>
        `
    },
    granada: {
        title: '¿Qué ofrecemos en Granada?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    guyana: {
        title: '¿Qué ofrecemos en Guyana?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    jamaica: {
        title: '¿Qué ofrecemos en Jamaica?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    mexico: {
        title: '¿Qué ofrecemos en México?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Fondos Mutuos</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    panama: {
        title: '¿Qué ofrecemos en Panamá?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Centro de prensa</a>
        `
    },
    peru: {
        title: '¿Qué ofrecemos en Perú?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Corretaje</a>
            <a href="#">Fondos de Pensiones</a>
            <a href="#">Fondos Mutuos</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Microfinanciamiento</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    'san-kitts': {
        title: '¿Qué ofrecemos en San Kitts y Nevis?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    'san-martin': {
        title: '¿Qué ofrecemos en San Martín?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    'san-vicente': {
        title: '¿Qué ofrecemos en San Vicente y las Granadinas?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    'santa-lucia': {
        title: '¿Qué ofrecemos en Santa Lucía?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    trinidad: {
        title: '¿Qué ofrecemos en Trinidad y Tobago?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    turcas: {
        title: '¿Qué ofrecemos en Islas Turcas y Caicos?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Relaciones con los inversionistas</a>
            <a href="#">Centro de prensa</a>
        `
    },
    virgenes: {
        title: '¿Qué ofrecemos en Islas Vírgenes Británicas?',
        content: `
            <a href="#">Banca Personal</a>
            <a href="#">Gestión patrimonial</a>
            <a href="#">Seguros</a>
            <a href="#">Grandes y medianas empresas</a>
            <a href="#">Pequeñas empresas</a>
            <a href="#">Quiénes somos</a>
            <a href="#">Responsabilidad corporativa</a>
            <a href="#">Centro de prensa</a>
        `
    }
};

document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('disabled-country')) return;
        
        const modalId = this.getAttribute('data-modal');
        const data = modalData[modalId];
        
        if (data) {
            modalHeader.innerHTML = data.title;
            modalBody.innerHTML = data.content;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

document.querySelector('.skip-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('main').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        this.innerHTML += ' <i class="fas fa-spinner fa-spin"></i>';
    });
});

document.querySelectorAll('.country-button, .country-link').forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

let focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function trapFocus(element) {
    let focusableContent = element.querySelectorAll(focusableElements);
    let firstFocusableElement = focusableContent[0];
    let lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });
}

const originalActiveElement = document.activeElement;
modalOverlay.addEventListener('transitionend', function() {
    if (this.classList.contains('active')) {
        trapFocus(this);
        modalClose.focus();
    }
});

modalOverlay.addEventListener('transitionend', function() {
    if (!this.classList.contains('active')) {
        if (originalActiveElement) {
            originalActiveElement.focus();
        }
    }
});

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Volver arriba');
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #ED0722;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                transition: all 0.3s;
            `;
            
            scrollBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.background = '#c40619';
                this.style.transform = 'scale(1.1)';
            });
            
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.background = '#ED0722';
                this.style.transform = 'scale(1)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});