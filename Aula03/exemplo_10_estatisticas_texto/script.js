document.addEventListener('DOMContentLoaded', () => {
    const textoInput = document.getElementById('textoInput');
    const statCaracteres = document.getElementById('statCaracteres');
    const statPalavras = document.getElementById('statPalavras');
    const statLinhas = document.getElementById('statLinhas');

    textoInput.addEventListener('input', () => {
        const texto = textoInput.value;

        // 1. Contagem de caracteres (length)
        const caracteres = texto.length;

        // 2. Contagem de palavras usando split com regex de espaços em branco
        const palavrasArray = texto.trim() === '' ? [] : texto.trim().split(/\s+/);
        const palavras = palavrasArray.length;

        // 3. Contagem de linhas usando split por quebra de linha
        const linhasArray = texto === '' ? [] : texto.split('\n');
        const linhas = linhasArray.length;

        // Atualizar interface
        statCaracteres.textContent = caracteres;
        statPalavras.textContent = palavras;
        statLinhas.textContent = linhas;
    });
});
