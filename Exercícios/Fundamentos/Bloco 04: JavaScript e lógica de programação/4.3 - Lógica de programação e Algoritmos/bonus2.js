let number = 79;
let divisors = 0;

for (let index = 1; index <= number; index += 1) {
  if (number % index === 0) {
    divisors += 1;
  }
}

if (divisors === 2) {
  console.log(number + ' é primo');
} else {
  console.log(number + ' não é primo');
}
