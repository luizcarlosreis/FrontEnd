document.addEventListener('DOMContentLoaded', () => {
    const formTarefa = document.getElementById('formTarefa');
    const inputTarefa = document.getElementById('inputTarefa');
    const listaTarefas = document.getElementById('listaTarefas');
    const btnLimpar = document.getElementById('btnLimpar');
    const badgeContador = document.getElementById('badgeContador');

    // Recuperar tarefas do localStorage ou iniciar array vazio
    let tarefas = JSON.parse(localStorage.getItem('minhas_tarefas')) || [];

    function salvarERenderizar() {
        localStorage.setItem('minhas_tarefas', JSON.stringify(tarefas));
        renderizarTarefas();
    }

    function renderizarTarefas() {
        listaTarefas.innerHTML = '';

        if (tarefas.length === 0) {
            listaTarefas.innerHTML = '<li class="list-group-item text-center text-muted py-3">Nenhuma tarefa cadastrada.</li>';
            badgeContador.textContent = '0 tarefas';
            return;
        }

        badgeContador.textContent = tarefas.length + (tarefas.length === 1 ? ' tarefa' : ' tarefas');

        tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center py-3';

            const span = document.createElement('span');
            span.textContent = tarefa.texto;
            if (tarefa.concluida) {
                span.className = 'tarefa-concluida fw-medium';
            } else {
                span.className = 'fw-medium';
            }

            const divBotoes = document.createElement('div');

            // Botão Concluir/Desfazer
            const btnConcluir = document.createElement('button');
            btnConcluir.className = 'btn btn-sm ' + (tarefa.concluida ? 'btn-outline-secondary' : 'btn-outline-success') + ' me-2';
            btnConcluir.textContent = tarefa.concluida ? 'Desfazer' : 'Concluir';
            btnConcluir.onclick = () => {
                tarefas[index].concluida = !tarefas[index].concluida;
                salvarERenderizar();
            };

            // Botão Excluir
            const btnExcluir = document.createElement('button');
            btnExcluir.className = 'btn btn-sm btn-outline-danger';
            btnExcluir.textContent = 'Excluir';
            btnExcluir.onclick = () => {
                tarefas.splice(index, 1);
                salvarERenderizar();
            };

            divBotoes.appendChild(btnConcluir);
            divBotoes.appendChild(btnExcluir);

            li.appendChild(span);
            li.appendChild(divBotoes);
            listaTarefas.appendChild(li);
        });
    }

    formTarefa.addEventListener('submit', (e) => {
        e.preventDefault();
        const textoTrim = inputTarefa.value.trim();

        if (textoTrim !== '') {
            tarefas.push({ texto: textoTrim, concluida: false });
            inputTarefa.value = '';
            inputTarefa.focus();
            salvarERenderizar();
        }
    });

    btnLimpar.addEventListener('click', () => {
        if (confirm('Deseja realmente apagar todas as tarefas salvas?')) {
            tarefas = [];
            salvarERenderizar();
        }
    });

    // Render inicial ao carregar a página
    renderizarTarefas();
});
