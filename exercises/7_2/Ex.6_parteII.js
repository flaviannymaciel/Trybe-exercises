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

/*const studentsNumber =
  lesson1["numeroEstudantes"] +
  lesson2["numeroEstudantes"] +
  lesson3["numeroEstudantes"];
console.log(studentsNumber);*/

function numberOfStudents (object) {
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  let students = allLessons[object].numeroEstudantes;
  console.log(students);
}

numberOfStudents('lesson1');
numberOfStudents('lesson2');
numberOfStudents('lesson3');