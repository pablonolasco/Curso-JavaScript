import {API} from './api.js'
import * as UI from './interfaz.js';

UI.formulario.addEventListener('submit',(e)=>{
               e.preventDefault();

               //TODO Obtener datos del formulario

               const artista=document.querySelector('#artista').value,
                     cancion=document.querySelector('#cancion').value;
                   
                     if((artista === '' || artista.lenght <= 0) || (cancion === '' || cancion.lenght <= 0)){
                          //TODO Si el usuario ingresa datos vacios
                              UI.divMensaje.innerHTML='Error... Todos los campos son obligatorios';
                              UI.divMensaje.classList.add('error');
                              setTimeout(()=>{
                                   UI.divMensaje.innerHTML='';
                                   UI.divMensaje.classList.remove('error');
                              },3000);
                     }else{
                         //*Consultar api
                         const api= new API(artista,cancion);
                         api.consultarApi()
                              .then(data =>{
                                   console.log(data);

                                   if(data.resultado.lyrics){
                                        
                                        const letra=data.resultado.lyrics;
                                        console.log(letra);     
                                        UI.divResultado.textContent=letra;
                                   }else{
                                         //TODO Si la cancion no existe
                                        UI.divMensaje.innerHTML='La cancion no existe';
                                        UI.divMensaje.classList.add('error');
                                        setTimeout(()=>{
                                             UI.divMensaje.innerHTML='';
                                             UI.divMensaje.classList.remove('error');
                                             UI.formulario.reset();
                                        },3000);
                                   }
                              });
                     }


});
