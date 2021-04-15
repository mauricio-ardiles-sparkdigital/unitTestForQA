const firstSteps = require('../src/firstSteps');

test('isEven function returns true when the number is even', () => {
  const result = firstSteps.isEven(8);
  expect(result).toBe(true);
});

test('isEven function returns false when the number is not even', () => {
  const result = firstSteps.isEven(3);
  expect(result).toBe(false);
});