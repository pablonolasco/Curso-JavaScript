const eventBrite= new EventBrite();
const ui= new Interfaz();
const btnBuscar= document.getElementById('buscarBtn');

btnBuscar.addEventListener('click',(e)=>{
     e.preventDefault();
     
     let eventoTxt=document.getElementById('evento').value;
     let ls_categorias=document.getElementById('listado-categorias').value;

  

     //revisar caja de texto
     if(eventoTxt != ''){
          console.log(ls_categorias);
          eventBrite.obtenerEventos(eventoTxt,ls_categorias)
               .then(eventos =>{
                    if(eventos.listadoEventos.events.length > 0){
                        ui.limpiarEventos();
                        ui.mostrarEventos(eventos.listadoEventos);
                        
                    }else{
                         //No hay eventos enviar alerta
                         ui.mostrarMensaje('No hay resultados','alert alert-danger mt-4');
                    }
                   
               })
     }else{
          
          ui.mostrarMensaje('Escribe algo en el buscador','alert alert-danger mt-4');
     }
});
