let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

//Ordene o array numbers em ordem crescente e imprima seus valores; 
for (let i = 1; i < numbers.length; i += 1) {
    // dentro de cada iteração percorremos novamente o vetor em busca dos pares
    for (let j = 0; j < i; j += 1) {
    //comparamos
        if (numbers[i] < numbers[j]) {
        // swap
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1){
        if (numbers[i] > numbers[j]){
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. 
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

let numbersMultiplicados = [];

for (let i = 0; i < numbers2.length - 1; i += 1) {
    numbersMultiplicados.push(numbers2[i] * numbers2[i + 1]);
}
numbersMultiplicados.push(numbers2[numbers2.length - 1] * 2);

console.log(numbersMultiplicados);