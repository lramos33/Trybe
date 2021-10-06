let n = 5;
let symbol = '*';
let line = '';
let controlPosition = n

for (let index = 1; index <= 5; index += 1) {

  for (let index2 = 1; index2 <= n; index2 += 1) {
    if (index2 < controlPosition) {
      line += '_'
    } else {
      line += symbol
    }
  }

  console.log(line);
  controlPosition -= 1
  line = ''
}