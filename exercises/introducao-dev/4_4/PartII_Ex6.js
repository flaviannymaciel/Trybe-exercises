//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5;

function fatorial(numero) {
  let contagem = 0;
  for (let i = 1; i < n-1; i += 1 ) {
  contagem += n;
  }
  return contagem
}
console.log(fatorial(n));