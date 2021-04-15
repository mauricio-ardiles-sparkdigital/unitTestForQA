function compare (a, b){
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
  compare
};
