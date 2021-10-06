const longestWord = (string) => {
  const eachWord = string.split(' ');
  let result = '';

  eachWord.forEach((word) => {
    if (word.length > result.length) {
      result = word;
    }
  })
  return result;
}