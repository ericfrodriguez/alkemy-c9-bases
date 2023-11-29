// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);


//* getElementById
const contenedor = document.getElementById('mi-id');
// console.log(contenedor);

//* getElementsByTagName
const parrafos = document.getElementsByTagName('p');
// console.log(parrafos);

//* getElementsByClassName
const parrafosRojos = document.getElementsByClassName('bg-red');
const parrafosAzules = document.getElementsByClassName('bg-blue');

// console.log(parrafosRojos);
// console.log(parrafosAzules);

//* innerText

// console.log(contenedor.innerText);
// contenedor.innerText = 'Nuevo contenido';

//* textContent

// console.log(contenedor.textContent);
// contenedor.textContent = 'Nuevo contenido';

//* innerHTML

// console.log(contenedor.innerHTML);
// contenedor.innerHTML = `
//     <img width="150" src="https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/93/aa/93aa8de92702553e21a87ba0b6d53269557b159a.jpg">
//     <p>Ver Perfil<p>
// `;

//* className
const lorem = document.getElementById('p-lorem');

console.log(lorem);
// lorem.className += ' text-xl';
console.log(lorem.className);

//* classList
lorem.classList.add('text-xl', 'text-bold'); // Agregar clases
lorem.classList.remove('text-xl'); // Remover clases