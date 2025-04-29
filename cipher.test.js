const cipher = require('./cipher.js');

test('decodes a simple message with a key of 1', () => {
    expect(cipher('ABC', 1, 'decode')).toBe('ZAB');
  });

test('encodes a simple message with a key of 1', () => {
    expect (cipher('ABC', 1, 'encode')).toBe('BCD');
});

test('encode HELLO with a key of 3', () => {
  expect (cipher ('HELLO', 3, 'encode')).toBe('KHOOR');
});

test('decode KHOOR with a key of 3', () => {
  expect (cipher ('KHOOR', 3, 'decode')).toBe('HELLO');
});

test ('encodes a message with punctuation', () => {
  expect (cipher ('HELLO, WORLD!', 5, 'encode')). toBe('MJQQT, BTWQI!');
});