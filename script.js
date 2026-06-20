document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('mobile-active');
            
            // Toggle hamburger icon between menu and close
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('mobile-active')) {
                    icon.className = 'ri-close-line';
                } else {
                    icon.className = 'ri-menu-line';
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('mobile-active') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'ri-menu-line';
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'ri-menu-line';
            });
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .slide-left-reveal, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve once animated to keep performance clean
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Count-up animation for numbers (Progressive Enhancement)
    const countUpElements = document.querySelectorAll('.count-up');
    
    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 1500; // 1.5 seconds duration
                const startTime = performance.now();
                
                const animateCount = (now) => {
                    const progress = Math.min((now - startTime) / duration, 1);
                    const easeProgress = progress * (2 - progress); // Ease out quad
                    const currentValue = Math.floor(easeProgress * target);
                    
                    el.textContent = currentValue + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        el.textContent = target + suffix;
                    }
                };
                
                requestAnimationFrame(animateCount);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1
    });

    countUpElements.forEach(el => {
        const suffix = el.getAttribute('data-suffix') || '';
        el.textContent = '0' + suffix;
        countUpObserver.observe(el);
    });

    // Sticky Navbar Style Update on Scroll
    const navbar = document.querySelector('.navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Run once in case page starts scrolled

    // Active Nav Link Tracking based on Scroll Position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150; // offset for nav bar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scroll for Internal Links (redundancy check)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax scroll effect for products/metrics mockups and cards
    const parallaxElements = document.querySelectorAll('.parallax-scroll');
    
    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            
            // Check if element is in viewport
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
                // Calculate scroll progress through viewport (0 to 1)
                const scrollProgress = (scrolled + windowHeight - elementTop) / (windowHeight + elementHeight);
                // Apply subtle parallax movement (using offset and easing)
                const speed = parseFloat(el.getAttribute('data-speed')) || 0.15;
                const yTranslation = (scrollProgress - 0.5) * 120 * speed;
                el.style.transform = `translateY(${yTranslation}px)`;
            }
        });
    };

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleParallax);
    handleParallax(); // Run once on load
});
