// Script para carregar os projetos do portfólio dinamicamente

document.addEventListener('DOMContentLoaded', function() {
    // Array de projetos para o portfólio
    const projects = [
        {
            id: 1,
            title: "Site de Veículos",
            description: "Um site de veículos completo com catálogo de veículos, visualizar lista de carros e Adicionar, editar e excluir anúncios de carros.",
            technologies: ["Python", "Django", "HTML", "CSS"],
            imageUrl: "../image/carro.png",
            link: "https://github.com/llyndev/project-car"
        },
        {
            id: 2,
            title: "Aplicativo de Backup",
            description: "Um aplicativo para gerenciamento de backup para formatação de computador",
            technologies: ["Python"],
            imageUrl: "../image/backup.png",
            link: "https://github.com/llyndev/formatar"
        },
    ];

    // Seleciona o elemento onde os projetos serão inseridos
    const projectGrid = document.getElementById('project-grid');

    // Cria e insere os elementos HTML para cada projeto
    projects.forEach(project => {
        // Cria o elemento do cartão do projeto
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Cria o HTML interno do cartão
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.imageUrl}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">Ver Projeto</a>
            </div>
        `;

        // Adiciona o cartão ao grid de projetos
        projectGrid.appendChild(projectCard);
    });
});