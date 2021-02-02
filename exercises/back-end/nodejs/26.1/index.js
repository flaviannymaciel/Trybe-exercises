const readlineSync = require('readline-sync');

function IMC () {
  const userWeight = readlineSync.questionFloat('Qual o seu peso(kg)?').toFixed(2);
  const userHeight = readlineSync.questionFloat('Qual a sua altura(m)?').toFixed(2);
  
  const imc = (userWeight/Math.pow(userHeight, 2)).toFixed(2);
  console.log(`Seu IMC é ${imc}`);
  
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  else {
    console.log('Situação: Obesidade graus III e IV');
    return;
  }
}

IMC();
