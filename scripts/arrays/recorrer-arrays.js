// for (inicio; condicionFinalizar; incremento) {
// Bloque de codigo
// }

//* Recorrer array con ciclo for

let frutas = [
    'Manzanas', // Indice 0
    'Naranjas', // Indice 1
    'Peras', // Indice 2
    'Kiwis', // Indice 3
    'Anana' // Indice 4
];


for (let indice = 2; indice < frutas.length; indice++) {
    // console.log(frutas[indice]);
}


//* Recorrer array con forEach

// frutas.forEach(function (elemento, indice) {
//     console.log(`Indice: ${indice}. Elemento: ${elemento}`);
// });

frutas.forEach(elemento => console.log(`Elemento: ${elemento}`));