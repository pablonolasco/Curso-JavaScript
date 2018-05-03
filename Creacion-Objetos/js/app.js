// object literal
/*const cliente={
    nombre:'Pablo',
    saldo:2000,
    tipoCliente:function(){
        let tipo;
        if(this.saldo>100){
            tipo='gold'
        }else{
            tipo='Normal'
        }
        return tipo;
    }
}*/
/*
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.tipoCliente=function(){
        let tipo;
        if(this.saldo>100){
            tipo='gold'
        }else{
            tipo='Normal'
        }
        return tipo;
    }
}
*/
//console.log(cliente.tipoCliente());
//const persona=new Cliente('Pablo',2000);
//const persona2=new Cliente('Pablo',100);
//variables
const nombre1='Pablo';
const nombre2=new String('Pablo');
const numero= new Number(20);
const boolean= new Boolean(true);
if (nombre1==nombre2) {
    console.log(typeof nombre2 + typeof nombre1+numero);    
}
//funciones
const function1= function(a,b){
    return a+b;
}
const function2=Function('a','b','return 1 + 2');
//objetos
const persona1={
    nombre:'Pablo'
}
const persona2=new Object({nombre:'Juan'});
console.log(function2(5,8));
console.log(persona2);

