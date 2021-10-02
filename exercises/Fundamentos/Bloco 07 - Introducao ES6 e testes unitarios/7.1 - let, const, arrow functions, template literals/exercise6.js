const arraySkills = ['HTML', 'CSS', 'JavaScript', 'Jest', 'Softskills'];

const changeString = (string) => {
  const determinedString = 'Tryber x aqui!';
  return determinedString.replace('x', string);
}

const returnedTryber = changeString('Leonardo');

const addSkills = (tryber) => {
  return `${tryber} Minhas cinco principais habilidades são:
  - ${arraySkills[0]}
  - ${arraySkills[1]}
  - ${arraySkills[2]}
  - ${arraySkills[3]}
  - ${arraySkills[4]}
#goTrybe`
} 
console.log(addSkills(returnedTryber));