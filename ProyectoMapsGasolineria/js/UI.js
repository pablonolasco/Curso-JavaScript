class UI{
     constructor(){
          //*Instanciar API
          this.api= new API();
          this.inicializarMapa();
         
     }

     inicializarMapa(){
        /**
           * *Inicializar y obtener la propiedad del mapa
           * @param map
           **/     
          this.latLng={lat:19.390519,lng:-99.3739778};
          this.mapa=new google.maps.Map(document.getElementById('mapa'),{
               center:this.latLng,
               zoom:5
          });
     }

     mostrarEstablecimiento(){
          this.api.obtenerDatos()
          .then(datos=>{
               const resultados=datos.respuestJson.results;
              
               this.mostrarMapa(resultados);
          });
     }

     mostrarMapa(datos){

          //*Alamcena infoWindow Activo
          let infoWindowActivo;
          //*Recorrer datos
          for(let dato of datos){
          
               let{latitude,longitude,calle,regular,premium}=dato;

               //*Objeto
               let latLngs={
                    lat:Number(latitude),
                    lng:Number(longitude)
               }
               //* Agregar el Pin donde muestra el punto de localizacion
               let marker = new google.maps.Marker({
                    position: latLngs,
                    map: this.mapa
               });


            

               //*Mostrar InfoWindow al hacer click
               marker.addListener('click',()=>{
                    //*Metodo de google maps

                    //Cerrar infoWindow

                    if(infoWindowActivo){
                         infoWindowActivo.close();
                    }

                    //*Crear infoWindow
                    let infoWindow=this.crearInfoWindow(calle,regular,premium);
                    //*Mostrar informacion

                    infoWindow.open(this.mapa,marker);

                    //*Asignar a activo

                    infoWindowActivo=infoWindow;
               })

            
          }

        
          
     }

     crearInfoWindow(calle,regular,premium){
             //*Mostrar infoWindow
             let contenido=`
             <p>Domicilio: ${calle}</p>
             <p>Precio Regular: $ ${regular} MXN</p>
             <p>Precio Premium: $ ${premium} MXN</p>
             `;
             let infoWindow= new google.maps.InfoWindow({
                  content:contenido
             });

             return infoWindow;
     }

     //*Mostrar Busqueda
     obtenerSugerencia(busqueda){

       this.api.obtenerDatos()
       .then(datos=>{
          const resultados=datos.respuestJson.results;
          //*Filtrar los resultados
          
          this.filtrarBusqueda(resultados,busqueda);
       });

     }

     filtrarBusqueda(datos,busqueda){
         
          //*Retorna -1 cuando no encuentra la busqueda
          //const filtro=datos.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
           const filtro = datos.filter( filtro => filtro.calle.indexOf(busqueda) !== -1 );

           //*Inicializar Mapa
          this.inicializarMapa();


          //*Mostrar Pines del filtro
          this.mostrarMapa(filtro);

     }

}