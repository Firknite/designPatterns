/**
 * cuando necesitamos actualizar alguna nueva version de alguna librería
 * sin hacer un gran impacto, utilizamos un metodo que
 * enmascare nuestra nueva librería como si fuera la antigua
 */

class Api {
    constructor() {
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case "get":
                // return fetch...
                case "post":
                    // return fetch...
                    break;
                default:
                    break;
            }
        };
    }
}

class Api2 {
    constructor() {
        (this.get = function (url, opts) {}),
            (this.post = function (url, opts) {});
    }
}

class ApiAdaptador {
    constructor() {
        const api2 = new Api2();
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case "get":
                    return api2.get(url, opts);
                case "post":
                    return api2.post(url, opts);
                    break;
                default:
                    break;
            }
        };
    }
}

const api = new Api();
api.operations("www.google.cl", { q: 1 }, "get");

const api2 = new Api2();
api2.get("www.google.cl", { q: 1 });

const adapter = new ApiAdaptador();
adapter.operations("www.google.cl", { q: 1 }, "get");
