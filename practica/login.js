
const iniciarSesion = (usuario, contrasenia) => {
    const usuarioValido = 'ericfr';
    const contraseniaValida = 'hola1234';
    
    const verificacionCredenciales = (usuarioValido === usuario) && (contraseniaValida === contrasenia);
    
    const mensaje = verificacionCredenciales
    ? 'Inicio de sesión exitoso'
    : 'Credenciales incorrectas!!!'
    
    return mensaje;
}

const usuario = prompt('Ingrese su usuario.');
const contrasenia = prompt('Ingrese su contraseña.');
const resultado = iniciarSesion(usuario, contrasenia);

alert(resultado);






// if(verificacionCredenciales) { 
//     alert('Bienvenidx de nuevo!');
// } else {
//     alert('Credenciales incorrectas!!!');
// }