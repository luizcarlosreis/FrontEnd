document.addEventListener('DOMContentLoaded', () => {
    const formClima = document.getElementById('formClima');
    const inputCidade = document.getElementById('inputCidade');
    const loadingArea = document.getElementById('loadingArea');
    const resultadoClima = document.getElementById('resultadoClima');
    
    const nomeCidadeDisplay = document.getElementById('nomeCidadeDisplay');
    const condicaoDisplay = document.getElementById('condicaoDisplay');
    const temperaturaDisplay = document.getElementById('temperaturaDisplay');
    const umidadeDisplay = document.getElementById('umidadeDisplay');
    const ventoDisplay = document.getElementById('ventoDisplay');

    formClima.addEventListener('submit', (e) => {
        e.preventDefault();
        const cidade = inputCidade.value.trim();

        if (cidade === '') return;

        // 1. Ocultar resultado anterior e exibir spinner de loading
        resultadoClima.classList.add('d-none');
        loadingArea.classList.remove('d-none');

        // 2. Simular atraso assíncrono de rede com setTimeout (2 segundos)
        setTimeout(() => {
            // Gerar valores simulados realistas baseados na cidade digitada
            const tempSimulada = Math.floor(18 + Math.random() * 15);
            const umidadeSimulada = Math.floor(40 + Math.random() * 40);
            const ventoSimulado = Math.floor(8 + Math.random() * 20);
            
            const condicoes = ['Ensolarado ☀️', 'Parcialmente Nublado ⛅', 'Chuvoso 🌧️', 'Nublado ☁️'];
            const condicaoSimulada = condicoes[Math.floor(Math.random() * condicoes.length)];

            // Preencher os dados na interface
            nomeCidadeDisplay.textContent = cidade.charAt(0).toUpperCase() + cidade.slice(1);
            condicaoDisplay.textContent = condicaoSimulada;
            temperaturaDisplay.textContent = tempSimulada + '°C';
            umidadeDisplay.textContent = umidadeSimulada + '%';
            ventoDisplay.textContent = ventoSimulado + ' km/h';

            // 3. Ocultar loading e exibir card de resultado
            loadingArea.classList.add('d-none');
            resultadoClima.classList.remove('d-none');
        }, 2000);
    });
});
