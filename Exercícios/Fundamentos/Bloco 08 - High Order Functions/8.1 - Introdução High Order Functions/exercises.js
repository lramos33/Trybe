// Exercise 1:
const newEmployees = (getEmployee) => {
  const employees = {
    id1: getEmployee('Pedro Guerra'), 
    id2: getEmployee('Luiza Drumond'), 
    id3: getEmployee('Carla Paiva'),
    id4: getEmployee('Leonardo Ramos')
  }
  return employees;
};

function getEmployee(fullName) {
  const email = fullName.toLowerCase().replace(' ', '_');
  return {fullName, email: `${email}@trybe.com`};
};

console.log(newEmployees(getEmployee));

// Exercise 2:
const lottery = (number, checkNumber) => { 
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return checkNumber(number, randomNumber);
};

const checkNumber = (number, randomNumber) => { 
  if (randomNumber === number) {
    return 'Parabéns, você ganhou!';
  } return 'Tente novamente.';
}

console.log(lottery(3, checkNumber))

// Exercise 3:
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'C', 'B', 'D', 'N.A', 'B', 'D', 'A', 'D', 'C'];

const grade = (rightAnswers, studentAnswers, checkAnswers) => {
  let resultGrade = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const returnedAnswer = checkAnswers(rightAnswers[index], studentAnswers[index]);
    resultGrade += returnedAnswer;
  };
  return resultGrade;
};

const checkAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } else if (studentAnswers === "N.A") {
    return 0;
  } else {
    return -0.5;
  };
};

console.log(grade(rightAnswers, studentAnswers, checkAnswers));
