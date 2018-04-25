const busqueda=document.querySelector('#buscador');
/*obtiene lo que se escribe en la caja de texto
busqueda.addEventListener('keydown',obtenerEvento);
*/
/* Obtiene el valor de la tecla cuando se deja de push
busqueda.addEventListener('keyup',obtenerEvento);
*/
/* Evento que obtiene lo escrito despues de teclear la ultima tecla
busqueda.addEventListener('keypress',obtenerEvento);
*/
/* Evento que se ejeucta cuando se esta dentro de la caja de texto
busqueda.addEventListener('focus',obtenerEvento);
*/
/* Evento que se ejecuta cuando se deja de estar dentro de la caja de texto, se usa mucho para validar formularios
busqueda.addEventListener('blur',obtenerEvento);*/
/* Evento que se dispara cuando se teclea ctrl+x
busqueda.addEventListener('cut',obtenerEvento);
*/

/* Evento que se dispara cuando se teclea ctrl+c
busqueda.addEventListener('copy',obtenerEvento)
*/

/* Evento que se dispara cuando se teclea ctrl+v
busqueda.addEventListener('paste',obtenerEvento)
*/
/* Evento que verifica todos los eventos anteriores en un todo en uno
busqueda.addEventListener('input',obtenerEvento)
*/
/* Evento que se dispara cuando se haya cambiado
busqueda.addEventListener('change',obtenerEvento)
*/


function obtenerEvento(e){
    //document.querySelector('#encabezado').innerText=busqueda.value;
    //console.log(busqueda.value);
    console.log(`Evento ${e}`);
}