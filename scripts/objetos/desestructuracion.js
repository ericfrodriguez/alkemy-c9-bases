const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function () { // Metodo
        console.log('Se agregaron 5 productos'); // carrito.cantidad
    },
    eliminarProductos: function () {
        console.log('Se eliminaron 2 productos');
    },
    obtenerCantidad: function () {
        console.log('Cantidad de productos: ' + this.cantidad);
    },
}

const { 
    cantidad, // Destructuring. Desestructuracion
    productos: products, // Destructuring assignment
    agregarProductos } = carrito;

// const cantidad = carrito.cantidad;
// const productos = carrito.productos;
// const agregarProductos = carrito.agregarProductos;

// console.log(cantidad);
// console.log(products);

// agregarProductos()