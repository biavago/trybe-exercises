// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 0;
let menorPalavra = 0;

for (let i = 0; i < array.length; i += 1){
    if (array[i].length > maiorPalavra){
        maiorPalavra = array[i];
    }
}
console.log(maiorPalavra);