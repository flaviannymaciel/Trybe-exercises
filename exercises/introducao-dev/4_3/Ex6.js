// Declarar uma variável de teste;
// Verificar se é primo, fazendo a divisão da variavel por todos os números até ele mesmo, sendo o resto igual a zero.
// Usar %.
// Criar uma variavel array vazio que vai armazenar os números pelo qual a divisão deu zero.
// Verificar se o tamanho (length) desde array é exatamente 2 (1 e ele mesmo). Se for, imprime que é primo, 
// Se length for >2, então o número não é primo. 


let numeroTeste = 37;
let qtdeDivisores = [];

for (i=0; i <= numeroTeste; i +=1) {
  if (numeroTeste % i === 0) {
    qtdeDivisores.push(i);
  }
}
console.log(qtdeDivisores);

if (qtdeDivisores.length === 2) {
  console.log(numeroTeste + " é um número primo");
} else {
  console.log(numeroTeste + " não é um número primo")
}