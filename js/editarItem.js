import { criarDataHora } from "./criarDataHora.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtt = elemento.querySelector("#item-titulo");
        itemTextoAtt.textContent = novoItem;
        
        const estavaComprado = elemento.querySelector(".checkbox-input").checked;

        if(estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classlist.add("checked");
            itemTextoAtt.style.textDecoration = "line-through";
        }
        const dataAtualizada = elemento.querySelector(".item-lista-texto");
        dataAtualizada.textContent = criarDataHora();
    }
}