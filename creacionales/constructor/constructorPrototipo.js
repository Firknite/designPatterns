/**
 * todos los metodos o propiedades que asignemos a los prototipos
 * van a ser asignadas a cada una de las instancias de estos nuevos objetos
*/

class MiClase {
  constructor(p1) {
    this.propiedad = p1;
  }

  metodo() {
    //soy un metodo prototipo
  }
}

const instancia = new MiClase(1);
console.log(instancia.__proto__);
