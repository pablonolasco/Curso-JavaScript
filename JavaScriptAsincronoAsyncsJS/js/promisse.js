/*//promises
const esperando= new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve caso de exito
        //reject casdo de fallo
        resolve('se ejecuto');
    },5000);
});
// then va de la mano del un promise, este metodo debe existir para que funcion promisse
esperando.then(function(mensaje){
    console.log(mensaje);
});*/

const aplicarDescuento= new Promise(function(resolve,reject){
        const descuento=false;
        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject('No se puede aplicar el descuento');
        }
});
aplicarDescuento.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);//va de la mano de reject
});