/**
 * Ugly code just for the training
 * @param age
 * @returns {string}
 * @description si age es menor a 18 (hasta 17) devuelve menor,
 * si age esta en el rango de 18 a 64 inclusive devuelve mayor,
 * si age esta en el rango de 65 a 119 inclusive devuelve jubilado,
 * si age es mayor a 120 devuelve cadaver
 */

function getAgeStatus(age) {
  if (age < 18) {
    return 'menor';
  } else if (age >= 18 && age < 65) {
      return 'mayor';
  } else if (age >= 65 && age <= 120) {
      return 'jubilado';
  } else {
    return 'cadaver';
  }
}



module.exports = {
  getAgeStatus
};
