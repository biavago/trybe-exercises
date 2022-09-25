// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for PAR. 
//Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
let a = 2;
let b = 4;
let c = 8;
let isPar = true;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(isPar);
} else {
    console.log(!isPar);
}

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ÍMPAR. 
//Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
let d = 5;
let e = 3;
let f = 7;
let isImpar = true;

if (d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0){
    console.log(isImpar);
} else {
    console.log(!isImpar);
}