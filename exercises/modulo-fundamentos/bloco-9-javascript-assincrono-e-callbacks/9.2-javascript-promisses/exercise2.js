// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
  // Primeiramente, instancie uma Promise
  // Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
  // Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then, com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.

// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, error) => {
    const sortNumbers = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    )
    
    const squareNumbers = sortNumbers.map((number) => number * number);
    const sum = squareNumbers.reduce((totalSum, currentNumber) => totalSum + currentNumber);
    // console.log(sum);
  
    (sum < 8000) ? resolve(sum) : error();
  });

  myPromise
    .then((sum) => {
      console.log(sum)
      return sum})
    .then((sum) => console.log([2, 3, 4, 10].map((number => sum / number))))
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
} 

fetchPromise();
