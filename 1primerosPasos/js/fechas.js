//en javascript existe la funcion llamada Date
const diaHoy= new Date();

//fecha en especifico mes, dia y año
//let navidad2017= new Date('2017-12-25');

let valor;
valor=diaHoy.getMonth();

valor=diaHoy.getDate();
valor=diaHoy.getFullYear();//año
valor=diaHoy.getHours();
valor=diaHoy.getMinutes();//minutos
valor=diaHoy.getHours();//hora
valor=diaHoy.getTime();
//modificar fecha
valor=diaHoy.setFullYear(2017);
valor=diaHoy.getFullYear();
console.log(valor);