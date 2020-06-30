// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];. Valor esperado no retorno da função: 4

function maiorValor(num) {
  let maiorIndex = 0;
  for (let i in num) {
    if (num[maiorIndex] < num[i]) {
      maiorIndex = i;
    }
  }
  return maiorIndex;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));
