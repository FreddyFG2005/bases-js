//Variables primitivos son los datos que no se pueden dividir en partes mas pequeñas
//string, number, boolean, null, undefined, symbol y bigint

//variables no primitivos son los datos que se pueden dividir en partes mas pequeñas
//array, object, function, date, regex y set

let nombre = 'Fabrizio Gabriel';
// console.log(nombre);

nombre = 'Pedro Pérez';
// console.log(nombre);

nombre = 'Destino Final';
// console.log(nombre);

// console.log(typeof nombre); // string

nombre[0] = 'J'; // no se puede cambiarun caracter de una cadena
// console.log(nombre); // Fabrizio Gabriel

//Los primitivos son inmutables, no se pueden cambiar
//Los primitivos son copiados, no se pasan por referencia
//Los primitivos no se pueden cambiar, se crean nuevos


let edad = 25;
console.log(edad);

edad = 30;
console.log(edad);

console.log(typeof edad); // number

//Los primitivos son inmutables
edad[0] = 2; // no se puede cambiar un caracter de un número
console.log(edad); // 30



let personaje = {
    nombre: 'Fabrizio Gabriel',
    edad: 25,
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    direccion: {
        calle: 'Calle Falsa',
        numero: 123
    },
    saludar: function() {
        console.log('Hola, soy ' + this.nombre);
    }
};

personaje.nombre = 'Pedro Pérez'; // se puede cambiar el valor de una propiedad
console.log('nombre',personaje.nombre); // Pedro Pérez
console.log('edad', personaje.edad); // 25

console.log('*****************************************');
let listaPersonajes = ['Deatpool', 'Capitan Perú', 'Sentry'];
console.log('listaPersonajes', listaPersonajes);

listaPersonajes[1] = 'Capitan Planeta'; // se puede cambiar el valor de un elemento
console.log('listaPersonajes', listaPersonajes); // ['Deatpool', 'Capitan Planeta', 'Sentry']