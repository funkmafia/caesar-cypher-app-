const cipher = require('./cipher.js');

test('encodes a simple message with a key of 1', () => {
  expect(cipher('ABC', 1, 'encode')).toBe('BCD');
});