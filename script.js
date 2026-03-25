document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial theme
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        htmlElement.classList.add('dark');
        if(themeIcon) themeIcon.textContent = 'light_mode';
    } else {
        htmlElement.classList.remove('dark');
        if(themeIcon) themeIcon.textContent = 'dark_mode';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if(themeIcon) themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        });
    }

    // Custom Technical Cursor
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
        });

        document.querySelectorAll('a, button, .group').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('.material-symbols-outlined') : null;

    if (mobileMenuBtn && mobileMenu) {
        let isNavOpen = false;

        const toggleMenu = () => {
            isNavOpen = !isNavOpen;
            if (isNavOpen) {
                mobileMenu.classList.remove('max-h-0', 'opacity-0');
                mobileMenu.classList.add('max-h-[400px]', 'opacity-100');
                if (menuIcon) menuIcon.textContent = 'close';
            } else {
                mobileMenu.classList.remove('max-h-[400px]', 'opacity-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0');
                if (menuIcon) menuIcon.textContent = 'menu';
            }
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Close menu on link click
        document.querySelectorAll('.mobile-nav-link, #mobile-menu button').forEach(link => {
            link.addEventListener('click', () => {
                if (isNavOpen) toggleMenu();
            });
        });
    }

    // Scroll Spy Navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const activateLink = (id) => {
        navLinks.forEach(link => {
            // Remove active state classes completely
            link.classList.remove('text-primary', 'border-primary', 'font-semibold');
            
            // Reapply inactive state classes
            link.classList.add('text-on-surface-variant', 'border-transparent', 'font-medium');
            
            // Add active state if it matches the current section
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.remove('text-on-surface-variant', 'border-transparent', 'font-medium');
                link.classList.add('text-primary', 'border-primary', 'font-semibold');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateLink(entry.target.id);
            }
        });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
});
