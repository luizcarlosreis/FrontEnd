document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const feedbackTexto = document.getElementById('feedbackTexto');
    const btnEnviar = document.getElementById('btnEnviar');

    const descricoes = [
        "",
        "1 - Insatisfatório",
        "2 - Regular",
        "3 - Bom",
        "4 - Muito Bom",
        "5 - Excelente!"
    ];

    let notaSelecionada = 0;

    stars.forEach(star => {
        // Evento mouseover: ilumina as estrelas até a atual
        star.addEventListener('mouseover', () => {
            const valor = parseInt(star.getAttribute('data-value'));
            destacarEstrelas(valor);
            feedbackTexto.textContent = descricoes[valor];
        });

        // Evento mouseout: restaura para a nota fixa ou limpa
        star.addEventListener('mouseout', () => {
            if (notaSelecionada > 0) {
                destacarEstrelas(notaSelecionada);
                feedbackTexto.textContent = descricoes[notaSelecionada];
            } else {
                limparDestaque();
                feedbackTexto.textContent = 'Clique em uma estrela para avaliar';
            }
        });

        // Evento click: fixa a nota escolhida
        star.addEventListener('click', () => {
            notaSelecionada = parseInt(star.getAttribute('data-value'));
            destacarEstrelas(notaSelecionada);
            feedbackTexto.textContent = 'Avaliação registrada: ' + descricoes[notaSelecionada];
            btnEnviar.classList.remove('d-none');
        });
    });

    function destacarEstrelas(valor) {
        stars.forEach(s => {
            const v = parseInt(s.getAttribute('data-value'));
            if (v <= valor) {
                s.classList.add('hover');
            } else {
                s.classList.remove('hover');
            }
        });
    }

    function limparDestaque() {
        stars.forEach(s => {
            s.classList.remove('hover');
        });
    }

    btnEnviar.addEventListener('click', () => {
        alert(`Obrigado! Sua nota ${notaSelecionada} foi enviada com sucesso.`);
    });
});
