// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

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

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

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

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

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
