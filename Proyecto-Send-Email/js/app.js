// variables
const email=document.getElementById('email');
const asunto=document.getElementById('asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar=document.getElementById('enviar');
const formularioEnviar=document.getElementById('enviar-mail');
const btnReset=document.getElementById('resetBtn');

// Eventos
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
    //Campos formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    formularioEnviar.addEventListener('submit',enviarEmail);
    btnReset.addEventListener('click',resetFormulario);
}



//Funciones

function iniciarApp(){
    //deshabilitar boton
    btnEnviar.disabled=true;
}

function validarCampo(){
    // Validad que tenga algo en el campo
    validarLongitud(this);

    //obtener el total de clase error activos
    let errores=document.querySelectorAll('.error');

    // Validar email
    
    if(this.type=='email'){
        validarEmail(this);
    }
    

    if(email.value!=='' && asunto.value!=='' && mensaje.value !==''){
        //si los errores son valor 0
            if(errores.length===0){
                btnEnviar.disabled=false;
            }
    }
}

function validarLongitud(campo){

    if(campo.value.length > 0){
       
     campo.style.borderBottomColor='green';
     campo.classList.remove('error');
    
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    
    }
    
}

function validarEmail(campo){
    const mensaje=campo.value;
    
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
}
//Cuando se envia el correo
function enviarEmail(e){
    const spinnerGif=document.querySelector('#spinner');
    spinnerGif.style.display='block';
   
    // Crear gif Enviado
    const enviado=document.createElement('img');
    enviado.src='../Proyecto-Send-Email/img/mail.gif';
    enviado.style.display='block';
    // Ocultar spinner y mostrar gif enviado
    setTimeout(function(){
        spinnerGif.style.display='none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
            
        },5000);
    },3000);// Milisegundos

    e.preventDefault();


}

function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}