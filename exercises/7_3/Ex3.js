/* 3- A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
3.1 Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
3.2 Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert.deepStrictEqual(mySum([1, 2, 3, 4]), 10, 'Resultado esperado: 10');

assert.deepStrictEqual(mySum([1, -2, -3, 4]), 0, 'Resultado esperado: 0');