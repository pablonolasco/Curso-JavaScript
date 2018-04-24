try {
    algo();
} catch (error) {
    console.log(error);
}finally{
    console.log('siempre se ejecuta');
}
function obtenerClientes(){
    console.log('Descargando...');
    setTimeout(function(){
        console.log('Completo');
    },3000);
}

obtenerClientes();