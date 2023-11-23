const listaEstudiantes = [
    {
        nombre: 'Eric',
        edad: 24,
        curso: 'C9',
        calificaciones: [7, 8, 5],
    },
    {
        nombre: 'Walter',
        edad: 20,
        curso: 'C9',
        calificaciones: [10, 2, 6],
    },
    {
        nombre: 'Fede',
        edad: 30,
        curso: 'C9',
        calificaciones: [8, 4, 9],
    }
];

// Promedio Fede = (8 + 4 + 9) / 3
// Cantidad de calificaciones = cantidad de elementos en el array

// Calificaciones es un array de numeros
function calcularPromedio(calificaciones) {
    let suma = 0;

    for (let indice = 0; indice < calificaciones.length; indice++) {
        suma += calificaciones[indice]; // suma = suma + calificaciones[indice]
    }

    return suma / calificaciones.length;
}

listaEstudiantes.forEach((estudiante) => {
    estudiante.promedio = calcularPromedio(estudiante.calificaciones);

    console.log(estudiante);
    // Imprimir datos con formato
    // Utilizar for in para mapear claves y valores de estudiantes
})