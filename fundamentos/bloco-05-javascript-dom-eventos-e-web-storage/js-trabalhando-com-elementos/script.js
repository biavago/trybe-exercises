// Comece criando algumas coisas:
// 1) Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const title = document.createElement("h1");
title.innerText = "Exercício - JavaScript DOM";
document.body.appendChild(title);

// 2) Adicione a tag main com a classe main-content como filho da tag body;
const main = document.createElement("main");
main.className = "main-content";
document.body.appendChild(main);

// 3) Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement("section");
centerContent.className = "center-content";
main.appendChild(centerContent);

// 4) Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const text = document.createElement("p");
text.innerText = "Dia 5.2 - Trabalhando com elementos";
centerContent.appendChild(text);

// 5) Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement("section");
leftContent.className = "left-content";
main.appendChild(leftContent);

// 6) Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement("section");
rightContent.className = "right-content";
main.appendChild(rightContent);

// 7) Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";
leftContent.appendChild(image);

// 8) Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. 
//Essa lista deve ser filha do section criado no passo 6;
let numbers = [
    "um", 
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez"
]
const unorderedList = document.createElement('ul');
rightContent.appendChild(unorderedList);

for (let i = 0; i < numbers.length; i++){
    numbersItem = numbers[i];
    let numbersListItem = document.createElement("li");
    numbersListItem.innerText = numbersItem;
    unorderedList.appendChild(numbersListItem);
}

// 9) Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i++){
    let titleH3 = document.createElement("h3");
    titleH3.className = "description";
    main.appendChild(titleH3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 10) Adicione a classe title na tag h1 criada;

// 11) Adicione a classe description nas 3 tags h3 criadas;
//  Alteração feita dentro do for do passo 9.

// 12) Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();


// 13) Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

// 14) Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

// 15) Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
