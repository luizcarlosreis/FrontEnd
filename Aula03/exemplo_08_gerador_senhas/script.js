document.addEventListener('DOMContentLoaded', () => {
    const senhaGerada = document.getElementById('senhaGerada');
    const btnCopiar = document.getElementById('btnCopiar');
    const tamanhoRange = document.getElementById('tamanhoRange');
    const tamanhoValor = document.getElementById('tamanhoValor');
    const incluirSimbolos = document.getElementById('incluirSimbolos');
    const incluirNumeros = document.getElementById('incluirNumeros');
    const btnGerar = document.getElementById('btnGerar');

    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    function gerarSenha() {
        let caracteresPermitidos = letras;
        if (incluirNumeros.checked) caracteresPermitidos += numeros;
        if (incluirSimbolos.checked) caracteresPermitidos += simbolos;

        let senha = '';
        const tamanho = parseInt(tamanhoRange.value);

        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
            senha += caracteresPermitidos[indiceAleatorio];
        }

        senhaGerada.value = senha;
    }

    tamanhoRange.addEventListener('input', () => {
        tamanhoValor.textContent = tamanhoRange.value;
    });

    btnGerar.addEventListener('click', gerarSenha);

    btnCopiar.addEventListener('click', () => {
        if (!senhaGerada.value) return;
        
        navigator.clipboard.writeText(senhaGerada.value).then(() => {
            const textoOriginal = btnCopiar.textContent;
            btnCopiar.textContent = '✅ Copiado!';
            btnCopiar.className = 'btn btn-success';
            
            setTimeout(() => {
                btnCopiar.textContent = textoOriginal;
                btnCopiar.className = 'btn btn-outline-secondary';
            }, 2000);
        });
    });

    // Gerar uma senha logo ao carregar a página
    gerarSenha();
});
