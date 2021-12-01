const uppercase = require('./exercise7')

test('if uppercase function works properly', (done) => {
  uppercase('string', (str) => {
    try {
      expect(str).toBe('STRING');
      done();
    } catch(error) {
      done(error)
    }
  })
})
