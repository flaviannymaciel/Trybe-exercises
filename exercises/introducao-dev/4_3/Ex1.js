/*Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n.*/

let n = 5;

for (i = 1; i <= n; i += 1) {
  let asterisco = "";
  for (j = 1; j <= n; j += 1) {
    asterisco += "*";
  }
  console.log(asterisco);
}
