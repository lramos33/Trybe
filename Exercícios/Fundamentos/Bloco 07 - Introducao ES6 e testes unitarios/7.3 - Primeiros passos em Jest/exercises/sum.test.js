const { expect, test, describe } = require('@jest/globals');
const sum = require('./sum');

describe('if sum function is working properly', () => {

  test('if sum return the right answer', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  test('if number + string throws error', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});
