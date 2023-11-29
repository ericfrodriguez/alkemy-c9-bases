//* createElement
// Crear un nuevo elemento
const parrafo = document.createElement('p');
console.info(parrafo);

// Asignarle contenido a ese elemento
parrafo.innerText = 'Este es un nuevo parrafo';

// Obtengo un contenedor
const contenedor = document.getElementById('mi-id');

// Inserto el nuevo elemento en el documento
contenedor.appendChild(parrafo);

//! removeChild
const lorem = document.getElementById('p-lorem');

// contenedor.removeChild(parrafo);
// contenedor.removeChild(lorem);

//! remove
parrafo.remove();
lorem.remove();
