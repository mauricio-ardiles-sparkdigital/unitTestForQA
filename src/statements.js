function statementsTest () {
  return true; console.log('statement');
}

function condition(x) {
  if(x < 10) return true;
  return false;
}


module.exports={
  statementsTest,
  condition
};