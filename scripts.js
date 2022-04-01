function ativarSelecao (elementoClicado) {

    let divPai = elementoClicado.parentElement;

    if (divPai.querySelector(".borda-item-selecionado") !== null) {
        divPai.querySelector(".borda-item-selecionado").classList.remove("borda-item-selecionado");
    }

    elementoClicado.classList.add("borda-item-selecionado");
}