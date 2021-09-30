const fetchPromise = () => {
  const myPromise = new Promise((resolve, error) => {
    const sortNumbers = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    )
    
    const squareNumbers = sortNumbers.map((number) => number * number);
    const sum = squareNumbers.reduce((totalSum, currentNumber) => totalSum + currentNumber);
  
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
