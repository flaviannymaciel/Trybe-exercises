let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
}
let infoNew = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
}

for (let chaves in info, infoNew) {
  if (info[chaves] != infoNew[chaves]) {
    console.log(info[chaves] + " e " + infoNew[chaves]);
  } else if (info[chaves] === infoNew[chaves]) {
    console.log("Ambos recorrentes")
  }
}
  

