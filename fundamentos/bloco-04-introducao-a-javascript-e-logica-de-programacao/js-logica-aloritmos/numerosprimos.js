// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. 
let contador = 0;
let numero = 50;
for (let i = 2; i <= numero; i++){
    for (let j = 1; j <= numero; j++){
        if (i % j == 0){
            contador++;
        }
    }
    if (contador == 2){
        console.log("")
    }
}