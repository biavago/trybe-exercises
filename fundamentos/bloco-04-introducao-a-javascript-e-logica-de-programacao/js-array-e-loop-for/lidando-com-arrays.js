//Iremos utilizar esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}


// Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}
console.log("A soma de todos os valores contidos no array é " + soma + ".");


// Calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
media = soma / numbers.length;
console.log("A média de todos os valores no array é " + media + ".");


// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. 
//Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20){
    console.log ("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}


// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log("O maior valor contido no array é " + maior + ".");


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = maior;
for (let i = 0; i < numbers.length; i += 1){
    if (menor > numbers[i]){
        menor = numbers[i];
    }
}
console.log("O menor valor contido no array é " + menor + ".");


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let contadorImpar = 0;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        contadorImpar++;
    }
}
if (contadorImpar == 0){
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log("Nesse array existem " + contadorImpar + " números ímpares.");
}


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayAte25 = [];
for (let i = 1; i <= 25; i += 1){
    arrayAte25.push(i);
}
console.log(arrayAte25);


// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i < arrayAte25.length; i += 1){
    console.log(arrayAte25[i] / 2 + ",");
} 