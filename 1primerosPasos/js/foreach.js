//foreach
const arreglo=new Array('Camisa','Boleto','Guitarra','Disco');
arreglo.forEach(function(data,index){
    console.log(`${index}: ${data}`);
});

const carrito=[
    {id:5, nombre:'Libro'},
    {id:8,nombre:'Camisa'},
    {id:7,nombre:'Guitarra'},
    {id:10,nombre:'Disco'}

];

//console.log(carrito);

const nombreProducto=carrito.map(function(data){
    return data.nombre;
});

console.log(nombreProducto);
const carro={id:5, nombre:'mustang'};

for(let llave in carro){
    console.log(`${llave}: ${carro[llave]}`);
}

console.log(carro);