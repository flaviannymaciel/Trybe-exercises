let salarioBruto = 6000;
let INSS;
let IR;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * 0.11;
}
else if (salarioBruto > 5189.82) {
  INSS = 570.88;
}
if (salarioBruto <= 1903.98) {
  IR = 0;
}
else if (salarioBruto <= 2826.65) {
  IR = (salarioBruto - INSS) * 0.075 - 142.8;
}
else if (salarioBruto <= 3751.05) {
  IR = (salarioBruto - INSS) * 0.15 - 354.8;
}
else if (salarioBruto <= 4664.68) {
  IR = (salarioBruto - INSS) * 0.225 - 636.13;
}
else if (salarioBruto > 4664.68) {
  IR = (salarioBruto - INSS) * 0.275 - 869.36;
}
salarioLiquido = salarioBruto - INSS - IR;
console.log(salarioLiquido.toFixed(2));