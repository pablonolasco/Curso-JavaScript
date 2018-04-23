//funciones 
function saludar(nombre){
    console.log('Hola '+nombre);
}

function sumar(a,b){
    return a+b;//valor de retorno
}

//vieja manera
/*function saludo(nombre){
    if(typeof nombre==='undefined'){
        nombre='Visitante';
    }
    return `Hola ${nombre}`;//funcion literal
}*/
//moderna
function saludo(nombre='Visitante'){
   
    return `Hola ${nombre}`;//funcion literal
}
let suma=sumar(4,5);
saludar('Pablo');
console.log(saludo());
console.log(suma);

//funciones expresion
const sum=function(a=0,b=0){
    return a+b;
}

console.log( sum(12));
console.log( sum(12,2));