let megaSenaNumbers = [];
let firstPlay = [7, 15, 17, 20, 31, 35];

for (i = 0; i < 6; i += 1) {
  megaSenaNumbers[i] = retornaNumeroEntreUmeSessenta();
}

function retornaNumeroEntreUmeSessenta() {
  return Math.ceil(Math.random() * 60);
}
console.log(megaSenaNumbers);
let numberOfHits = 0;
    for (i = 0; i < megaSenaNumbers.length; i += 1){
      for (n = 0; n < firstPlay.length; n += 1) {
        if (firstPlay[n] === megaSenaNumbers[i]) {
          numberOfHits += 1;
        }
      }
    }
console.log(numberOfHits);