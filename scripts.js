function ativarSelecao (elementoClicado) {

    let divPai = elementoClicado.parentElement;

    if (divPai.querySelector(".borda-item-selecionado") !== null) {
        divPai.querySelector(".borda-item-selecionado").classList.remove("borda-item-selecionado");
    }

    elementoClicado.classList.add("borda-item-selecionado");
}

function criarLinkComMensagemPronta () {
    nomeCliente = prompt("Qual o seu nome?");
    enderecoCliente = prompt("Qual o seu endereço?");
    let pratoPrincipalSelecionado = "Frango Ying Yang";
    let bebidaSelecionada = "Coquinha gelada";
    let sobremesaSelecionada = "Pudim";
    let valorPratoPrincipal = 10.90;
    let valorBebida = 10.90;
    let valorSobremesa = 10.90;
    let valorFinal = (valorPratoPrincipal + valorBebida + valorSobremesa).toFixed(2);
    let mensagemPronta = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoPrincipalSelecionado}\n- Bebida: ${bebidaSelecionada}\n- Sobremesa: ${sobremesaSelecionada}\nTotal: R$ ${valorFinal}\n\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`;
    let encoded = encodeURIComponent(mensagemPronta);
    let linkFinal = `https://wa.me/5521992992511?text=${encoded}`
    window.location.assign(linkFinal);
}