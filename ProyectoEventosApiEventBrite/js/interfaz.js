class Interfaz{
     constructor(){
          this.init();
          //Leer resultado;
          this.listado=document.getElementById("resultado-eventos");
     }
     //Metodo para inicializar la app

     init(){
          this.imprimirCategorias();
     }

     //Metodo Imprimir Categorias
     imprimirCategorias(){
          const listado=  eventBrite.obtenerCategorias()
          .then(categories=>{
               const cats=categories.listadoCategorias.categories;
              // console.log(cats);
              const selectCategoria=document.getElementById("listado-categorias");
               for(var i=0, keys = Object.keys(cats); i < keys.length; i++){
                    const option=document.createElement('option');
                    option.value=cats[keys[i]].id;
                    option.appendChild(document.createTextNode(cats[keys[i]].name));
                    selectCategoria.appendChild(option);
               }
          })
          //quitar alert despues de 3 segundos

         

     }
     //Muestra los eventos
     mostrarEventos(eventos){
          const listaEventos=eventos.events;
          
          listaEventos.forEach(evento => {
               this.listado.innerHTML +=`
               <div class="col-md-4 mb-4">
                    <div class="card">
                         
                             <img class="img-fluid mb-2" src="${evento.logo !==null ? evento.logo.url : ''}" />
                        
                         <div class="card-body">
                              <h2 class="text-center">${evento.name.text}</h2>
                              <p class="lead text-info">Información del evento</p>
                              <p>${evento.description.text.substring(0,280)}...</p>
                              <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                              <span class="badge badge-primary">Fecha y hora: ${evento.start.local}</span>
                              <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                         </div>
                    </div>
               </div>
               
               
               `;
          
          });
          
     }

     //Metodo para imprimir mensaje
     mostrarMensaje(mensaje,clases){
          const div=document.createElement('div');
          div.classList=clases;
          //agregar texto
          div.appendChild(document.createTextNode(mensaje));
          //buscar el padre para colocar el div
          const buscadorDiv=document.querySelector('#buscador');
          buscadorDiv.appendChild(div);
          setTimeout(()=>{
               this.limpiarMensaje();
          },3000);
     }

     limpiarEventos(){
          this.listado.innerHTML='';
     }
     limpiarMensaje(){
          const alert=document.querySelector('.alert');
          if(alert){
                    alert.remove();
          }
     }
}