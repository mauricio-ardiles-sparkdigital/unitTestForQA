const utils = require('../src/utils');

test('isEven function returns false when the number is not even', () => {
  const result = utils.isEven(3);
  expect(result).toBe(false);
});

test('isEven function returns true when the number is even', () => {
  const result = utils.isEven(8);
  expect(result).toBe(true);
});

test('shouldIWorkToday function Returns message = Is saturday enjoy your weekend when is Saturday', () => {
  const result = utils.shouldIWorkToday('Saturday');
  const expected = 'Is saturday enjoy your weekend';
  expect(result).toEqual(expected);
});

test('shouldIWorkToday function Returns message = You should not work but the end is near', () => {
  const result = utils.shouldIWorkToday('Sunday');
  const expected = 'You should not work but the end is near';
  expect(result).toEqual(expected);
});

test('shouldIWorkToday function Returns message = Sad but True', () => {
  const result = utils.shouldIWorkToday('Friday');
  const expected = 'Sad but True';
  expect(result).toEqual(expected);
});

test('shouldIWorkToday function Returns an empty message', () => {
  const result = utils.shouldIWorkToday('Unit Test');
  const expected = '';
  expect(result).toEqual(expected);
});
