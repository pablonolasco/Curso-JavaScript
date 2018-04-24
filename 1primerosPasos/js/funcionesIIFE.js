//funciones IIFE
/*(function(tecnologia){
    console.log(`Esta es una funcion ${tecnologia}`);
})('javascript');*/

const musica={
    reproducir:function(id){
        console.log(`Reproduciendo musica ${id}`);
    },
    pausar:function(){
        console.log(`Pausar Música`);
    }
}
//los metodos tambien pueden crearse afuera del objeto
musica.borra=function(id){
    console.log(`Borrando la cancion con el ID ${id}`);
}
musica.reproducir(30);
musica.pausar();
musica.borra(30);

