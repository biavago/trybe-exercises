// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto;
//     lucro = valorVenda - valorCustoTotal (lucro de um produto);
let valorCusto = 10;
let valorVenda = 20;
let quantidadeDeProdutoVendida = 1000;
let impostoSobreOCusto = 0.20 * valorCusto;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Valores de entrada não devem ser menor que zero.");
} else {
    console.log("O lucro sobre a venda de 1000 produtos será de " + quantidadeDeProdutoVendida * lucro);
}

