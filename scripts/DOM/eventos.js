const boton = document.querySelector('#mi-boton');

boton.addEventListener('click', (evento) => {
    console.dir(evento.target);
    console.log('Click!');
});

boton.addEventListener('click', () => {
    console.log('Otra accion...');
});

// boton.onclick = () => {
//     console.log('Click!');
// }

//! Sobreescribe eventos anteriores definidos con el metodo
// boton.onclick = () => {
//     console.log('Otra accion!');
// }

//* Doble click (dblclick)

const botonDoble = document.getElementById('mi-boton2');

botonDoble.addEventListener('dblclick', () => {
    console.log('Doble click!!!');
});

//* Movimiento del mouse (mousemove)

const contenedorMouse = document.getElementById('mouse-events');

// contenedorMouse.addEventListener('mousemove', () => {
//     console.log('Moviendo el mouse...');
// });

//* Mouse down y up

contenedorMouse.addEventListener('mousedown', () => {
    contenedorMouse.innerText = 'Mouse Presionado';
    contenedorMouse.classList.remove('bg-red');
    contenedorMouse.classList.add('bg-blue');
});

contenedorMouse.addEventListener('mouseup', () => {
    contenedorMouse.innerText = 'Mouse Arriba';
    contenedorMouse.classList.remove('bg-blue');
    contenedorMouse.classList.add('bg-red');
});

//* Key down y up

const nombre = document.getElementById('nombre');

nombre.addEventListener('keydown', () => {
    console.log('Tecla presionada');
});

nombre.addEventListener('keyup', () => {
    console.log('Tecla levantada');
});

//* Evento de cambio de valor (change)

const inputBusqueda = document.getElementById('input-buscar');

// inputBusqueda.addEventListener('change', (evento) => {
//     console.log(evento.target.value);
// });

//* Evento input
inputBusqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value);
});

//* Evento sumbit

const form = document.getElementById('myForm');
const inputNombre = document.getElementById('name');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(inputNombre.value);
});

