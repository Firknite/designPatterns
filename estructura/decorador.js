/**
 * toma todas las instancias de una clase y les agrega funcionalidades a estas
 */

class Macbook {
    precio() {
        return 1000;
    }
}

const memoria = (mac) => {
    const v = mac.precio();
    mac.precio = function () {
        return v + 200;
    };
};

const macbook = new Macbook();
memoria(macbook);

// class Macbook {
//     constructor() {
//         this.precio = 1000;
//         this.pantalla = 11.6;
//     }
// }

// const macbook = new Macbook();

// macbook.agregarMemoria = function () {
//     this.precio += 100;
// };

// macbook.agregarMemoria()

// console.log(macbook.precio)
