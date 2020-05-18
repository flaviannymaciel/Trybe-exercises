let linha = 10;
let resultado1 = "";;
let resultado2 = "";

for (let i = 1; i <=linha; i++) {
  for(let j=0;j<linha-i; j++){
    resultado1=resultado1+" ";
  }
  resultado2= resultado2+"*"
  console.log(resultado1+resultado2);
  resultado1="";
}