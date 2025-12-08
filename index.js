const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
        
burgerMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Анимация бургер-меню
    const lines = burgerMenu.querySelectorAll('.burger-line');
    if (mobileMenu.classList.contains('active')) {
        lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        lines[0].style.transform = 'rotate(0) translate(0, 0)';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'rotate(0) translate(0, 0)';
    }
});

// Закрытие мобильного меню при клике на ссылку
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const lines = burgerMenu.querySelectorAll('.burger-line');
        lines[0].style.transform = 'rotate(0) translate(0, 0)';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'rotate(0) translate(0, 0)';
    });
});