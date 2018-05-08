const boton1=document.getElementById('boton1');
boton1.addEventListener('click',function(){
  
    const xhr= new XMLHttpRequest();
    xhr.open('GET','empleado.json',true);
    xhr.onload=function(){
        
        if(this.status === 200){
              const persona=(JSON.parse( this.responseText));
              const htmlTemplate=`
                <ul>
                   
                    <li>${persona.id}</li>
                    <li>${persona.empresa}</li>
                    <li>${persona.nombre}</li>
                    <li>${persona.trabajo}</li>

                </ul>
              `;
              document.getElementById('empleado').innerHTML=htmlTemplate;

        }
    }
    xhr.send();
});

const boton2=document.getElementById('boton2');
boton2.addEventListener('click',function(){
  
    const xhr= new XMLHttpRequest();
    xhr.open('GET','empleados.json',true);
    xhr.onload=function(){
        
        if(this.status === 200){
              const persona=(JSON.parse( this.responseText));
              let htmlTemplate='';
              persona.forEach(function(personal) {
             htmlTemplate +=`
                <ul>
                   
                    <li>${personal.id}</li>
                    <li>${personal.empresa}</li>
                    <li>${personal.nombre}</li>
                    <li>${personal.trabajo}</li>

                </ul>
              `;
              });
             
              document.getElementById('empleados').innerHTML=htmlTemplate;

        }
    }
    xhr.send();
});