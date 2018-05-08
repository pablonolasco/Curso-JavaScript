//
document.querySelector('#generar-nombre').addEventListener('submit',cargarNombres);
function cargarNombres(e){
    e.preventDefault();
   // Obtener datos del formulario
   const origen=document.getElementById('origen');
   const origenSeleccionado=origen.options[origen.selectedIndex].value;
   const genero=document.getElementById('genero');
   const generoSeleccionado=genero.options[genero.selectedIndex].value;
   const numero=document.getElementById('numero').value;

   let url='http://uinames.com/api/?';

   // Armar URL para peticion

   if(origenSeleccionado != ''){
        url+=`region=${origenSeleccionado}&`
   }

   
   if(generoSeleccionado != ''){
    url+=`gender=${generoSeleccionado}&`;
   }

   if(numero != ''){
    url+=`amount=${numero}`;
   }

   // Conexion con AJAX
   // Iniciar http
   const xhr= new XMLHttpRequest();

   xhr.open('GET',url,true);

   xhr.onload=function(){
       if(this.status === 200){
           const nombres=JSON.parse(this.responseText);
           //Generar HTML
           let htmlNombres='<h2>Nombres Generados</h2>'
           htmlNombres+='<ul class="lista"';
            nombres.forEach(function(nombre) {
                htmlNombres+=`
                <li>${nombre.name}</li>
                `;
            });


           htmlNombres+='</ul>';
           document.getElementById('resultado').innerHTML=htmlNombres;
       }
   }

   xhr.send();


  
}