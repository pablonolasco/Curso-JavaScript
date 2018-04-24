// Eliminar de Local Storage
localStorage.clear();
let elemento;

elemento=document;
elemento=document.all;//regresa todos los elementos del body
elemento=document.all[10];//regresa solo el elemento indicado
elemento=document.head;
elemento=document.domain;
elemento=document.URL;
elemento=document.characterSet;
elemento=document.forms;//accedes a todos los formularios
elemento=document.forms[0];//indicar que formulario quieres
elemento=document.forms[0].id;//indicar que formulario quieres y su id
elemento=document.forms[0].className;//indicar que formulario quieres y su id
elemento=document.forms[0].classList;//las clases del formulario
elemento=document.forms[0].classList[1];//indicar que formulario quieres y su id
elemento=document.images;//indicar las imagenes
elemento=document.images[2].src;//indicar las imagenes
elemento=document.images[2].getAttribute('src');//indicar las imagenes
elemento=document.scripts;

let imagenes=document.images;
//console.log(imagenes);
let arregloImg= Array.from(imagenes);//convertir la informacion a un arreglo

arregloImg.forEach(function(data) {
    //console.log(data.getAttribute('src'));
    console.log(data);
});