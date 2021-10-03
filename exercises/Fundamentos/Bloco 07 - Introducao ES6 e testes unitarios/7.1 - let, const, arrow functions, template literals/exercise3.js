const factorialNumber = (n) => {
  if (n < 0 ){
    return `Não é possível calcular o fatorial`;
  } else if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorialNumber(n - 1);
}
  // Bônus
const ternaryFactorialNumber = n => n === 1 || n === 0 ? 1 : n * ternaryFactorialNumber(n - 1);
