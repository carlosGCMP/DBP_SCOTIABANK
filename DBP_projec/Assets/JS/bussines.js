
     const showMegaMenu = document.getElementById('showMegaMenu');
        const mainMenu = document.getElementById('mainMenu');
        const searchFormMobile = document.querySelector('.searchForm.mobile');
        const headerCtaMobile = document.querySelector('.headerCta.mobile');

        if (showMegaMenu) {
            showMegaMenu.addEventListener('click', function(e) {
                e.preventDefault();
                
                mainMenu.classList.toggle('show');
                searchFormMobile.style.display = mainMenu.classList.contains('show') ? 'flex' : 'none';
                headerCtaMobile.style.display = mainMenu.classList.contains('show') ? 'flex' : 'none';
                
                this.classList.toggle('active');
            });
        }

        const siteTabsSelect = document.getElementById('siteTabsSelect');
        if (siteTabsSelect) {
            siteTabsSelect.addEventListener('change', function() {
                const selectedOption = this.options[this.selectedIndex];
                const href = selectedOption.getAttribute('data-href');
                if (href) {
                    window.location.href = href;
                }
            });
        }

        const searchForms = document.querySelectorAll('.searchForm');
        searchForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = this.querySelector('.txtSearch').value.trim();
                if (query) {
                    console.log('Searching for:', query);
                }
            });
        });

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

        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
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

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        let lastScrollTop = 0;
        const header = document.getElementById('siteHeader');
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
        header.style.transition = 'transform 0.3s ease-in-out';
        function handleResize() {
            const isMobile = window.innerWidth <= 768;
            
            if (!isMobile) {
                mainMenu.classList.remove('show');
                searchFormMobile.style.display = 'none';
                headerCtaMobile.style.display = 'none';
                showMegaMenu.classList.remove('active');
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();