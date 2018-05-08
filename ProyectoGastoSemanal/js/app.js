// Variables
const presupuestoPromp=prompt('Cual es tu presupuesto Semanal?');
const formulario=document.getElementById('agregar-gasto');

let cCantidadPresupuesto;
// Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto);
        this.restante=Number(presupuesto);

    }
    presupuestoRestante(cantidad=0){
        return this.restante-=Number(cantidad);
    }
}

// Clase de Interfaz maneja todo lo relacionado a el HTML
class Intertaz{
       
    insertarPresupuesto(cantidad){
            const presupuestoSpan=document.querySelector('span#total');
            const restanteSpan=document.querySelector('span#restante');
            presupuestoSpan.innerHTML=`${cantidad}`;
            restanteSpan.innerHTML=`${cantidad}`;
        }
       
        imprimirMensaje(mensaje,tipo){
            const divMensaje=document.createElement('div');
            divMensaje.classList.add('text-center','alert');
            if(tipo === 'error'){
                divMensaje.classList.add('alert-danger');
            }else{
                
                divMensaje.classList.add('alert-success');
            }
            divMensaje.appendChild(document.createTextNode(mensaje));
            // Insertar en el DOM
            document.querySelector('.primario').insertBefore(divMensaje,formulario);

            setTimeout(function(){
                document.querySelector('.primario .alert').remove();
                formulario.reset();
            },3000);
        }

        agregarGastoListado(nombre,cantidad){
            const gastosListado=document.querySelector('#gastos ul');
            // crear un li
            const li=document.createElement('li');
            li.className='list-group-item d-flex justify-content-between';
            // Insertar el gasto
            li.innerHTML=`${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            // Insertar al HTML
            gastosListado.appendChild(li);

        }

        // Comprueba el presupuesto restante
        presupuestoRestante(cantidad){
            const restante=document.querySelector('span#restante');
            // Leemos el presupuesto restante

            const presupuestoRestanteUsuario=cCantidadPresupuesto.presupuestoRestante(cantidad);
            restante.innerHTML=`${presupuestoRestanteUsuario}`;
            console.log(presupuestoRestanteUsuario);
            this.comprobarPresupuesto();
        }

        // Comprobar presupuesto

        comprobarPresupuesto(){
            const presupuestoTotal=cCantidadPresupuesto.presupuesto;
            const presupuestoRestante=cCantidadPresupuesto.restante;
            // Comprobar el 25%
            if((presupuestoTotal / 4) > presupuestoRestante){
                const restante=document.querySelector('.restante');
                restante.classList.remove('alert-success','alert-warning');
                restante.classList.add('alert-danger');


            }else if((presupuestoTotal / 2) > presupuestoRestante){
                const restante=document.querySelector('.restante');
                restante.classList.remove('alert-success');
                restante.classList.add('alert-warning');
            }
          //  console.log(cCantidadPresupuesto);
        }
}
// Event Listener
document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoPromp === null || presupuestoPromp === ''){
          
    }else{
       
        // Instanciar un presupuesto
            cCantidadPresupuesto=new Presupuesto(presupuestoPromp);
         
        // Interfaz la clase de Interfazs
        const ui= new Intertaz();
        ui.insertarPresupuesto(cCantidadPresupuesto.presupuesto);
        /*setTimeout(function(){
            window.location.reload();
        },3000);*/
    }
    
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();
   
    // Obtener datos de interfaz
    const nombreGasto=document.querySelector('#gasto').value;
    const cantidadGasto=document.querySelector('#cantidad').value;
    // Interfaz la clase de Interfaz
    const ui= new Intertaz();
    if(nombreGasto === '' || cantidadGasto === ''){
        //Mensaje y tipo
        ui.imprimirMensaje('Hubo un error','error');
    }else{
        //Mensaje y tipo
        ui.imprimirMensaje('Correcto','correcto');
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});