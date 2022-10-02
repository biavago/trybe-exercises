//Exercícios da aula - Buscando Elementos
// Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById('primeiroFilhoDoFilho').innerHTML = "Exercícios de exemplo da aula: Buscando Elementos.";

// Acesse o primeiroFilho a partir de pai.
document.getElementById('primeiroFilho').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').children[2];


//----//----//----//----//----//----//----//----//

//Exercícios da aula - Criando Elementos
// Crie um irmão para elementoOndeVoceEsta.
const irmao = document.createElement('section');
const pai = document.getElementById('pai');
irmao.setAttribute('id', 'irmaoElementoOndeVoceEsta');
irmao.className = 'filhosDoPai';
pai.appendChild(irmao);

// Crie um filho para elementoOndeVoceEsta.
const filho = document.createElement('p');
const paiDoFilho = document.getElementById('elementoOndeVoceEsta');
filho.setAttribute('id', 'filhoDoElementoOndeVoceEsta');
filho.innerHTML = "Aqui está o filho do elementoOndeVoceEsta!";
paiDoFilho.appendChild(filho);

// Crie um filho para primeiroFilhoDoFilho.
const filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoPrimeiroFilhoDoFilho.setAttribute('id', 'filhoDoPrimeiroFilhoDoFilho');
filhoDoPrimeiroFilhoDoFilho.innerHTML = "Aqui está o filho do primeiroFilhoDoFilho!";
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentNode.nextElementSibling;


//----//----//----//----//----//----//----//----//

//Exercícios da aula - Removendo elementos
//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const filhos = document.querySelectorAll('.filhosDoPai');

for (let i = 0; i < filhos.length; i++){
    let element = filhos[i];

    if (element.id.includes('terceiroFilho')){
        pai.removeChild(element);
    }
    if (element.id.includes('quartoEUltimoFilho')){
        pai.removeChild(element);
    }
    if (element.id.includes('irmaoElementoOndeVoceEsta')){
        pai.removeChild(element);
    }
}

