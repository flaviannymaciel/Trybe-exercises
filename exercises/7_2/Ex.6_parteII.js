/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const studentsNumber =
  lesson1["numeroEstudantes"] +
  lesson2["numeroEstudantes"] +
  lesson3["numeroEstudantes"];
console.log(studentsNumber);
