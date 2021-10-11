const { expect, test, describe } = require('@jest/globals');
const { encode, decode } = require('./encodeDecode.js');

describe('if encodeDecode function is working properly', () => {

  test('if encode and decode are functions', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  })

  test('if encode returns properly', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  test('if decode returns properly', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  test('if others characters stay the same', () => {
    expect(decode('bcdfgh !@#$%')).toBe('bcdfgh !@#$%');
    expect(encode('bcdfgh !@#$%')).toBe('bcdfgh !@#$%');
  })

  test('if the returned string have the same length', () => {
    expect(decode('teste').length).toBe(5);
    expect(encode('teste').length).toBe(5);
  })

})
