const encabezado=document.querySelector('#encabezado');
const enlaces=document.querySelector('.enlace');
const boton=document.querySelector('#vaciar-carrito');
/* Evento clic
boton.addEventListener('click',obtenerEvento);
*/
/* Evento doble clic
boton.addEventListener('dblclick',obtenerEvento);
*/
/* Evento al colocarse sobre el boton
boton.addEventListener('mouseenter',obtenerEvento);
*/
/* Evento que se dispara al salir del boton
boton.addEventListener('mouseleave',obtenerEvento);
*/
/* Evento sobre el elemento
boton.addEventListener('mouseover',obtenerEvento);
*/

/* Evento sobre el elemento
boton.addEventListener('mouseout',obtenerEvento);
*/

/* Evento sobre el elemento
boton.addEventListener('mousedown',obtenerEvento);
**/
/* Evento sobre el elemento cuando se deja seleccionado y despues se sale del boton
boton.addEventListener('mouseup',obtenerEvento);
*/

// Evento que se ejecuta colcandote sobre el elemento y se pude disparar cada ves que estas sobre el
encabezado.addEventListener('mousemove',obtenerEvento);

function obtenerEvento(e){
    console.log(`evento ${e.type}`);
}