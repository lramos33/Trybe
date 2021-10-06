let array = [2, 3, 6, 7, 10, 1];

function indexOfHighestNumber(array) {
  let highestNumber = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return array.indexOf(highestNumber);
}
console.log(indexOfHighestNumber(array));