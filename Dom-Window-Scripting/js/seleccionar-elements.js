let elemento;

elemento=document.getElementById('header').id;
elemento=document.getElementById('header').className;

console.log(elemento);

let encabezado;
encabezado=document.getElementById('header').textContent// o innerText obtener texto
encabezado=document.getElementById('header').innerText;
encabezado=document.getElementById('encabezado');
encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px';
encabezado.textContent='Los mejores cursos';
encabezado.innerText='Los mejores cursos ++';

console.log(encabezado);
