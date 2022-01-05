let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function findLongestName(array) {
  let highestName = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > highestName.length) {
      highestName = array[index];
    }
  }
  return highestName;
}
console.log(findLongestName(array));