//*Instanciar clases
const ui= new UI();

addEventListener('DOMContentLoaded',()=>{
     ui.mostrarEstablecimiento();
});

// *Habilitar busqueda en vivo

const buscador=document.querySelector('#buscar input');

buscador.addEventListener('input',()=>{
     
     //*Si el length es mayor que 5, buscar sugerencias

     if(buscador.value.length>3){
          ui.obtenerSugerencia(buscador.value);

     }else if(buscador.value === 0){
         //*Reiniciar el Mapa
         ui.inicializarMapa();
         
         //*Mostrar Pines
         ui.mostrarEstablecimiento();

     }else{
          //*Reiniciar el Mapa
         ui.inicializarMapa();
         
         //*Mostrar Pines
         ui.mostrarEstablecimiento();
     }
});