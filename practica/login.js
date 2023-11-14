const usuarioValido = 'ericfr';
const contraseniaValida = 'hola1234';

const usuario = prompt('Ingrese su usuario.');
const contrasenia = prompt('Ingrese su contraseña.');

const verificacionCredenciales = (usuarioValido === usuario) && (contraseniaValida === contrasenia);

const mensaje = verificacionCredenciales
    ? `Bienvenidx de nuevo ${usuario}!`
    : 'Credenciales incorrectas!!!'

alert(mensaje);

// if(verificacionCredenciales) { 
//     alert('Bienvenidx de nuevo!');
// } else {
//     alert('Credenciales incorrectas!!!');
// }