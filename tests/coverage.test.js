const coverage = require('../src/coverage');


test('shouldPaidExtraHours function Returns message = PAY', () => {
  const result = coverage.shouldPaidExtraHours('Saturday');
  const expected = 'PAY';
  expect(result).toEqual(expected);
});


test.skip('shouldPaidExtraHours function Returns message = DOUBLE PAY', () => {
  const result = coverage.shouldPaidExtraHours('Sunday');
  const expected = 'DOUBLE PAY';
  expect(result).toEqual(expected);
});



test.skip('shouldPaidExtraHours function Returns message = NO!', () => {
  const result = coverage.shouldPaidExtraHours('Friday');
  const expected = 'NO!';
  expect(result).toEqual(expected);
});


test.skip('shouldIWorkToday function Returns an empty message', () => {
  const result = coverage.shouldPaidExtraHours('sparkdigital');
  const expected = '';
  expect(result).toEqual(expected);
});
