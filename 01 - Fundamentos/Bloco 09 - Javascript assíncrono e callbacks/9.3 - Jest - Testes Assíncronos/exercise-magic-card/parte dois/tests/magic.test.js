const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');
const { expect, test, describe } = require('@jest/globals')

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função getMagicCard', () => {
  afterEach(() => retrievesFavoriteCards());

  it('Testa se um novo card é adicionado a cada execução', async () => {
    await getMagicCard('130553');

    expect.assertions(2);
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    const cardNames = favoriteCards.map((card) => card.name);

    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    expect(cardNames).toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);

  });
});
