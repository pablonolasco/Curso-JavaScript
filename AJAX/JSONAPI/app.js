const cargarPost=document.querySelector('#cargar');

cargarPost.addEventListener('click',cargarApi);

function cargarApi(){
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    xhr.onload=function(){
        if(this.status === 200){
           const respuest=(JSON.parse( this.responseText));
           let contenido='';
           respuest.forEach(function(post) {
               contenido +=`
                    <h3>Titulo: ${post.title}</h3>
                    <p>Mensaje: ${post.body}</p>
               
               `;

           });
           document.getElementById('listado').innerHTML=contenido;
        }
    }

    xhr.send();
}