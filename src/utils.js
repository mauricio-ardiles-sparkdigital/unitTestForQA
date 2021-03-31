/**
 * Ugly code just for the training
 * Returns true if number parameter is even
 * @param number
 * @returns {boolean}
 */
function isEven(number) {
  let checker = false; console.log('stmts');
  if (number % 2 === 0){
    checker = true;
  }
  return checker
}



/**
 * Ugly code just for the training
 * @param dayName
 * @returns {string}
 */


function shouldIWorkToday(dayName) {
  let message = '';
  
  if (dayName === 'Saturday' || dayName === 'Sunday'){
    if (dayName === 'Saturday') {
      message = 'Is saturday enjoy your weekend';
    } else {
      message = 'You should not work but the end is near';
    }
  } else if (dayName === 'Monday' || dayName === 'Tuesday' || dayName === 'Wednesday' || dayName === 'Thursday' || dayName === 'Friday') {
    message = 'Sad but True';
  }
  
  return message;
}


function comparar (a, b){
  let message ;
  if (a > b) {
    message = 'MAYOR';
  } else if (a < b){
    message = 'MENOR';
  } else {
    message = 'IGUALES';
  }
  return message;
}

module.exports = {
  isEven,
  shouldIWorkToday,
  comparar
};
