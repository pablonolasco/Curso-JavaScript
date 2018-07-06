class EventBrite{
     constructor(){
          this.token_auth='Z4A6XXEJYKFKLQDVPKB7';
          this.ordenar='date';
     }

     //Metodo para obtener las categorias de la api
    async obtenerCategorias(){
          const respuestCategorias= await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

          const listadoCategorias= await respuestCategorias.json();
          
          return{
               listadoCategorias
          }

     }
     async obtenerEventos(evento,ls_categoria){
           const respuestaEvent=await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${ls_categoria}&token=${this.token_auth}`);

           const listadoEventos=await respuestaEvent.json();

           return{
                 listadoEventos
           }

     }
}