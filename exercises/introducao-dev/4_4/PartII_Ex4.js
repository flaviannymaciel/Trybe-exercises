// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorCaracteres(string) {
  // cria uma variável para armazenar o primeiro valor;
  let maiorString = string[0];
  for (let i in string) {
    // testa a variável (primeiro nome) em relação ao próximo, e se for menor substitui o valor armazenado para o maior valor.
    if (maiorString.length < string[i].length) {
      maiorString = string[i];
    }
  }
  return maiorString;
}

console.log(
  maiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
