//Callback es un llamado de una funcion en otra

const ciudades=['Londres','New York','Madrid','Paris','Viena'];
//Recomendacion de callback, inline son la mejor manera
// Inline Callback, se le conoce de esa manera porque se llama en una misma linea
ciudades.forEach(function(ciudad){
    console.log(ciudad);
})
/*
// Con funcion definida
function callback(ciudad){
    console.log(ciudad);
}
 ciudades.forEach(callback);
 */