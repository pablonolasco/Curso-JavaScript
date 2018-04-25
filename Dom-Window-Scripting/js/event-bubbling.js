//bubbling 
/**
 * Este evento hace que se propague en todo los elementos del mismo contenedor el vento clic si es que existe mas de un evento, una forma de detener ese evento en cadena es colocar e.stopPropagation();
 */
const card=document.querySelector('.card');
const infoCurso=document.querySelector('.info-card');
const addCarrito=document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    console.log('clic card');
    e.stopPropagation();
});


infoCurso.addEventListener('click', function(e){
    console.log('clic info curso');
    e.stopPropagation();
});

addCarrito.addEventListener('click', function(e){
    console.log('clic agregar carrito');
    e.stopPropagation();
});