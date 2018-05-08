document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJson);
document.getElementById('apiBTN').addEventListener('click',cargarAPI);
function cargarTXT(){
    // Llamar a archivo local
    fetch('datos.txt')
    .then(respuesta => respuesta.text())
    .then(data => document.getElementById('resultado').innerHTML=data)
    .catch(error => console.log(error));
}

function cargarJson(){
    // Llamar a archivo local, Hacer conexion
    fetch('empleados.json')
    .then(respuesta => respuesta.json())
    .then((data)=>{
        // Manipulacion de los datos retornados de la primera funcion
        let html='';
        data.forEach(function(empleado){
            html+=`
            <li>${empleado.nombre} ${empleado.puesto}</li>
            
            `;
        });
        document.getElementById('resultado').innerHTML=html;
    })
    .catch((error)=>{
        console.log(error);
    });
}

function cargarAPI(){
    // Llamar a archivo local, Hacer conexion
    fetch('https://picsum.photos/list')
    .then(respuesta=> respuesta.json())
    .then((data)=>{
        // Manipulacion de los datos retornados de la primera funcion
        let html='';
        data.forEach(function(photo){
            html+=`
            <li>${photo.author} <a href="${photo.post_url}" target="_blank">Ver imagen</a></li>
            <li></li>
            `;
        });
        document.getElementById('resultado').innerHTML=html;
    })
    .catch(error =>console.log(error));
}