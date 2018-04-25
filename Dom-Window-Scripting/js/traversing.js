/*////////////////--De Padre a Hijo----/////////////////////// */
const navegacion=document.querySelector('#principal');
const barra=document.querySelector('.barra');
const cursos=document.querySelectorAll('.card');
//los nodos son las etiquetas html
//navegacion.childNodes; regresa todos elementos hijos pero contanto los espacios por renglon
//navegacion.children obtiene solo los elementos hijos sin contar los espacios
//navegacion.children[0].nodeName regresa el nombre del nodo

//navegacion.children[0].nodeType regresa el tipo de nodo
/*
Tipos de Nodos
    1=Elemento
    2=Atributos
    3=Texto Nodo
    8=Comentarios
    9=documentos
    10=doctype
*/
console.log(barra.children[0].children[0].children[2].children[0].textContent='Cambio de parrafo');
console.log(cursos[0].lastElementChild);//retorna el ultimo elemento
console.log(cursos[0].firstElementChild);//retorna el primer elemento
console.log(cursos[0].childElementCount);//retorna el total de elemento

/*///////////////---De Hijo a Padre----/////////////////////// */
const enlace=document.querySelectorAll('.enlace');
const card=document.querySelectorAll('.card');
const enlaces_padre=document.querySelectorAll('.enlace');
console.log(enlace[0].parentElement);// retorna elemento padre hacia arrina
console.log(enlace[0].parentElement.parentElement);// retorna elemento padre hacia arrina


console.log(card[0].parentElement.parentElement.parentElement.children[0].textContent='Hola');// retorna elemento padre hacia arrina
console.log(enlaces_padre[4].previousElementSibling.previousSibling);// retorna elemento anterior, solo cuando estan en el mismo contenedor
//java moderno
console.log(enlaces_padre[0].nextElementSibling.nextElementSibling.parentElement.children[4]);// retorna elemento anterior, solo cuando estan en el mismo contenedor