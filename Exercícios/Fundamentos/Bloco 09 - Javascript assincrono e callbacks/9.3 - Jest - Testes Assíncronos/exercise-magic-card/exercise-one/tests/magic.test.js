const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');
const { expect, test, describe } = require('@jest/globals');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {

  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');

    expect(response).toEqual(expected);
    expect(response.types).toBeInstanceOf(Array);
    expect(response.subtypes.length).toBe(2);
    expect(response.rarity).toBe('Uncommon');
    expect(response.name).toBe("Ancestor's Chosen");
    expect(response.manaCost).toBe('{5}{W}{W}');
  });
});