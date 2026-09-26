document.addEventListener('DOMContentLoaded', () => {
    const btnDeletar = document.getElementById('btnDeletar');
    const btnConfirmarExclusao = document.getElementById('btnConfirmarExclusao');
    const mensagemStatus = document.getElementById('mensagemStatus');

    // Instanciação programática do Modal do Bootstrap
    const meuModalElement = document.getElementById('modalConfirmacao');
    const meuModal = new bootstrap.Modal(meuModalElement);

    // Ao clicar no botão de deletar, abrimos o modal programaticamente
    btnDeletar.addEventListener('click', () => {
        meuModal.show();
    });

    // Ao confirmar no modal, executamos a ação crítica
    btnConfirmarExclusao.addEventListener('click', () => {
        meuModal.hide(); // Fecha o modal
        
        mensagemStatus.classList.remove('d-none');
        btnDeletar.disabled = true;

        setTimeout(() => {
            mensagemStatus.classList.add('d-none');
            btnDeletar.disabled = false;
        }, 4000);
    });

    // Event listener nativo do Bootstrap para quando o modal for totalmente fechado
    meuModalElement.addEventListener('hidden.bs.modal', (event) => {
        console.log('O modal de confirmação foi fechado pelo usuário.');
    });
});
