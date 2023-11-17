
const saludar = () => console.trace('Bienvenidx!');

function darBienvenida(callback) { // callback == saludar
    const edad = 18;

    if(edad >= 18) {
        callback(); // saludar();
    }
}

darBienvenida(saludar);
darBienvenida(() => console.trace('Otro mensaje'));
