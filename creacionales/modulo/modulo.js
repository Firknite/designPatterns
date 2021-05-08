/**
 * se encuentran basado en los objetos literales de js
 * cada vez que se define un objeto literal en js
 * con metodos y propiedades, por definicion se está utilizando
 * el patrón módulo
*/

const modulo = {
  prop: "mi prop",
  config: {
    lenguaje: "es",
    cache: true,
  },
  setConfig: (conf) => {
    modulo.config = conf;
  },
  isCacheEnabled: () => {
    console.log(modulo.config.cache ? "si" : "no");
  },
};
