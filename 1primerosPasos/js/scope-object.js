//visibilidad de variables en funciones etc.
var a='a';//variables globales, su escope es global
let b='b';
const c='c';

function scopet(){
    var a='A';
    let b='B';
    const c='C';
    console.log('Funcion:'+a,b,c);
}
scopet();
if(true){
    var a='AA';//cuando se declara variables globales tipo var, se pude sobreescibir su valor en cualquier funcion
    let b='BB';//cuando se declara tipo let, no se sobreescribe el valor sino se modifica
    const c='CC';
    console.log('Bloque:'+a,b,c);
}
/*
Funcion:A B C
Bloque:AA BB CC
Globales AA b c 
*/

for(b=0; b<10; b++){
    console.log(b);
}
console.log(`Globales ${a} ${b} ${c}`);