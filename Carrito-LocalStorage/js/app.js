//variables
const carrito=document.getElementById('carrito');
const cursos=document.getElementById('lista-cursos');
const listaCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');
// Listeners
cargarEventListener();
function cargarEventListener(){
    cursos.addEventListener('click',comprarCurso);
    carrito.addEventListener('click',borrarCurso);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    document.addEventListener('DOMContentLoaded',leerLocalStorage);

}


// Funciones
// Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    // Delegation para agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso=e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
        
       // console.log(curso);
    }
}

function leerDatosCurso(curso){
    const infocurso={
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id')
    }
    //Funcion insertar al carrito de compras
    insertarCarrito(infocurso);
   
}
// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){

    const row=document.createElement('tr');
    row.innerHTML=`
        <td> <img src="${curso.imagen}"  width="100"/></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
    
    `;
    listaCarrito.appendChild(row);
    guardarCursoLocalStorage(curso);
}
// Elimina el elemento del carrito en el dom
function borrarCurso(e){
    e.preventDefault();
    let curso, cursoId;
    if(e.target.classList.contains('borrar-curso')){
        //if(confirm('¿Estas seguro de eliminar el curso?')){
            //el parentElement te da a que padre pertenece el elemento, mientras mas parentElement colocques va subiendo en el dom
        e.target.parentElement.parentElement.remove();   
        curso=e.target.parentElement.parentElement;
        cursoId=curso.querySelector('a').getAttribute('data-id');
      
        //}   
    }
    eliminarCursoLocalStorage(cursoId); 
}
// Vaciar carrito
function vaciarCarrito(){
    //forma lenta
    //listaCarrito.innerHTML='';
    //forma rapida recomendada
    while(listaCarrito.firstChild){
        //mientras siga teniendo hijos, los eliminara
    listaCarrito.removeChild(listaCarrito.firstChild);
    }

    vaciarLocalStorage();
    return false;

}
function vaciarLocalStorage(){
    localStorage.clear();
}

function guardarCursoLocalStorage(curso){
    let cursos;
    cursos=obtenerCursosLocalStorage();
    //curso seleccionado se almacena en el arreglo, con los datos de local storage si existen
    cursos.push(curso);
    localStorage.setItem('cursos',JSON.stringify(cursos));
    
}
// Comprobar localStorage
function obtenerCursosLocalStorage(){
    let cursosLS;

    //comprobar si hay cursos en localStorage
    if(localStorage.getItem('cursos')===null){
        cursosLS=Array();
    }else{
        cursosLS=JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;

}

function leerLocalStorage(){
    let leerCursosLS;
    leerCursosLS=obtenerCursosLocalStorage();
   

    leerCursosLS.forEach(function(data) {
        const row=document.createElement('tr');
        row.innerHTML=`
        <td> <img src="${data.imagen}"  width="100"/></td>
        <td>${data.titulo}</td>
        <td>${data.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${data.id}">X</a></td>
    
    `;
    listaCarrito.appendChild(row);
    });
}
// Elimina Curso por id local Storage
function eliminarCursoLocalStorage(cursoId){
    //console.log(cursoId);
    let cursosLS;
    cursosLS=obtenerCursosLocalStorage();

   
    cursosLS.forEach(function(data,index) {
        // Busca el id en el arreglo
        if(data.id === cursoId){
           // Elimina el elemento
           cursosLS.splice(index,1)
        }
    });

    localStorage.setItem('cursos',JSON.stringify(cursosLS));
}






