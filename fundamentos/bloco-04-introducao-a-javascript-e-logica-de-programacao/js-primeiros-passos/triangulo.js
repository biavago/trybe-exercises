// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
let a = 90;
let b = 60;
let c = 30;
let isValid = true;

if (a + b + c == 180){
    console.log(isValid);
} else {
    console.log(!isValid);
}

if (a <= 0 || b <= 0 || c <= 0){
    console.log("Por favor, insira apenas ângulos válidos.")
}