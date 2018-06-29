const COTIZADOR= new Cotizador();
const UI= new Interfaz();

//obtener formulario
const formulario=document.getElementById('formulario');
//event listener cuando se envia el formulario
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    //leer la moneda seleccionada
    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    //leer criptomoneda
    const criptomonedaSeleccionada=document.getElementById('criptomoneda').value;
  //  const criptomonedaSeleccionada=criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || criptomonedaSeleccionada === ''){
           
            UI.mostrarMensaje('Ambos campos son obligatorios','deep-orange darken-4 card-panel');
    }else{
      
        //Todo correcto, tomar valores
        COTIZADOR.obtenerValores(monedaSeleccionada,criptomonedaSeleccionada)
                .then(datos=>{
                    UI.mostrarResultado(datos.resultado.data.quotes,monedaSeleccionada);
                    console.log(datos.resultado);
                })
    }
   
  
})