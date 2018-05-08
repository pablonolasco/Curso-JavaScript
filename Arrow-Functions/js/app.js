let aprendiendo;
aprendiendo=function(){
    // Funcion tradicional
}

aprendiendo=() =>{
    console.log('Aprendiendo JS');
}

// Una linea no requiere llave

aprendiendo= () => console.log('Aprendiendo JS');

// Retonar un valor
aprendiendo= () => 'Aprendiendo JS';


// Retornando un objeto
aprendiendo= () => (
    { aprendiendo: 'Aprendiendo JS'}
);

// Pasar parametros
aprendiendo= (tecnologia,saludo) => console.log(tecnologia+' '+saludo);

//funcion map
const producto=['Disco','Camisa','Guitarra'];

const letrasProducto=producto.map(producto => producto.length);

producto.forEach(producto =>{
    console.log(producto);
})
aprendiendo('JS','Hola');
