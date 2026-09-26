document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('formCadastro');

    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Verificar se o formulário é válido usando a API nativa de validação do HTML5
        if (formCadastro.checkValidity() === false) {
            formCadastro.classList.add('was-validated');
        } else {
            formCadastro.classList.add('was-validated');
            alert('Formulário validado com sucesso! Dados prontos para envio.');
        }
    });
});
