//Variáveis
let uf = [
  'AC',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];
let estados = document.getElementById('estado');

//Lista de Estados
for (let i = 0; i < uf.length; i += 1) {
  let newElement = document.createElement('option');
  newElement.innerText = uf[i];
  newElement.value = uf[i];
  estados.appendChild(newElement);
}

const dia = document.getElementById('dia-teste');
const mes = document.getElementById('mes-teste');
const ano = document.getElementById('ano-teste');
const curriculoResult = document.getElementById('curriculo-preenchido');

dia.addEventListener('change', function () {
  if (dia.value < 1 || dia.value > 31) {
    alert('This is not a valid day. Please write something between 1 and 31');
  }
});

mes.addEventListener('change', function () {
  if (mes.value < 1 || mes.value > 12) {
    alert('This is not a valid month. Please write something between 1 and 12');
  }
});

ano.addEventListener('change', function () {
  if (ano.value < 0) {
    alert('This is not a valid year.');
  }
});

// limpar os campos do forms
const forms = document.getElementById('form');
const clearAllButton = document.getElementById('limpar');

clearAllButton.addEventListener('click', function () {
  forms.reset(); 
});
