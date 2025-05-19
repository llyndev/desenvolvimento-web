// Script para controlar o menu de navegação em dispositivos móveis

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Adiciona o evento de clique ao botão do menu
    menuButton.addEventListener('click', function() {
        // Alterna a classe 'active' no menu de navegação
        nav.classList.toggle('active');
        
        // Alterna o ícone do menu (opcional - para animação do ícone)
        menuButton.classList.toggle('active');
        
        // Verifica se o menu está aberto para ajustar a acessibilidade
        const isExpanded = nav.classList.contains('active');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });
    
    // Fecha o menu quando um link é clicado
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se estamos em uma tela pequena antes de fechar o menu
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Fecha o menu quando clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuButton && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuButton.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Ajusta o menu quando a janela é redimensionada
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuButton.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});