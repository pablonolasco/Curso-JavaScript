/**
 * Los set no se pueden aceptar datos duplicados
 */
let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');

//comprobar que valor exista
console.log(carrito.has('Camisa'));
//Eliminar
//console.log(carrito.delete('Camisas'));
//Limpiar set
//carrito.clear();

//Iterar set con foreach
carrito.forEach((producto,index) => {
     //la llave y el valor es lo mismo
     console.log(`index: ${index} : producto ${producto}`);
});

//convertir un set a un arreglo
const arregloCarrito={...carrito};
console.log(carrito);
console.log(carrito.size);
console.log(arregloCarrito);