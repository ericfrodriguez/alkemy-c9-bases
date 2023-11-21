//* Conocer la longitud de un array (.length)

let frutas = [
    'Manzanas', // Indice 0
    'Naranjas', // Indice 1
    'Peras',
    'Kiwis',
    'Anana'
];
// console.log(frutas.length);


//* Agregar elementos al final (.push())

// console.log(frutas);

// frutas.push('Kiwis', 'Anana');
// console.log(frutas);


//* Agregar elementos al principio (.unshift())

// console.log(frutas);

// frutas.unshift('Kiwis', 'Anana');
// console.log(frutas);

//! Eliminar ultimo elemento (.pop())

// console.log(frutas);

// const ultimaFruta = frutas.pop();
// console.log(frutas);
// console.log(ultimaFruta);

//! Eliminar el primer elemento (.shift())

// console.log(frutas);

// const primerFruta = frutas.shift();
// console.log(frutas);
// console.log(primerFruta);

//! Eliminar varios elementos (.splice())

// console.log(frutas);

// frutas.splice(1, 2); // Elimina naranjas y peras
// console.log(frutas);


//* Buscar un elemento y devolver el indice (.indexOf())

// console.log(frutas);

// console.log(frutas.indexOf('Mangos')); 
// Si existe nos devuelve el indice
// Si NO existe devuelve -1


//* FIltrar elementos de un array a partir de una condicion (.filter())

const precios = [10, 25, 50, 150, 750, 1500, 4000];

// const preciosFiltrados = precios.filter(function (elemento) {
//     return elemento < 800;
// });

const preciosFiltrados = precios.filter(elemento => elemento < 800);

console.log(preciosFiltrados);