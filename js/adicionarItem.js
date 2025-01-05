import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const item = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById("lista-comprados");

export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    verificarListaComprados(listaComprados);
}
