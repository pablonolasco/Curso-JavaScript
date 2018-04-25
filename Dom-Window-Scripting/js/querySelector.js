////////////////////////*otro tipo de selector querySelector*/////////////////////////////////

//aplicar css document
//query selector puede elegir por class o id 
//solo te obtiene un elemento
//const encabezado=document.querySelector('#encabezado');//obtener el id con base al css
//const encabezado=document.querySelector('.encabezado');//obtener el id con base al css
//const encabezado=document.querySelectorAll('.enlace');//obtener todos los elementos con esa clase
//const encabezado=document.querySelectorAll('h1');//obtener el elemento h1
//const encabezado=document.querySelectorAll('.card img');//obtener el elemento img de la clase card

//encabezado.style.color='#fff';
//encabezado.textContent='Los mejores cursos';
/*let enlace;
enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:nth-child(3)');//elemento seleccionar 3
*/
////////////////////////*otro tipo de selector getElementsByClassName*/////////////////////////////////

//este trae todos los elementos a diferencia de query selector que solo trae un elemento
let enlaces=document.getElementsByClassName('enlace')[3];// se le indica que elemento se quiere seleccionar
enlaces.style.background='#333';
enlaces.textContent='Nuevo enlace';
const lista_enlace=document.querySelector('#principal').getElementsByClassName('enlace');

////////////////////////*otro tipo de selector getElementsByTagName*/////////////////////////////////

const links =document.getElementsByTagName('a');//obtiene todas las etiquetas a html

links[17].style.color='red';

let arreglo= Array.from(links);///asi se convierte en un arreglo
/*
arreglo.forEach(function(data) {
    data.style.color='red';
});

*/
////////////////////////*otro tipo de selector getElementsByTagName*/////////////////////////////////
const enlace_all=document.querySelectorAll('#principal .enlace');//obtiene multiples elementos
enlace_all[1].style.background='#383';
enlace_all[1].textContent='Nuevo enlace';
const enlace_impar=document.querySelectorAll('#principal a:nth-child(odd)');//obtiene los elementos impares
enlace_impar.forEach(function(data) {
    data.style.color='red';
    data.textContent='red';
});

console.log(enlace_impar);
