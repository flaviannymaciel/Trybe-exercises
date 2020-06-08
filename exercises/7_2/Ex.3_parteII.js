/* 3 - Crie uma função para mostrar o tamanho de um objeto.*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function objectSize(objeto) {
  const size = Object.keys(objeto).length;
  console.log(`Tamanho do objeto: ${size}`);
}
objectSize(lesson1);
objectSize(lesson2);
objectSize(lesson3);
