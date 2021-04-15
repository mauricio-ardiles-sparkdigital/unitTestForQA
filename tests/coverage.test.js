const coverage = require('../src/coverage');


test('shouldIWorkToday function Returns message = Is saturday enjoy your weekend when is Saturday', () => {
  const result = coverage.shouldIWorkToday('Saturday');
  const expected = 'Is saturday enjoy your weekend';
  expect(result).toEqual(expected);
});


test('shouldIWorkToday function Returns message = You should not work but the end is near', () => {
  const result = coverage.shouldIWorkToday('Sunday');
  const expected = 'You should not work but the end is near';
  expect(result).toEqual(expected);
});



test('shouldIWorkToday function Returns message = Sad but True', () => {
  const result = coverage.shouldIWorkToday('Friday');
  const expected = 'Sad but True';
  expect(result).toEqual(expected);
});


test('shouldIWorkToday function Returns an empty message', () => {
  const result = coverage.shouldIWorkToday('sparkdigital');
  const expected = '';
  expect(result).toEqual(expected);
});
