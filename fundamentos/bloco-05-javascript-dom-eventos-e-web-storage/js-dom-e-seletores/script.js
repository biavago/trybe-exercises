    /*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    */

// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. 
// (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeTagP() {
    let tagP = document.getElementById('mudar-tag');
    tagP.innerHTML = "Trabalhando de home office com um bom salário! :D";
}

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeYellowSquare () {
    let yellowSquare = document.getElementsByClassName('main-content')[0];
    yellowSquare.style.backgroundColor = 'rgb(76,164,109)';
}

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function changeRedSquare () {
    let redSquare = document.getElementsByClassName('center-content')[0];
    redSquare.style.backgroundColor = 'white';
}
// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function correctText () {
    let tagText = document.getElementsByTagName('h1')[0];
    tagText.innerHTML = "Exercício - JavaScript";
}

// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
function changeFirstTagP () {
    document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
}

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showTagsP () {
    let allTagsP = document.getElementsByTagName('p');
    
    for (let i = 0; i < allTagsP.length; i++){
        console.log(document.getElementsByTagName('p')[i].innerHTML);
    }
}


//---//---//---//---//

changeTagP();
changeYellowSquare();
changeRedSquare();
correctText();
changeFirstTagP();
showTagsP();