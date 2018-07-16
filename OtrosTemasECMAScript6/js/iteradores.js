function crearIterador(carrito){
     let i=0;

     return{
          siguiente:()=>{
               //*i es mayor que el tamaño del carrito
               let fin= (i>= carrito.length);

               //* si fin no es verdadero sigue recorriendo
               let valor = !fin ? carrito[i++] : undefined;

               return{
                    fin:fin,
                    valor:valor

               }
          }
     }
}

const carrito=['Producto 1','Producto 2','Producto 3', 'Producto 4'];

const recorrerCarrito=crearIterador(carrito);

//*Cada siguiente es una iteraccion hasta llegar al final
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

/**
 * TODO Generadores
 * *Un Generador retornar un Iterador
 * 
 */
function *crearGenerador(){
     //*yield palabra reservada de EMS6

     yield 1;
     yield 'Nombre';
     yield 3+3;
     yield true;
}

const iterador=crearGenerador();
//*Imprime cada valor
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function *nuevoGenerador(carrito){
     for(let i=0; i<carrito.length; i++){
          yield carrito[i];
     }
}

//*recorremos el iterador, hasta llegar a undefined
let iteraccionCarrito=nuevoGenerador(carrito);

console.log(iteraccionCarrito.next().value);
console.log(iteraccionCarrito.next().value);
console.log(iteraccionCarrito.next().value);
console.log(iteraccionCarrito.next().value);
console.log(iteraccionCarrito.next().value);