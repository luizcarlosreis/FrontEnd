document.addEventListener('DOMContentLoaded', () => {
    const formItem = document.getElementById('formItem');
    const inputItem = document.getElementById('inputItem');
    const listaCompras = document.getElementById('listaCompras');
    const contadorItens = document.getElementById('contadorItens');

    let itens = [];

    function renderizarLista() {
        listaCompras.innerHTML = '';

        if (itens.length === 0) {
            listaCompras.innerHTML = '<li class="list-group-item text-center text-muted py-3">Sua lista está vazia.</li>';
            contadorItens.textContent = '0 itens';
            return;
        }

        contadorItens.textContent = itens.length + (itens.length === 1 ? ' item' : ' itens');

        itens.forEach((nomeItem, index) => {
            // Criação de elementos via DOM (createElement e appendChild)
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center py-3';

            const span = document.createElement('span');
            span.textContent = nomeItem;
            span.className = 'fw-medium';

            const btnRemover = document.createElement('button');
            btnRemover.className = 'btn btn-sm btn-outline-danger';
            btnRemover.textContent = 'Remover';
            
            // Evento para remover o item específico do array e atualizar a interface
            btnRemover.onclick = () => {
                itens.splice(index, 1);
                renderizarLista();
            };

            li.appendChild(span);
            li.appendChild(btnRemover);
            listaCompras.appendChild(li);
        });
    }

    formItem.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = inputItem.value.trim();

        if (texto !== '') {
            itens.push(texto);
            inputItem.value = '';
            inputItem.focus();
            renderizarLista();
        }
    });

    renderizarLista();
});
