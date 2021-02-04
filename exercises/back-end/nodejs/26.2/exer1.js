function somaNumber(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      return reject(console.log('Digite apenas números'));
    }
    resolve(console.log(param1 + param2));
  })
  .then((r) => {
    if(r * param3 < 50) {
      return Promise.reject(console.log('Valor muito baixo'));
    }
    return(console.log(r * param3));
  })
}

somaNumber(1, 4, 6);
