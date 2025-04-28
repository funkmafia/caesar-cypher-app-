const cipher = require('./cipher.js');

test('decodes a simple message with a key of 1', () => {
    expect(cipher('BCD', 1, 'decode')).toBe('ABC');
  });