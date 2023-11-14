
//* Variables

var edad = 25;
// edad = 24;
// console.log(edad);

let nombre = 'Eric';
// nombre = 'Fernando';
// console.log(nombre);


const apellido = 'Rodriguez';
// apellido = 'Gomez'; // Con const no está permitido.
// console.log(apellido);

const x = 5;
const y = 10;

const suma = x + y;
// console.log(suma);


//* Nombres de variables

const nombreDeTelefono = '123456789'; // Camel Case
const nombre_de_telefono = '13456789'; // Snake Case

const numero2 = 2;
// const 2doNumero // No está permitido.
let _precio = 1000;
const $cantidad = 50;

//! Mala practica.
const _ = '';
const $ = '';

_precio = 20; // = . Asignar un valor a una variable
_precio == 20; // = = . Comparar valores.
_precio === 20; // = = = . Comparar valores + Tipo de dato.


let nombre2; 
// Declarar la variable. Esto lo inicializa con undefined.
// Declaraciones con const no son posibles sin inicializar.

// console.log(nombre2); // Imprime undefined
nombre2 = 'Eric Rodriguez'; // Asignarle el valor a la variable.
// console.log(nombre2); // Imprime 'Eric Rodriguez'
