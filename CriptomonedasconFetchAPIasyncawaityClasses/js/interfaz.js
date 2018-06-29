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
        let moneda=monedaSeleccionada;
        const valor=`${resultado.moneda} ${monedaSeleccionada}`;
        console.log(valor);
    }
}