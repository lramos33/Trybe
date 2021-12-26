// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let espaco = ', ';
  let resultado = array[array.length - 1].concat(espaco, array[0]);
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let somaWins = wins * 3;
  let somaTies = ties * 1;
  let contador = somaWins + somaTies;
  return contador;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Number.NEGATIVE_INFINITY;
  let contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos1 = Math.abs(cat1 - mouse);
  let pos2 = Math.abs(cat2 - mouse);
  if (pos1 > pos2) {
    return 'cat2';
  } else if (pos2 > pos1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let encodeString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      encodeString += '1';
    } else if (string[i] === 'e') {
      encodeString += '2';
    } else if (string[i] === 'i') {
      encodeString += '3';
    } else if (string[i] === 'o') {
      encodeString += '4';
    } else if (string[i] === 'u') {
      encodeString += '5';
    } else {
      encodeString += string[i];
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      decodeString += 'a';
    } else if (string[i] === '2') {
      decodeString += 'e';
    } else if (string[i] === '3') {
      decodeString += 'i';
    } else if (string[i] === '4') {
      decodeString += 'o';
    } else if (string[i] === '5') {
      decodeString += 'u';
    } else {
      decodeString += string[i];
    }
  }
  return decodeString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
