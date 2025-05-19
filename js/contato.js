// Script para gerenciar o formulário de contato

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário e o elemento de mensagem de status
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    // Adiciona o evento de envio ao formulário
    contactForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples
        if (!nome || !email || !mensagem) {
            showStatusMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }

        // Validação de email
        if (!isValidEmail(email)) {
            showStatusMessage('Por favor, insira um endereço de email válido.', 'error');
            return;
        }

        // Simulação de envio bem-sucedido
        // Em um caso real, aqui você faria uma chamada a uma API ou servidor
        showStatusMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');

        // Limpa o formulário após envio bem-sucedido
        contactForm.reset();
    });

    // Função para validar o formato do email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para exibir mensagens de status
    function showStatusMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = 'status-message ' + type;
        
        // Rola a página até a mensagem
        statusMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Limpa a mensagem após alguns segundos (apenas para mensagens de sucesso)
        if (type === 'success') {
            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.className = 'status-message';
            }, 5000);
        }
    }
});