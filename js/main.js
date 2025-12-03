// --- CONTROLE DO MENU MOBILE ---
function menuShow() {
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        // Opcional: Mudar ícone para menu hamburguer
    } else {
        mobileMenu.classList.add('open');
        // Opcional: Mudar ícone para 'X' de fechar
    }
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('open');
    });
});


// --- ANIMAÇÃO DE SCROLL (FADE-IN) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Ativa quando 10% do elemento está visível
});

// Seleciona todos os elementos que devem ter a animação
const elementsToAnimate = document.querySelectorAll('.fade-in');
elementsToAnimate.forEach(el => observer.observe(el));
