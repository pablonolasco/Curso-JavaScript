const numeros=[10,20,30,40];
const meses= new Array('enero','febrero','marzo');
//areglo mixto

const mixto= new Array('Enero',10,true,undefined);
console.log(meses);
//metodos

console.log(mixto.length);
console.log(Array.isArray(mixto));//saber si es un arreglo
console.log(meses[1]);
meses[3]='abril';
meses.push('Mayo');//agrega al final del arreglo
//encontrar arreglo
console.log(meses.indexOf('abril'));
//agregar al inicio de un arreglo
meses.unshift('Inicio')
//eliminar elemento final de un arreglo
meses.pop();
//eliminar el primer elemento del arreglo
meses.shift();
//eliminar elemento del arreglo con base a una posicion
meses.splice(1,1);
//invertir
meses.reverse();
let arreglo1=[1,2,3],
arreglo2=[4,5,6];
//arreglos concatenar
console.log(arreglo1.concat(arreglo2));
//ordenar arreglo
const frutas=new Array('manzana','fresa','pera');
frutas.sort();
arreglo1=[4,8,9,6,11,10,1];
arreglo1.sort(function(a,b){
   // return a-b;
   return b-a;
});
console.log(arreglo1);

