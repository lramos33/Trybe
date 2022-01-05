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

module.exports = { encode, decode }