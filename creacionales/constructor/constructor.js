/**
 * nos permite crear objetos en base a una clase
 */

class MiClase {
  constructor(p1) {
    (this.propiedad = p1),
      (this.metodo = () => {
        //soy un metodo
      });
  }
}

const instancia = new MiClase(1);
console.log(instancia);
