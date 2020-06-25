//Utilizando for, descubra qual o menor valor contido no array e imprima-o;//


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 1000;

for (let i = 0; i < numbers.length; i += 1) {
  if (menorValor > numbers[i]) {
    menorValor = numbers[i];
  }
}
console.log(menorValor);
