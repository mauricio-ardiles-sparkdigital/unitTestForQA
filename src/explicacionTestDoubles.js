//Codigo sin completar para explicar la necesidad de un test double
//Suponemos que solo le podemos pagar a visa

function compra(usuario,monto, numeroTarjeta, vencimiento, codigo, productos){

  validoUsuario(usuario);
  validoStock(productos);

  /*Pseudocodigo retorna los siguientes status code
  Si el pago fue exitoso retorna un 201,
  400 si no fue exitosa la operacion,
  Internal Server Error 500
  */
  let response = llamamosAVisaParaPagar('https://visa.pagos.api', parametros);
  let message = '';
  if (response === 201){
    message = 'OK';
  } else if (response === 400){
    message = 'No Aprobada la compra';
  } else if (response === 500) {
    message = 'internal server error';
  }

  return message
}




function validoUsuario(usuario){
  // chequeos de que el usuario puede comprar
}

function validoStock(usuario){
  // chequeos de que los productos tengan el stock requerido
}