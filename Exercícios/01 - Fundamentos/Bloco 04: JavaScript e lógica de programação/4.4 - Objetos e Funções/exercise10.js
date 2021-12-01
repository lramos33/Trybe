let array = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatableNumber(array) {
  let repeated = 0;
  let number = 0;
  let indexRepeatedNumber = 0;

  for (let index in array) {
    let verificaNumero = array[index];
    for (let index2 in array) {
      if (verificaNumero === array[index2]) {
        number += 1;
      }
    }
    if (number > repeated) {
      repeated = number;
      indexRepeatedNumber = index;
    }
    number = 0;
  }
  return array[indexRepeatedNumber];
}
console.log(mostRepeatableNumber(array));