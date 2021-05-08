/**
 * Nos entrega la ventaja de que no siempre se va a tener que utilizar la sintaxis
 * de objetos literales, sino que además se pueden utilizar funciones e ifis para
 * la creación de nuestros módulos
*/

const resultado = (() => {
  const x = {};
  return {
    a: () => console.log(x),
    b: (key, val) => (x[key] = val),
  };
})();

console.log(resultado.a);
