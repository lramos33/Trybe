let array = [2, 4, 6, 7, 10, 0, -3];

function indexOfLowestNumber(array) {
  let LowestNumber = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < LowestNumber) {
      LowestNumber = array[index];
    }
  }
  return array.indexOf(LowestNumber);
}
console.log(indexOfLowestNumber(array));