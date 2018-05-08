//
document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos(){
    
    // Variable para peticion, maneja todos los tipos de datos
    // Crear el objeto
    const xhr= new XMLHttpRequest();
    // Abrir conexion, get, post, put, delete
    //xhr.open('GET','url',llamado asincrono);
    xhr.open('GET','datos.txt',true);
    
   // JS Moderno
    // una vez que carga
   /* xhr.onload=function(){
        // status 200 ok, 403  prohibido 404 no encontrado
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('listado').innerHTML=`<h1> ${this.responseText}</h1>`
        }
    }
    */
    // JS Viejo
    xhr.onreadystatechange=function(){
        /*
            0 No inicializado
            1 Conexion establecida
            2 Recibido
            3 Procesando
            4 Respuesta lista
        */
       console.log("Estado: "+this.readyState);
        if(this.readyState === 4 && this.status === 200){
        document.getElementById('listado').innerHTML=`<h1> ${this.responseText}</h1>`

       }
    }
    // enviar el request
    xhr.send();

    

}