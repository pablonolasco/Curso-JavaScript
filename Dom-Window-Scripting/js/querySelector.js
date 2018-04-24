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
let enlace;
enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:nth-child(3)');//elemento seleccionar 3
console.log(enlace);
