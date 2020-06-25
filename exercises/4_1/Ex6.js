/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que
ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras
minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar
uma mensagem de erro. Exemplo: bishop -> diagonals*/

let piece = "Queen";
piece = piece.toLowerCase();

switch (piece) {
  case "king":
    console.log("Moves one square in any direction");
    break;
  case "queen":
    console.log("Moves one square in any direction.Move any number of squares diagonally, horizontally and vertically");
    break;
  case "tower":
    console.log("Move any number of squares horizontally or vertically");
    break;
    case "bitshop":
    console.log("Move any number of squares diagonally");
    break;
  case "knight":
    console.log("The moves forms an 'L'-shape");
    break;
  case "pawn":
    console.log("Move forward to the unoccupied square in front of it on the same file.");
    break;
  default:
    console.log("Error");
    
}



