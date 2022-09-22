let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array; 
let somaMedia = 0;
let media = 0;
let contadorMedia = 0;
for (let i = 0; i < numbers.length; i++){
    somaMedia += numbers[i];
    contadorMedia++;
}
media = somaMedia / contadorMedia;
console.log(media);
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. 
//Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log("O maior valor da lista é: " + maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
contadorImpar = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0){
        contadorImpar += 1;
    }
}
if (contadorImpar > 0){
    console.log("Existem " + contadorImpar + " números ímpares na lista");
} else {
    console.log("Nenhum valor ímpar encontrado.")
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < menorValor){
        menorValor = numbers[i];
    }
}
console.log("O menor valor da lista é: " + menorValor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayAte25 = [];
for (let i = 0; i <= 25; i++){
    arrayAte25.push(i);
}
console.log(arrayAte25);
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i < arrayAte25.length; i++){
    console.log(arrayAte25[i] / 2);
}