document.addEventListener('DOMContentLoaded', () => {
    const displayTempo = document.getElementById('displayTempo');
    const btnIniciar = document.getElementById('btnIniciar');
    const btnPausar = document.getElementById('btnPausar');
    const btnZerar = document.getElementById('btnZerar');

    let segundosTotais = 0;
    let intervalo = null;
    let rodando = false;

    function formatarTempo(segundos) {
        const hrs = Math.floor(segundos / 3600);
        const mins = Math.floor((segundos % 3600) / 60);
        const secs = segundos % 60;

        return (
            String(hrs).padStart(2, '0') + ':' +
            String(mins).padStart(2, '0') + ':' +
            String(secs).padStart(2, '0')
        );
    }

    btnIniciar.addEventListener('click', () => {
        if (!rodando) {
            rodando = true;
            btnIniciar.disabled = true;
            btnPausar.disabled = false;

            // Uso prático de setInterval para incrementar o tempo a cada 1 segundo
            intervalo = setInterval(() => {
                segundosTotais++;
                displayTempo.textContent = formatarTempo(segundosTotais);
            }, 1000);
        }
    });

    btnPausar.addEventListener('click', () => {
        if (rodando) {
            rodando = false;
            clearInterval(intervalo); // Interrompe o temporizador
            btnIniciar.disabled = false;
            btnPausar.disabled = true;
        }
    });

    btnZerar.addEventListener('click', () => {
        rodando = false;
        clearInterval(intervalo);
        segundosTotais = 0;
        displayTempo.textContent = formatarTempo(segundosTotais);
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
    });
});
