async function somaNumber(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      return Promise.reject(console.log('Digite apenas números'));
    }
    const sum = param1 + param2;
    console.log(sum)
    const mult = sum * param3;
    console.log(mult)
    return mult < 50 ? Promise.reject(console.log('Valor muito baixo')) : mult;
  })
}

somaNumber(1, 70, 6);