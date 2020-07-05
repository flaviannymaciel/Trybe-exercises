// Agora inverta o lado do triângulo, em relação ao exercício 2.

let n = 5;
let aux_asterisk = 0;

for (let i = 1; i <= n; i++){
  let output = "";
  let aux_space = n - i;
  aux_asterisk += 1;
  
  for (let k = 0; k < aux_space; k++){
    output = output + " ";
  }

  for (let j = 0; j < aux_asterisk; j++){
    output = output + "*";
  }
  console.log(output);
}
