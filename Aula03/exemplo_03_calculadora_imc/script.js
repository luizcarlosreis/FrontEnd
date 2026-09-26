document.addEventListener('DOMContentLoaded', () => {
    const formImc = document.getElementById('formImc');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoArea = document.getElementById('resultadoArea');
    const valorImcSpan = document.getElementById('valorImc');
    const classificacaoP = document.getElementById('classificacaoImc');

    formImc.addEventListener('submit', (e) => {
        e.preventDefault();

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || altura <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        // Cálculo do IMC: Peso / (Altura * Altura)
        const imc = peso / (altura * altura);
        const imcArredondado = imc.toFixed(2);

        valorImcSpan.textContent = imcArredondado;
        resultadoArea.classList.remove('d-none');

        // Determinar classificação e cor do feedback visual
        let texto = '';
        let corClasse = '';

        if (imc < 18.5) {
            texto = 'Abaixo do peso';
            corClasse = 'alert alert-warning';
        } else if (imc >= 18.5 && imc < 24.9) {
            texto = 'Peso normal (Eutrofia)';
            corClasse = 'alert alert-success';
        } else if (imc >= 25 && imc < 29.9) {
            texto = 'Sobrepeso';
            corClasse = 'alert alert-warning';
        } else if (imc >= 30 && imc < 34.9) {
            texto = 'Obesidade Grau I';
            corClasse = 'alert alert-danger';
        } else if (imc >= 35 && imc < 39.9) {
            texto = 'Obesidade Grau II';
            corClasse = 'alert alert-danger';
        } else {
            texto = 'Obesidade Grau III (Mórbida)';
            corClasse = 'alert alert-dark text-white';
        }

        resultadoArea.className = 'mt-4 p-3 rounded text-center ' + corClasse;
        classificacaoP.textContent = 'Classificação: ' + texto;
    });
});
