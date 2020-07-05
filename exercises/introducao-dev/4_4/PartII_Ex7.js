//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let stringWord = 'trybe';
let stringEnd = 'be';

function verificaPalavra(a, b) {
  let tamanhoA = a.length;
  let tamanhoB = b.length;
  let inicioA = tamanhoA - tamanhoB;
  //O método slice() extrai uma parte de uma string e retorna uma nova  string
  if (b == a.slice(inicioA, tamanhoA)) {
    return true;
  } else return false;
}
console.log(verificaPalavra(stringWord, stringEnd));
