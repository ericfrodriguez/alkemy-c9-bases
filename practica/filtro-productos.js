//* 1. Tener un array de productos.
//* 2. Filtrar esos productos por un campo de texto.
//* 3. Mostrar los productos filtrados en mi HTML.

const productos = [
    {
        id: 1,
        nombre: 'Remera XL',
        precio: 50,
    },
    {
        id: 2,
        nombre: 'Remera XXL',
        precio: 100,
    },
    {
        id: 3,
        nombre: 'Remera S',
        precio: 75,
    },
    {
        id: 4,
        nombre: 'Jean Talle 42',
        precio: 150,
    },
    {
        id: 5,
        nombre: 'Jean Talle 44',
        precio: 80,
    },
];

const contenedor = document.getElementById('productos-container');
const form = document.getElementById('form');
const inputBuscar = document.getElementById('input-buscar');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const productosFiltrados = productos.filter((producto) => {
        return producto.nombre.includes(inputBuscar.value);
    });

    renderizarProductos(productosFiltrados);
});


// Accion de renderizar productos
function renderizarProductos(productosFiltrados) {
    const contenido = [];

    contenedor.innerHTML = '';
    
    productosFiltrados.forEach((producto) => {
        // Imprimir productos
    
        const cardProducto = document.createElement('p');
        cardProducto.innerText = `Nombre: ${producto.nombre}. Precio: ${producto.precio}`;
    
        contenido.push(cardProducto);
    });
    
    contenedor.append(...contenido);
}
