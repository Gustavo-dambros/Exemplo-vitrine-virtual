// Menu Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Simples toggle para demonstração
        alert('Menu mobile clicado! Em uma implementação real, isso abriria o menu lateral.');
    });
}

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Simulação de animação ao carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing Page Nail Designer carregada com sucesso!');
    
    // Adicionar um pequeno delay para mostrar os elementos
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        heroText.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 200);
    }
});
