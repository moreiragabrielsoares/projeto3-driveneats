let pratoPrincipalSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let valorPratoPrincipal;
let valorPratoPrincipalNum;
let valorBebida;
let valorBebidaNum;
let valorSobremesa;
let valorSobremesaNum;
let elementoSelecionado;
let valorFinal;

function ativarSelecao (elementoClicado) {
    elementoSelecionado = elementoClicado;
    let divPai = elementoClicado.parentElement;

    if (divPai.querySelector(".borda-item-selecionado") !== null) {
        divPai.querySelector(".borda-item-selecionado").classList.remove("borda-item-selecionado");
    }

    elementoClicado.classList.add("borda-item-selecionado");
    atualizarValores();
}


function atualizarValores () {
    if (elementoSelecionado.parentElement.parentElement.classList.contains("container-prato-principal")) {
        pratoPrincipalSelecionado = elementoSelecionado.querySelector("h4").innerHTML;
        valorPratoPrincipal = elementoSelecionado.querySelector("h6").innerHTML;
        valorPratoPrincipal = valorPratoPrincipal.replace("<span>", "");
        valorPratoPrincipal = valorPratoPrincipal.replace("</span>", "");
        valorPratoPrincipalNum = elementoSelecionado.querySelector("h6 > span").innerHTML;
        valorPratoPrincipalNum = valorPratoPrincipalNum.replace(",", ".");
        valorPratoPrincipalNum = Number(valorPratoPrincipalNum);
    }

    if (elementoSelecionado.parentElement.parentElement.classList.contains("container-bebida")) {
        bebidaSelecionada = elementoSelecionado.querySelector("h4").innerHTML;
        valorBebida = elementoSelecionado.querySelector("h6").innerHTML;
        valorBebida = valorBebida.replace("<span>", "");
        valorBebida = valorBebida.replace("</span>", "");
        valorBebidaNum = elementoSelecionado.querySelector("h6 > span").innerHTML;
        valorBebidaNum = valorBebidaNum.replace(",", ".");
        valorBebidaNum = Number(valorBebidaNum);
    }

    if (elementoSelecionado.parentElement.parentElement.classList.contains("container-sobremesa")) {
        sobremesaSelecionada = elementoSelecionado.querySelector("h4").innerHTML;
        valorSobremesa = elementoSelecionado.querySelector("h6").innerHTML;
        valorSobremesa = valorSobremesa.replace("<span>", "");
        valorSobremesa = valorSobremesa.replace("</span>", "");
        valorSobremesaNum = elementoSelecionado.querySelector("h6 > span").innerHTML;
        valorSobremesaNum = valorSobremesaNum.replace(",", ".");
        valorSobremesaNum = Number(valorSobremesaNum);
    }
   
    if (pratoPrincipalSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        document.querySelector(".botao-escondido").classList.remove("botao-escondido");
    }

}


function ativarTelaConfirmacao () {
    valorFinal = (valorPratoPrincipalNum + valorBebidaNum + valorSobremesaNum).toFixed(2);
    let valorFinalTxt = valorFinal.toString();
    valorFinalTxt = valorFinalTxt.replace(".", ",");
    document.querySelector(".linha-prato-principal > p").innerHTML = pratoPrincipalSelecionado;
    document.querySelector(".linha-prato-principal > span").innerHTML = valorPratoPrincipal;
    document.querySelector(".linha-bebida > p").innerHTML = bebidaSelecionada;
    document.querySelector(".linha-bebida > span").innerHTML = valorBebida;
    document.querySelector(".linha-sobremesa > p").innerHTML = sobremesaSelecionada;
    document.querySelector(".linha-sobremesa > span").innerHTML = valorSobremesa;
    document.querySelector(".linha-total > span").innerHTML = "R$ " + valorFinalTxt;
    document.querySelector(".tela-escondida").classList.remove("tela-escondida");
}

function desativarTelaConfirmacao () {
    document.querySelector(".tela-confirmacao").classList.add("tela-escondida");
}

function criarLinkComMensagemPronta () {
    nomeCliente = prompt("Qual o seu nome?");
    enderecoCliente = prompt("Qual o seu endereço?");
    let mensagemPronta = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoPrincipalSelecionado}\n- Bebida: ${bebidaSelecionada}\n- Sobremesa: ${sobremesaSelecionada}\nTotal: R$ ${valorFinal}\n\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`;
    let encoded = encodeURIComponent(mensagemPronta);
    let linkFinal = `https://wa.me/5521992992511?text=${encoded}`
    window.location.assign(linkFinal);
}