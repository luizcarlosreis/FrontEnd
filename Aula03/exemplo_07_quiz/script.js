document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos contendo as perguntas do quiz
    const perguntas = [
        {
            pergunta: "Qual linguagem é responsável pela estruturação do conteúdo de uma página web?",
            opcoes: ["JavaScript", "HTML", "CSS", "Python"],
            correta: 1
        },
        {
            pergunta: "Qual palavra-chave foi introduzida no ES6 para declarar variáveis com escopo de bloco?",
            opcoes: ["var", "let", "global", "constant-var"],
            correta: 1
        },
        {
            pergunta: "O que significa a sigla DOM no contexto de desenvolvimento web?",
            opcoes: ["Document Object Model", "Data Oriented Management", "Digital Online Method", "Dynamic Object Module"],
            correta: 0
        }
    ];

    let indiceAtual = 0;
    let pontuacao = 0;

    const perguntaTexto = document.getElementById('perguntaTexto');
    const opcoesContainer = document.getElementById('opcoesContainer');
    const btnProximo = document.getElementById('btnProximo');
    const contadorQuestao = document.getElementById('contadorQuestao');
    const quizContainer = document.getElementById('quizContainer');
    const resultadoContainer = document.getElementById('resultadoContainer');
    const pontuacaoFinal = document.getElementById('pontuacaoFinal');
    const btnReiniciar = document.getElementById('btnReiniciar');

    function carregarPergunta() {
        const questaoAtual = perguntas[indiceAtual];
        contadorQuestao.textContent = `Questão ${indiceAtual + 1} de ${perguntas.length}`;
        perguntaTexto.textContent = questaoAtual.pergunta;
        opcoesContainer.innerHTML = '';
        btnProximo.classList.add('d-none');

        questaoAtual.opcoes.forEach((opcao, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline-secondary btn-opcao';
            btn.textContent = opcao;
            
            btn.onclick = () => selecionarResposta(index, questaoAtual.correta);
            opcoesContainer.appendChild(btn);
        });
    }

    function selecionarResposta(indiceSelecionado, indiceCorreto) {
        const botoes = opcoesContainer.querySelectorAll('button');

        botoes.forEach((btn, index) => {
            btn.disabled = true; // Desativa todos os botões após a escolha
            if (index === indiceCorreto) {
                btn.classList.remove('btn-outline-secondary');
                btn.classList.add('btn-success');
            } else if (index === indiceSelecionado) {
                btn.classList.remove('btn-outline-secondary');
                btn.classList.add('btn-danger');
            }
        });

        if (indiceSelecionado === indiceCorreto) {
            pontuacao++;
        }

        btnProximo.classList.remove('d-none');
    }

    btnProximo.addEventListener('click', () => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            carregarPergunta();
        } else {
            // Mostrar tela de resultado
            quizContainer.classList.add('d-none');
            resultadoContainer.classList.remove('d-none');
            pontuacaoFinal.textContent = pontuacao;
        }
    });

    btnReiniciar.addEventListener('click', () => {
        indiceAtual = 0;
        pontuacao = 0;
        resultadoContainer.classList.add('d-none');
        quizContainer.classList.remove('d-none');
        carregarPergunta();
    });

    carregarPergunta();
});
