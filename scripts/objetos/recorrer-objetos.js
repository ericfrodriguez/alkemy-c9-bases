//* Arrays
// for(let indice = 0; indice < Array.length; indice++) {

// }

const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos() { // Metodo
        console.log('Se agregaron 5 productos'); // carrito.cantidad
    },
    eliminarProductos() {
        console.log('Se eliminaron 2 productos');
    },
    obtenerCantidad() {
        console.log('Cantidad de productos: ' + this.cantidad);
    },
}

const persona = {
    nombre: 'Eric',
    edad: 24,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre)
    },
}

// const usuario = {
//     nombre: 'Osvaldo'
// }

//* Recorrer objetos

// clave almacena el nombre de cada propiedad
for (let clave in carrito) {
    console.log(`${clave} : ${carrito[clave]}`);
}