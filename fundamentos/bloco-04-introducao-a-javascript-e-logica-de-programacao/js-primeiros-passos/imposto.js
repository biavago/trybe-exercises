// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
let salarioBruto = 3000;
let salarioLiquido, salarioBase, aliquotaINSS, aliquotaIR;

//desconto do INSS
if (salarioBruto >= 0 && salarioBruto <= 1556.94){
    aliquotaINSS = 0.08 * salarioBruto;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = 0.09 * salarioBruto;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaINSS = 0.11 * salarioBruto;
} else {
    aliquotaINSS = 570.88;
}

//cálculo salário base, com desconto do INSS
salarioBase = salarioBruto - aliquotaINSS;

//desconto do IR
if (salarioBase >= 0 && salarioBase <= 1903.98){
    aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = (0.075 * salarioBase) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = (0.15 * salarioBase) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIR =  (0.225 * salarioBase) - 636.13;
}   else {
    aliquotaIR = (0.275 * salarioBase) - 869.36;
}

//cálculo do salário líquido
salarioLiquido = salarioBase - aliquotaIR;
console.log("O salário líquido calculado é R$ " + salarioLiquido);