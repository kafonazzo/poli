document.addEventListener('DOMContentLoaded', () => {

    /* ================= Navbar + Scroll ================= */
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menu-toggle');

    const updateNavbarOnScroll = () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.scrollY > heroBottom - 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    updateNavbarOnScroll();
    window.addEventListener('scroll', updateNavbarOnScroll);

    /* =============== Menu mobile toggle ================= */
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

    /* ================= Scroll fluido ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ================= Inizializzazione AOS ================= */
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    /* ================= Swiper ================= */
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /* ================= Caroselli interni galleria ================= */
    document.querySelectorAll('.gallery-carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        let index = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                index = (index > 0) ? index - 1 : slides.length - 1;
                updateCarousel();
            });
            nextBtn.addEventListener('click', () => {
                index = (index < slides.length - 1) ? index + 1 : 0;
                updateCarousel();
            });
        }

        // swipe touch su mobile
        let startX = 0;
        track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        track.addEventListener('touchend', e => {
            let endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) { // swipe left
                index = (index < slides.length - 1) ? index + 1 : 0;
                updateCarousel();
            } else if (endX - startX > 50) { // swipe right
                index = (index > 0) ? index - 1 : slides.length - 1;
                updateCarousel();
            }
        });

        // inizializza
        updateCarousel();
    });

    /* ================= Cookie banner ================= */
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    const hideBanner = () => {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 600);
    };

    const showBanner = () => {
        banner.style.display = 'flex';
        setTimeout(() => banner.classList.add('show'), 50);
    };

    if (banner && acceptBtn) {
        if (localStorage.getItem('cookieAccepted') !== 'true') {
            showBanner();
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieAccepted', 'true');
            hideBanner();
        });
    }

});