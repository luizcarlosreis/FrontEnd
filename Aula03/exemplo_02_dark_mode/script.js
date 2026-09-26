document.addEventListener('DOMContentLoaded', () => {
    const toggleTema = document.getElementById('toggleTema');
    const htmlElement = document.documentElement;
    const btnAcao = document.getElementById('btnAcao');

    // 1. Verificar se já existe preferência salva no LocalStorage
    const temaSalvo = localStorage.getItem('tema_preferido');
    
    if (temaSalvo) {
        htmlElement.setAttribute('data-theme', temaSalvo);
        atualizarBotao(temaSalvo);
    }

    // 2. Ouvir clique no botão de alternância
    toggleTema.addEventListener('click', () => {
        const temaAtual = htmlElement.getAttribute('data-theme');
        
        if (temaAtual === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('tema_preferido', 'light');
            atualizarBotao('light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('tema_preferido', 'dark');
            atualizarBotao('dark');
        }
    });

    function atualizarBotao(tema) {
        if (tema === 'dark') {
            toggleTema.textContent = '☀️ Modo Claro';
            toggleTema.className = 'btn btn-outline-light btn-sm px-3';
        } else {
            toggleTema.textContent = '🌙 Modo Escuro';
            toggleTema.className = 'btn btn-outline-primary btn-sm px-3';
        }
    }

    btnAcao.addEventListener('click', () => {
        alert('Tema atual salvo no LocalStorage com sucesso!');
    });
});
