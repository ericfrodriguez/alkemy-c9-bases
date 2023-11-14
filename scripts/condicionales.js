
//* if - else
// const edad = 17;

// if (edad >= 18) { // Si es verdadero ejecuto el bloque de código.

//     console.log('Eres mayor de edad.');

// } else if (edad === 17) {

//     console.log('Te falta un año para los 18 :)');

// } else {

//     console.log('Necesitas ser mayor de edad.');

// }

//* Operador ternario (condicion ? verdadero : falso)

// const edad = 16;

// const mensaje = edad >= 18 // Condicion
//     ? 'Eres mayor de edad.' // Se ejecuta si la condicion es verdadera
//     : 'Necesitas ser mayor de edad.';// Se ejecuta si la condicion es falsa

// console.log(mensaje);

// console.log('Otros procesos...');

//* Switch

const edad = 89;

switch (edad) {
    case 18:
        console.log('Tienes 18 años.');
        break;
    case 17:
        console.log('Te falta un año para los 18.');
        break;
    case 16:
        console.log('Te faltan dos años para los 18.');
        break;

    default:
    console.log('Edad invalida!');
        break;
}