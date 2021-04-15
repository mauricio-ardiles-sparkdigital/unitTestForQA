const utils = require('../src/tdd');

/**
 * TDD crear test para una funcion que devuelve si un numero es mayor que otro
 * Recibe 2 parametros y devuelve un string con uno de los siguientes mensajes:
 * 'MAYOR' , 'MENOR', 'IGUALES'
 */

test('a > b', ()=>{
  //given
  const a = 5;
  const b = 3;
  //when
  const result = utils.compare(a,b);
  //then
  expect(result).toEqual('MAYOR');
  
})

test('a < b', ()=>{
  //given
  const a = 1;
  const b = 3;
  //when
  const result = utils.compare(a,b);
  //then
  expect(result).toEqual('MENOR');
  
})

test('a === b', ()=>{
  //given
  const a = 3;
  const b = 3;
  //when
  const result = utils.compare(a,b);
  //then
  expect(result).toEqual('IGUALES');
  
})
