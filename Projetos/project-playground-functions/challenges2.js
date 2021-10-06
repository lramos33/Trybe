// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  tech.sort();
  let output = [];

  for (let i = 0; i < tech.length; i += 1) {
    let object = {
      tech: tech[i],
      name: name
    };
    output.push(object);
  }
  return output;
}

// Desafio 11
function generatePhoneNumber(number) {
  let phoneNumber = '(';
  let repeated = number;

  // Condição 1
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // Condição 2
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < 0 || number[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  // Condição 3
  for (let i = 0; i < number.length; i += 1) {
    let counter = 0;
    for (let i2 = 0; i2 < repeated.length; i2 += 1) {
      if (number[i] === repeated[i2]) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  // Resultado
  for (let i = 0; i < 2; i += 1) {
    phoneNumber += number[i];
  }
  phoneNumber += ') ';
  
  for (let i = 2; i < 7; i += 1) {
    phoneNumber += number[i];
  }
  phoneNumber += '-';
  
  for (let i = 7; i < number.length; i += 1) {
    phoneNumber += number[i];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let glasses = drinks.match(/\d+/g);
  let totalGlasses = 0;
  
  for (let i = 0; i < glasses.length; i += 1) {
    totalGlasses += parseInt(glasses[i]);
  }

  if (totalGlasses > 1) {
    return totalGlasses + ' copos de água';
  }
  return totalGlasses + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
