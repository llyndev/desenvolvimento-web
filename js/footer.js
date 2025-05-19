// Script para atualizar o ano no rodapé

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com o ID 'current-year'
    const yearElements = document.querySelectorAll('#current-year');
    
    // Obtém o ano atual
    const currentYear = new Date().getFullYear();
    
    // Atualiza o conteúdo de cada elemento
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});