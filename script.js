const item = document.getElementById('input-item').value;
const salvarItem = document.getElementById('adicionar-botao');

salvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    

    itemDaLista.appendChild(containerItemLista);
}