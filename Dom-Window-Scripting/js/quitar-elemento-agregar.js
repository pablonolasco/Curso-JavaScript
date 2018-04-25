const enlaces=document.querySelectorAll('.enlace');
const navegacion =document.querySelector('#principal');
enlaces[5].remove();//eliminar elemento
navegacion.removeChild(enlaces[0]);//eliminar seleccionando el padre
const primer_lista=document.querySelector('.enlace');
//leer atributos
let elemento;
elemento=primer_lista.className;
elemento=primer_lista.classList.add('nueva-clase');
elemento=primer_lista.classList.remove('nueva-clase');
elemento=primer_lista.classList;
//js moderno
elemento=primer_lista.getAttribute('href');//se debe llamar al atributo para despues asignarle un valor
primer_lista.setAttribute('href','http://facebook.com');
primer_lista.setAttribute('data-id',20);//atributo html5
elemento=primer_lista.hasAttribute('data-id');//verificar que existe el atributo
primer_lista.removeAttribute('data-id');//eliminar atrubuto

elemento=primer_lista;
console.log(elemento);