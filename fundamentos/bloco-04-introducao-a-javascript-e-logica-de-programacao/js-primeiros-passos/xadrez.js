// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). .toLowerCase()
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)
let pecaDeXadez = "BISPO";

switch (pecaDeXadez.toLowerCase()){
    case "rei":
        console.log("Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
        break;
    case "dama":
        console.log("Dama -> Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    case "torre":
        console.log("Torre -> Pode mover-se Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser. qualquer direção, porém apenas uma casa por vez.");
        break;
    case "bispo":
        console.log("Bispo -> Pode mover-se na diagonal, quantas casas quiser-se em qualquer direção, porém apenas uma casa por vez.");
        break;
    case "cavalo":
        console.log("Cavalo -> O movimento executado pelo Cavalo é conhecido por 'um-dois' ou em L");
        break;
    case "peão":
        console.log("Peão -> Pode mover-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas");
        break;
    default:
        console.log("Peça inválida. Tente novamente.");
}