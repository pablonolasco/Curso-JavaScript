function Seguro(marca,anio,tipoSeguro){
    this.marca=marca;
    this.anio=anio;
    this.tipoSeguro=tipoSeguro;

}
Seguro.prototype.cotizarSeguro=function(){

    /*
        1 americano 1.15
        2 asiatico 1.05
        3 europeo 1.35
    */
   const base=2000;
    let cantidad;
    switch(this.marca){
        case '1':
        cantidad=base*1.15;
        break;
        case '2':
        cantidad=base*1.05;
        break;
        case '3':
        cantidad=base*1.35;
        break;
    }
    // Leer año
    const diferencia= new Date().getFullYear()-this.anio;
    //cada año de diferencia hay que reducir 3% el valor del seguro
    let reduccion=((diferencia * 3 ) * cantidad)/100;
    cantidad=cantidad - reduccion;
    /* Si el seguro es basico se multiplica por 30% mas
       Si el seguro es completo se multiplica por 50% mas
    
    */
   if(this.tipoSeguro === 'basico'){
        cantidad*=1.30;
   }else{
       cantidad*=1.50;
   }
    return (cantidad);
}
//todo lo de que se muestra en la intefaz
function Interfaz(){}
//prottype mensaje error
Interfaz.prototype.mostrarMensaje=function(mensaje, tipo){
    const div=document.createElement('div');
    if(tipo==='error'){
        div.classList.add('mensaje','error');

    }else{
        div.classList.add('mensaje','correcto');

    }
    div.innerHTML=`${mensaje}`;
    formulario.insertBefore(div,document.querySelector('.form-group'));

    setTimeout(function(){
            document.querySelector('.mensaje').remove();
    },3000);

}
//Mostar resultado de la cotizacion
Interfaz.prototype.mostrarResultado=function(seguro, total){
    const resultado=document.getElementById('resultado');
    let marca;
    switch(seguro.marca){
        case '1':
        marca='Americana'
        break;
        case '2':
        marca='Asiatico'
        break;
        case '3':
        marca='Europeo'
        break;
    }
    // Crear div resumen
    const div=document.createElement('div');
    div.innerHTML=`
    <p class="header">Tu Resumen:</p>
    <p>Marca: ${marca}</p>
    <p>Año: ${seguro.anio}</p>
    <p>Tipo: ${seguro.tipoSeguro}</p>
    <p>Total:$ ${total}</p>
    `;
    const spinner=document.querySelector('#cargando img');
    spinner.style.display='block';

    setTimeout(function(){
        spinner.style.display='none';
        resultado.appendChild(div);
    },3000);
   
}

//listener
const formulario=document.getElementById('cotizar-seguro');
formulario.addEventListener('submit',function(e){
        e.preventDefault();
        //marca seleccionada
        const marca=document.getElementById('marca');
        const marcaSeleccionada=marca.options[marca.selectedIndex].value;
        //anio seleccionado
        const anio=document.getElementById('anio');
        const anioSeleccionado=anio.options[anio.selectedIndex].value;
        //leer valor de radio button, selector tipo jquery
        const tipo=document.querySelector('input[name="tipo"]:checked').value;
        // Crear instancia de la interfaz
        const interfaz= new Interfaz();
        if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
          interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo ','error');
        }else{
            // Limpiar resultados anteriores
            const resultado=document.querySelector('#resultado div');
            if(resultado!=null){
                resultado.remove();
            }
            // instanciar seguro 
            const seguro= new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
            const cantidad=seguro.cotizarSeguro();
            interfaz.mostrarResultado(seguro,cantidad);
            interfaz.mostrarMensaje('Cotizando.. ','correcto');

            
        }
              
});

//obtener año actual
const max= new Date().getFullYear(),
        min=max-20;
        const selectAnios= document.getElementById('anio');
        for(i=max;i>=min; i--){
            let option=document.createElement('option');
            option.value=i;
            option.innerHTML=i;
            selectAnios.appendChild(option);
           // console.log(i);

        }
