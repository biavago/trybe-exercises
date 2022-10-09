// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log("Olá, " + names[key] );
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (key in car){
    console.log(key, car[key]);
}

// Desenvolva cada exercício a seguir utilizando funções:

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 
//Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
function adicao(a, b) {
    return console.log(a + b);
}
adicao(1, 2); //3

function subtracao(a, b) {
    return console.log(a - b);
}
subtracao(3, 2); //1

function multiplicacao(a, b) {
    return console.log(a * b);
}
multiplicacao(2, 5); //10

function divisao(a, b) {
    return console.log(a / b);
}
divisao(10, 2); //5

function modulo(a, b) {
    return console.log(a % b);
}
modulo(10, 2); //0

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
function maiorDeDoisNUmeros (a, b) {
    if (a > b) {
        console.log("O maior entre " + a + " e " + b + " é " + a + ".");
    } else if (b > a) {
        console.log("O maior entre " + a + " e " + b + " é " + b + ".");
    } else {
        console.log("Os números são iguais.")
    }
}
maiorDeDoisNUmeros(12, 20);

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorDeTresNumeros (a, b, c) {
    if (a > b && a > c) {
        console.log("O maior entre " + a + " e " + b + " e " + c + " é " + a + ".");
    } else if (b > a && b > c) {
        console.log("O maior entre " + a + " e " + b + " e " + c + " é " + b + ".");
    } else if (c > a && c > b) {
        console.log("O maior entre " + a + " e " + b + " e " + c + " é " + c + ".");
    } else {
        console.log("Os números são iguais.");
    }
}
maiorDeTresNumeros(3, 6, 7);

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, 
//e caso não seja nem positivo e nem negativo retorne “zero”.
function analisarNumero (n) {
    if (n > 0) {
        console.log("Positive");
    } else if (n < 0) {
        console.log("Negative");
    } else {
        console.log("zero");
    }
}
analisarNumero(-2);

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os 
//ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
function analisarAngulos(x, y, z){
    let isValid = true;
    if ((x + y + z) == 180){
        console.log(isValid);
    } else if (x + y + x !== 180){
        console.log("Ângulos inválidos.")
    } else {
        console.log(!isValid);
    }
}
analisarAngulos(30, 60, 70);
