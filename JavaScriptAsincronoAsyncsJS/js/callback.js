//Simulacion de una api para traer los registros de paises de manera que cada 1 segundo se actualice
const paises=['Fancia','España','Australia','Inglaterra','Irlanda'];
// Se agrega un pais despues de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    },2000);
}
// Paises se muestran despues de 1 segundo
function mostarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });

       document.getElementById('contenido').innerHTML=html;
    },1000);
}
// Agregamos nuevo pais

nuevoPais('Alemania',mostarPaises);

mostarPaises();

