const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
// console.log(inputEmail);

const mostrarDatos = () => {
    console.dir(inputNombre.value);
    console.dir(inputEmail.value);
    // console.log('Click!!!');
}

//* querySelector

/* 
ID: #mi-id
CLASE: .mi-clase
ETIQUETA: div, p, h1
COMBINACIONES: div .bg-red
*/

const lorem = document.querySelector('div p.bg-red');
console.log(lorem);

//* querySelectorAll
const parrafos = document.querySelectorAll('p.bg-red');
console.log(parrafos);

parrafos.forEach((elemento) => {
    elemento.classList.add('text-xl');
    elemento.innerHTML = 'El mismo texto'
});