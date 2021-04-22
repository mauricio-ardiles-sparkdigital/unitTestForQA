const statements = require('../src/statements');

test('test statements ', () => {
  const result = statements.statementsTest();
  expect(result).toBe(true);
});

test('test x < 10 ', () => {
  const result = statements.condition(15);
  expect(result).toBe(false);
});