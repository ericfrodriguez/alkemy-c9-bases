
//* Propiedades y metodos. Basico.
const auto = {
    color: 'Rojo',
    marca: 'Toyota',
    modelo: 'Prius'
}

const avion =  {
    cantidadDeAsientos: 60
}

// this == carrito
const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function() { // Metodo
        console.log('Se agregaron 5 productos'); // carrito.cantidad
    },
    eliminarProductos: function() {
        console.log('Se eliminaron 2 productos');
    },
    obtenerCantidad: function() {
        console.log('Cantidad de productos: ' + this.cantidad);
    },
}

//* Objeto this
// This hace referencia al objeto donde se utiliza

// this == persona
const persona = {
    nombre: 'Eric',
    edad: 24,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre)
    },
}

// console.log(carrito);

//* Declarar objeto con Object()

const usuario = new Object(); // Crea un objeto vacio

// Si no existe crea la propiedad
// Si ya existe, cambia el valor de la propiedad
usuario.nombre = 'Eric'; // Agrego la propiedad "nombre"

// console.log(usuario);

//* Acceder a propiedades. Notacion corchetes

// console.log(carrito.productos)
const propiedad = 'cantidadDeAsientos';
// console.log(avion[propiedad])


//! Eliminar propiedades

console.log(persona); // Antes de eliminar

delete persona.edad; 
delete persona['nombre']; 

console.log(persona); // Despues de eliminar "edad"