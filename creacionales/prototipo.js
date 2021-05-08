/**
 * podemos utilizar objetos ya creados para generar prototipos para otros objetos nuevos
 * eliminando la duplicidad de codigo
 */

const perro = {
    raza: 'kilterrier',
    ladrar: function() {
        console.log(`Guau! soy un ${this.raza}`)
    }
}

const kiltro = Object.create(perro);

kiltro.ladrar();

kiltro.raza = 'bull dog'

kiltro.ladrar()