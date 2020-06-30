//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
//“Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let infoNew = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let i in (info, infoNew)) {
  if (info[i] != infoNew[i]) {
    console.log(info[i] + ' e ' + infoNew[i]);
  } else {
    console.log('Ambos recorrentes');
  }
}
