const formulario = document.getElementById('control');
const button = document.querySelector('.btn');
const text = document.querySelector('.css');

formulario.addEventListener('change', handleChange);

const handleStyle = {
  bg(value) {
    button.style.backgroundColor = value;
  },
  color(value) {
    button.style.color = value;
  },
  fontSize(value) {
    button.style.fontSize = value + 'px';
  },
  fontFamily(value) {
    button.style.fontFamily = value;
  },
  text(value) {
    button.innerText = value;
  },
  space(value) {
    button.style.lineHeight = value + 'px';
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  console.log(handleStyle);

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues (){
  const propriedades = Object.keys(localStorage)
  propriedades.forEach(propriedade => {
    handleStyle[propriedade](localStorage[propriedade])
  formulario.elements[propriedade].value = localStorage[propriedade]
})
showCss();
}
setValues()

function showCss() {
  text.innerHTML = button.style.cssText;
}
