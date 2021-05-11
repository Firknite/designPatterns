/**
 * currying es una tecnica empleada para transformar las funciones en funciones unary
 * basicamente una funcion que solo recibe un argumento
 */

const suma = (a) => (b) => a + b;

suma(1)(5);

const resta = (b) => (a) => b - a;

const resta1 = resta(5);

resta1(1);
