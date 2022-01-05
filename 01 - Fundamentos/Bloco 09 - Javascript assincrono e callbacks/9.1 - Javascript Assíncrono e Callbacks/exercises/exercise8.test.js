const getPokemonDetails = require('./exercise8.js');

describe('A função getPokemonDetails', () => {

  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Articuno',
      (error, message) => {
        expect(error).toEqual(expectedError);
        done();
      }
    )
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResult = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur',
      
      (error, message) => {
        expect(message).toBe(expectedResult)
        done();
      }
    )
  });

});