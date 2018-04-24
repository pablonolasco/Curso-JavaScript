/*const edad=18;
if(edad!=18){
    console.log('Si puedes entrar al sitio');
}else{
    console.log('No puedes entrar al sitio');
}*/
//comprobar si existe el valor en la variable
let puntaje;
/*if(puntaje){
    console.log(`el puntaje fue de ${puntaje}`);
}else{
    console.log('No hay puntaje');
}*/
/*if(typeof puntaje != 'undefined'){
    console.log(`el puntaje fue de ${puntaje}`);
}else{
    console.log('No hay puntaje');
}

let efectivo=500;
let totalCarrito=800;

if(efectivo>totalCarrito){
    console.log('Pago correcto');
}else{
    console.log('Fondos Insuficientes');
}
*/
//if-else
let hora=3;

if(hora>0 && hora<=10){
    console.log('Buenos Dias');
}else if(hora>10 && hora <=18){
    console.log('Buenas Tardes');
}else if(hora>18 && hora<=24){
    console.log('Buenas Noches');
}else{
    console.log(`La hora ${hora} no es correcta `);
}

let efectivo=300,
credito=300,
disponible=efectivo+credito,
totalCarrito=500;

if(totalCarrito<efectivo || totalCarrito < credito || totalCarrito < disponible){
    console.log('Puedo Pagar');
}else{
    console.log('No puedo Pagar');
}

//ternario

const logueado=true;
console.log(logueado===true?'logueado':'No logueado');