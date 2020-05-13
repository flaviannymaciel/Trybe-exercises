let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let médiaAritmética;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
médiaAritmética = sum / numbers.length;

if (médiaAritmética > 20) {
  console.log("Valor maior que vinte");
} else {
  console.log("Valor menor ou igual a vinte")
}