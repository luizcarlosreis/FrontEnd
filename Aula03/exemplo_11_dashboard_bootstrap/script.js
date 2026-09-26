document.addEventListener('DOMContentLoaded', () => {
    const btnAtualizar = document.getElementById('btnAtualizar');
    const cardAlunos = document.getElementById('cardAlunos');
    const cardPresenca = document.getElementById('cardPresenca');
    const cardMedia = document.getElementById('cardMedia');
    const cardPendentes = document.getElementById('cardPendentes');
    const tabelaAlunosCorpo = document.getElementById('tabelaAlunosCorpo');

    const entregasIniciais = [
        { aluno: "Mariana Souza", projeto: "Exemplo 01 - Validador de Senha", data: "10/09/2026", status: "Aprovado", nota: 10.0 },
        { aluno: "Carlos Eduardo", projeto: "Exemplo 02 - Dark Mode", data: "11/09/2026", status: "Aprovado", nota: 9.5 },
        { aluno: "Fernanda Lima", projeto: "Exemplo 06 - Cronômetro", data: "12/09/2026", status: "Em Revisão", nota: 8.0 },
        { aluno: "Lucas Rocha", projeto: "Exemplo 07 - Quiz Interativo", data: "12/09/2026", status: "Aprovado", nota: 9.0 }
    ];

    function preencherTabela(itens) {
        tabelaAlunosCorpo.innerHTML = '';
        itens.forEach(item => {
            const tr = document.createElement('tr');
            
            const badgeClasse = item.status === 'Aprovado' 
                ? 'bg-success-subtle text-success border border-success' 
                : 'bg-warning-subtle text-warning border border-warning';

            tr.innerHTML = `
                <td class="ps-4 fw-semibold">${item.aluno}</td>
                <td>${item.projeto}</td>
                <td class="text-muted small">${item.data}</td>
                <td><span class="badge ${badgeClasse}">${item.status}</span></td>
                <td class="text-end pe-4 fw-bold text-primary">${item.nota.toFixed(1)}</td>
            `;
            tabelaAlunosCorpo.appendChild(tr);
        });
    }

    btnAtualizar.addEventListener('click', () => {
        // Simulação dinâmica de atualização de métricas
        const novosAlunos = Math.floor(120 + Math.random() * 20);
        const novaPresenca = (90 + Math.random() * 8).toFixed(1);
        const novaMedia = (7.5 + Math.random() * 2).toFixed(1);
        const novasPendentes = Math.floor(5 + Math.random() * 15);

        cardAlunos.textContent = novosAlunos;
        cardPresenca.textContent = novaPresenca + '%';
        cardMedia.textContent = novaMedia;
        cardPendentes.textContent = novasPendentes;

        alert('Métricas do Dashboard sincronizadas com sucesso!');
    });

    preencherTabela(entregasIniciais);
});
