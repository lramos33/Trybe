function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  tech.sort();
  let output = [];

  for (let i = 0; i < tech.length; i += 1) {
    let object = {
      tech: tech[i],
      name: name
    };
    output.push(object);
  }
  return output;
}

module.exports = techList;