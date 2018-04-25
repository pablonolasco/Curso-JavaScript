//crear enlace
const enlace=document.createElement('a');
enlace.className='enlace';
enlace.id='nuevo-id';
enlace.setAttribute('href','#');
enlace.textContent='nuevo enlace';

document.querySelector('#secundaria').appendChild(enlace);//appenChild agrega elemento al dom
console.log(enlace);