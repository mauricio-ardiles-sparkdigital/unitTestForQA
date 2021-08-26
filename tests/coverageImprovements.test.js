const coverageImprovements = require('../src/coverageImprovements');


test('getAgeStatus returns menor when age is 17', () => {
  const result = coverageImprovements.getAgeStatus(17);
  const expected = 'menor';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns mayor when age is 21', () => {
  const result = coverageImprovements.getAgeStatus(21);
  const expected = 'mayor';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns jubilado when age is 65', () => {
  const result = coverageImprovements.getAgeStatus(65);
  const expected = 'jubilado';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns cadaver when age is 121', () => {
  const result = coverageImprovements.getAgeStatus(121);
  const expected = 'cadaver';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns mayor when age is 18', () => {
  const result = coverageImprovements.getAgeStatus(18);
  const expected = 'mayor';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns mayor when age is 64', () => {
  const result = coverageImprovements.getAgeStatus(64);
  const expected = 'mayor';
  expect(result).toEqual(expected);
});

test('getAgeStatus returns mayor when age is 120', () => {
  const result = coverageImprovements.getAgeStatus(120);
  const expected = 'jubilado';
  expect(result).toEqual(expected);
});

