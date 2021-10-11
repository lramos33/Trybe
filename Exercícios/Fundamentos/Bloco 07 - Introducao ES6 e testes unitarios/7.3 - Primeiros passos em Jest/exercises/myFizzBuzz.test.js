const { expect, test, describe } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('if myFizzBuzz function is working properly', () => {

  test('if returns the correctly string', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('string')).toBe(false);
  });

});