// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function indexMenor(num) {
  let indexMin = 0;
  for (let i in num) {
    if (num[i] < num[indexMin]) {
      indexMin = i;
    }
  }
  return indexMin;
}

console.log(indexMenor([2, 4, 6, 7, 10, 0, -3]));