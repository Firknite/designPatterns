/**
 * tecnica realizada cuando queremos realizar composición
 * eliminar codigo vacío u ordenar de mejor manera el código
 */

const f = (cb) => {
  const resultado = computacionPesada();
  cb(resultado);
};

const manejaResultado = (resultado) => {};

f('/users', manejaResultado); // se omiten los parametros de la funcion manejaResultado
