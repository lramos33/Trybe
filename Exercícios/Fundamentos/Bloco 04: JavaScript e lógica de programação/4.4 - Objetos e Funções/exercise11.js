function summation(number) {
  let result = number
  for (let index = 1; index < number; index += 1) {
    result += index
  }
  return result
}
console.log(summation(6));