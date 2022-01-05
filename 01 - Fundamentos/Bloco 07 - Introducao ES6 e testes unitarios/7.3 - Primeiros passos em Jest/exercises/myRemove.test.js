const { expect, test, describe } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('if myRemove function is working properly', () => {
  
  test('if returns the correctly array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});

