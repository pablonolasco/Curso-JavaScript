/*document.querySelector('#submit-buscador').addEventListener('click',function(evt){

    evt.preventDefault();//prevenir el evento para no ejecutar el accion del formulario, hasta que se validen los datos
    alert('hola');
});
*/
//js moderno
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);

function ejecutarBoton(evt){
    evt.preventDefault();
    console.log('hola');
    let elemento;
    elemento=evt;
    elemento=evt.target;//saber informacion del elemento clickeado
//se puede dar clic a cualquier elemento
    elemento=evt.target.id;

    console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText='Nuevo encabezado';
    
    alert('hola');
});