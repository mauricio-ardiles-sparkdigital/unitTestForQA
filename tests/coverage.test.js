const coverage = require('../src/coverage');


test('shouldIWorkToday function Returns message = Is saturday enjoy your weekend when is Saturday', () => {
  const result = coverage.shouldPaidExtraHours('Saturday');
  const expected = 'PAY';
  expect(result).toEqual(expected);
});


test('shouldIWorkToday function Returns message = You should not work but the end is near', () => {
  const result = coverage.shouldPaidExtraHours('Sunday');
  const expected = 'DOUBLE PAY';
  expect(result).toEqual(expected);
});



test('shouldIWorkToday function Returns message = Sad but True', () => {
  const result = coverage.shouldPaidExtraHours('Friday');
  const expected = 'NO!';
  expect(result).toEqual(expected);
});


test('shouldIWorkToday function Returns an empty message', () => {
  const result = coverage.shouldPaidExtraHours('sparkdigital');
  const expected = '';
  expect(result).toEqual(expected);
});
