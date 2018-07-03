///EMC7 solo disponible en chrome
/*async function obtenerCliente() {
    const clientes = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Clientes descargados...');
        },2000);
    });
    //error
    const error=false;
    if(!error){
        //await espera hasta que se termine de ejecutar resolve
        const respuesta=await clientes;
        return respuesta;
    }else{
        await Promise.reject(`Hubo un error`);
    }
}

obtenerCliente()
.then(res=>console.log(res))
.catch(error=console.log(error));*/

//await siempre espera a que se termine de ejecutar una funcion, para inicicar otra
async function leerTodos(){
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/todos`);
    //Procede cuando la respuesta este hecha 
    const datos=await respuesta.json();

    return datos;

}

leerTodos()
.then(usuarios => console.log(usuarios));