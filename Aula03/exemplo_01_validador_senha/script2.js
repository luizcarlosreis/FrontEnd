document.getElementById('formNota').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = this;

    // Validação visual nativa do Bootstrap
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    // Coleta dos dados dos inputs
    const nome = document.getElementById('nomeAluno').value.trim();
    const disciplina = document.getElementById('disciplina').value.trim();
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);

    // Consistência extra de limites das notas
    if ([n1, n2, n3].some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
        alert('Todas as notas devem estar compreendidas entre 0 e 10.');
        return;
    }

    // Cálculo da média aritmética
    const media = (n1 + n2 + n3) / 3;

    // Definição do Status de acordo com a média
    let statusBadge = '';
    if (media >= 7.0) {
        statusBadge = '<span class="badge bg-success">Aprovado</span>';
    } else if (media >= 5.0) {
        statusBadge = '<span class="badge bg-warning text-dark">Recuperação</span>';
    } else {
        statusBadge = '<span class="badge bg-danger">Reprovado</span>';
    }

    // Inserção na Tabela
    const tbody = document.querySelector('#tabelaAlunos tbody');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${escapeHtml(nome)}</td>
        <td>${escapeHtml(disciplina)}</td>
        <td>${n1.toFixed(1)}</td>
        <td>${n2.toFixed(1)}</td>
        <td>${n3.toFixed(1)}</td>
        <td><strong>${media.toFixed(1)}</strong></td>
        <td>${statusBadge}</td>
        <td>
            <button class="btn btn-sm btn-outline-danger" onclick="removerLinha(this)">Excluir</button>
        </td>
    `;

    tbody.appendChild(novaLinha);

    // Reseta o formulário e limpa as classes de validação
    form.reset();
    form.classList.remove('was-validated');
});

// Função auxiliar para remover linha da tabela
function removerLinha(botao) {
    const linha = botao.closest('tr');
    linha.remove();
}

// Função simples para evitar injeção de HTML (XSS básico)
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}