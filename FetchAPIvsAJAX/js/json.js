document.getElementById('jsonBtn').addEventListener('click',cargarJson);
function cargarJson(){
    // Llamar a archivo local, Hacer conexion
    fetch('empleados.json')
    .then(function(respuesta){
        //retonar los datos en texto, puede tomar diferentes tipos de retorno, como json
        return respuesta.json();
    })
    .then(function(data){
        // Manipulacion de los datos retornados de la primera funcion
        document.getElementById('resultado').innerHTML=data;
    })
    .catch(function(error){
        console.log(error);
    });
}