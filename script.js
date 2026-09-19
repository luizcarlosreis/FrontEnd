document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('senhaInput');
    const toggleSenha = document.getElementById('toggleSenha');
    const barraForca = document.getElementById('barraForca');
    const textoForca = document.getElementById('textoForca');
    
    const reqTamanho = document.getElementById('reqTamanho');
    const reqNumero = document.getElementById('reqNumero');
    const reqEspecial = document.getElementById('reqEspecial');

    // Alternar visibilidade da senha
    toggleSenha.addEventListener('click', () => {
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            toggleSenha.textContent = ' ocultar ';
        } else {
            senhaInput.type = 'password';
            toggleSenha.textContent = '👁️';
        }
    });

    // Validar em tempo real no evento input
    senhaInput.addEventListener('input', () => {
        const valor = senhaInput.value;

        // Critérios individuais
        const temTamanho = valor.length >= 8;
        const temNumero = /[0-9]/.test(valor);
        const temEspecial = /[^A-Za-z0-9]/.test(valor);

        // Atualizar lista visual de requisitos
        atualizarRequisito(reqTamanho, temTamanho, 'Pelo menos 8 caracteres');
        atualizarRequisito(reqNumero, temNumero, 'Pelo menos um número (0-9)');
        atualizarRequisito(reqEspecial, temEspecial, 'Pelo menos um caractere especial (!@#$%^&*)');

        // Calcular pontuação de força (0 a 3)
        let pontuacao = 0;
        if (temTamanho) pontuacao++;
        if (temNumero) pontuacao++;
        if (temEspecial) pontuacao++;

        // Atualizar barra de progresso e texto
        if (valor.length === 0) {
            barraForca.style.width = '0%';
            barraForca.className = 'progress-bar';
            textoForca.innerHTML = 'Força da senha: <strong>Aguardando entrada...</strong>';
        } else if (pontuacao === 1) {
            barraForca.style.width = '33%';
            barraForca.className = 'progress-bar bg-danger';
            textoForca.innerHTML = 'Força da senha: <span class="text-danger fw-bold">Fraca</span>';
        } else if (pontuacao === 2) {
            barraForca.style.width = '66%';
            barraForca.className = 'progress-bar bg-warning';
            textoForca.innerHTML = 'Força da senha: <span class="text-warning fw-bold">Média</span>';
        } else if (pontuacao === 3) {
            barraForca.style.width = '100%';
            barraForca.className = 'progress-bar bg-success';
            textoForca.innerHTML = 'Força da senha: <span class="text-success fw-bold">Forte</span>';
        }
    });

    function atualizarRequisito(elemento, valido, texto) {
        if (valido) {
            elemento.textContent = '✔ ' + texto;
            elemento.className = 'list-group-item text-success fw-semibold';
        } else {
            elemento.textContent = '❌ ' + texto;
            elemento.className = 'list-group-item text-muted';
        }
    }
});
