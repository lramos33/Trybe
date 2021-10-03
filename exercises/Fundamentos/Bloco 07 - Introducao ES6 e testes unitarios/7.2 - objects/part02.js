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

// Exercício 01
const addTurn = (lesson, key, value) => lesson[key] = value;
addTurn(lesson2, 'turno', 'noite');

// Exercício 02
const listKeys = (object) => Object.keys(object);

// Exercício 03
const objectSize = (object) => Object.keys(object).length;

// Exercício 04
const listValues = (object) => Object.values(object);

// Exercício 05
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Exercício 06
const countStudents = (object) => {
  let totalStudents = 0;
  const array = Object.keys(object);

  array.forEach((lesson) => totalStudents += object[lesson].numeroEstudantes);
  return totalStudents;
};

// Exercício 07
const getValueByIndex = (object, index) => Object.values(object)[index];

// Exercício 08
const verifyKeyValue = (object, key, value) => {
  if (object[key] === value) {
    return true
  }
  return false
};