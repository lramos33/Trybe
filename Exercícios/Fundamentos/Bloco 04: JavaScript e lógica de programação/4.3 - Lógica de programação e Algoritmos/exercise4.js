let n = 5;
let symbol = '*';
let line = '';

let midPosition = (n + 1) / 2;
let controlLeft = midPosition;
let controlRight = midPosition;

for (let index = 0; index <= midPosition; index += 1) {

  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 > controlLeft && index2 < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }

  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1;
};