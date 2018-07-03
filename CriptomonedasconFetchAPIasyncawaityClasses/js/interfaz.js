class Interfaz{
    constructor(){
        this.init();
    }

    init(){
        //metodo para mandar a llamar las funciones y no sobrecargar el constructor
        this.construirSelect();
    }

    construirSelect(){
        COTIZADOR.obtenerMondedasApi()
        .then(datos =>{
           // console.log(datos.monedas.data);
            const arregloMonedas=datos.monedas.data;

            const select=document.getElementById('criptomoneda');
            //construir select desde la rest api
          // console.log(arregloMonedas[1].name);
          
           
         

            for (var i = 0, keys = Object.keys(arregloMonedas); i < keys.length; i++) {
                const option = document.createElement('option');
                option.value =arregloMonedas[keys[i]].id;
                option.appendChild(document.createTextNode(arregloMonedas[keys[i]].name));
                select.appendChild(option);
             
              
            }


        })
    }
    mostrarMensaje(mensaje,clases){
        const div= document.createElement('div');
        div.className=clases;
        div.appendChild(document.createTextNode(mensaje));
        //div para mensajes del html
        const divMensaje=document.querySelector('.mensajes');
        //agregamos el div a mensaje
        divMensaje.appendChild(div);
        //Quitar alerta
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000);

    }
    mostrarResultado(resultado, monedaSeleccionada){
        //En caso de que alla resultado anterior lo elimina
        const resultadoAnterior=document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }
        //Muestra el spinner
        this.mostrarSpinner();
        //Conversion de hora
        const valor=resultado.quotes[monedaSeleccionada];
        const hora=new Date(resultado.last_updated * 1000);
        const hora_actualizada=`${hora.getHours()}: ${hora.getMinutes()}`;
        
        let tmpleateHTML=``;
        tmpleateHTML=`<div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Resultado:</span>
                    <p>El precio de ${resultado.name} a moneda ${monedaSeleccionada} es de: ${valor.price}</p>    
                    <p>Última hora: ${valor.percent_change_1h}</p>
                    <p>Últimos 7 días: ${valor.percent_change_7d}</p>
                    <p>Última 24 horas: ${valor.percent_change_24h}</p>
                    <p>Última actualización: ${hora_actualizada} horas</p>    
                </div>
                            
        </div>                
        `;

        setTimeout(()=>{
            document.querySelector("#resultado").innerHTML=tmpleateHTML;
            document.querySelector('.spinner img').remove();

    },3000);
        
    }

    //mostrar spiner
    mostrarSpinner(){
        const spinnerGif=document.createElement('img');
        spinnerGif.src='img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGif);

    }
}