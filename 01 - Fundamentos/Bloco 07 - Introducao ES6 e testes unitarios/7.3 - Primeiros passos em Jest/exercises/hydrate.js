function hydrate(drinks) {
  let glasses = drinks.match(/\d+/g);
  let totalGlasses = 0;
  
  for (let i = 0; i < glasses.length; i += 1) {
    totalGlasses += parseInt(glasses[i]);
  }

  if (totalGlasses > 1) {
    return totalGlasses + ' copos de água';
  }
  return totalGlasses + ' copo de água';
}

module.exports = hydrate;