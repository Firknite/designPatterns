/**
 * como principal fundamento del por qué utilizar composición
 * es que debemos VER que es lo que hace nuestro código sin ver COMO lo hace
 */

const users = [
    { edad: 17, nombre: "Nicolas", apellido: "Soto" },
    { edad: 18, nombre: "Chanchito", apellido: "Feliz" },
    { edad: 12, nombre: "Loreto", apellido: "Fernandez" },
    { edad: 1, nombre: "Sofia", apellido: "Zapata" },
];

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const filter = (f) => (xs) => xs.filter(f);

const head = (xs) => xs[0];

const formateo = (x) => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} años`;

const traePrimerInfante = compose(
    formato,
    formateo,
    head,
    filter((x) => x.edad < 2)
);

const traePrimerInfantePipe = pipe(
    filter((x) => x.edad < 2),
    head,
    formateo,
    formato
);

console.log(traePrimerInfante(users));
console.log(traePrimerInfantePipe(users));

// const traePrimerInfante = (data) => {
//     const infantes = data.filter((x) => x.edad < 2);
//     const primerInfante = infantes[0];
//     const infante = {
//         nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
//         edad: primerInfante.edad,
//     };
//     return `${infante.nombreCompleto} tiene ${infante.edad} años`;
// };
