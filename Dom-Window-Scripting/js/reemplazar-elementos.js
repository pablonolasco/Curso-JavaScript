//crear enlace
const nuevoEncabezado=document.createElement('h2');
nuevoEncabezado.id='encabezado';

//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));
//elemento anterior (sera remplazado)
const anterior= document.querySelector('#encabezado');
//elemento padre
const elPadre=document.querySelector('#lista-cursos');

//reemplazar en el padre
elPadre.replaceChild(nuevoEncabezado,anterior);
console.log(anterior.parentElement);