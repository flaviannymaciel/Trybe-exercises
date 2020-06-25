//Variáveis
let uf = ['AC', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
let estados = document.getElementById('estado');

//Lista de Estados
  for (let i = 0; i < uf.length; i += 1) {
    let newElement = document.createElement('option');
    newElement.innerText = uf[i];
    newElement.value = uf[i];
    estados.appendChild(newElement);
  }

