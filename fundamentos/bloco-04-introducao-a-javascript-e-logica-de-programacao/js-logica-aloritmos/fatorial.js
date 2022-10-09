// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
let numero = 4;
let fatorial = numero;
for (let index = 1; index < numero; index++){
    fatorial *= index;
}
console.log(numero + "! = " + fatorial);