//variables
//localStorage.clear();
const listaTweets=document.querySelector('#lista-tweets');
function evenListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
    //Agregar funcion eliminar
    listaTweets.addEventListener('click',borrarTweet);
    // Contenido Cargado en localStorage
    document.addEventListener('DOMContentLoaded',localStorageLoad);
}
evenListeners();

function agregarTweet(e){
    e.preventDefault();
    //leer valor del textarea
    const tweets=document.querySelector('#tweet').value;
    //crear boton eliminar
    const botonBorrar=document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';
    //crear elemento
    const li=document.createElement('li');
    li.innerText=tweets;
    //añade el boton Borrar tweet
    li.appendChild(botonBorrar);
    
    listaTweets.appendChild(li);
    //console.log(`texto ${tweets}`);
    agregarTweetLocalStorage(tweets);
    //
}



function borrarTweet(e){
    e.preventDefault();
    if(e.target.className==='borrar-tweet'){
        if(confirm('¿Estas seguro de eliminar el Tweet?')){
           
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.innerText);
        
        }
        
    }
}

//Mi funcion 
/*function borrarTweetLocalStorage(tweet){
    let tweets, indice;
    tweets=obtenerTweetsLocalStorage();
    // Busca el inidice
    indice=tweets.indexOf(tweet.substring(0,tweet.length-1)); 
    // Elimina el elemento con base al indice
    tweets.splice(indice,1);  
    localStorage.clear();
    tweets.forEach(function(data) {
        agregarTweetLocalStorage(data);
    });  
    
};*/
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    tweets=obtenerTweetsLocalStorage();
    tweetBorrar=tweet.substring(0,tweet.length-1); 
    
    tweets.forEach(function(data,index) {
        if(tweetBorrar===data){
            tweets.splice(index,1);
        }
    });  
    localStorage.setItem('tweets',JSON.stringify(tweets));
    
};


// Cargar local storage
function localStorageLoad(){
    let tweets;
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
        const botonBorrar=document.createElement('a');
        botonBorrar.classList='borrar-tweet';
        botonBorrar.innerText='X';
        //crear elemento
        const li=document.createElement('li');
        li.innerText=tweet;
        //añade el boton Borrar tweet
        li.appendChild(botonBorrar);
        
        listaTweets.appendChild(li);
    });
}
//Agregar tweets a localStorage

function agregarTweetLocalStorage(tweet){
    let tweets;
    let texto='';
    tweets=obtenerTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para localStorage
    localStorage.setItem('tweets',JSON.stringify(tweets));
   //localStorage solo almacena strings por eso se parseo
  /* tweets.forEach(function(data) {
     
            texto+=' '+data;
        
   });
   console.log(texto);*/
}
// Comprobar que haya contenido en localStorage
function obtenerTweetsLocalStorage(){
    let tweets= Array();
    // Revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null){
        return tweets;

    }else{
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}
