const cliente={
     nombre:'Alejandra',
     tipo:'Premium',
     datos:{
          ubicacion:{
               ciudad:'Jalisco',
               pais:'Mexico'
          },
          cuenta:{
               desde:'10-12-2012',
               saldo:4000

          }
     }
}
/**
 * Destructiring Objetos
 * Siempre busca al objeto o arreglo
 */
//1 forma
 let {nombre, tipo}=cliente;
// 2 forma

nombre="Pablo";
tipo='Gold';
({nombre,tipo}=tipo);
//3 objetos complejos, de esta manera se puede ingresar a las propiedades en los objetos
let {datos:{ubicacion}}=cliente;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let {datos:{cuenta}}=cliente;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);


//4 Valor default
const cliente2={
     name:'Pedro',
     type:'Premium'
}

let {name, type='Basico',total=0}=cliente2;

console.log(name);
console.log(type);
console.log(total);

/**
 * Destructiring Arreglos
 * 
 */

 const ciudades=['Londres','New York','Madrid','Paris',
     {
          idioma:'ingles'
     }
     ];
//se dejan los espacios vacios para poder obtener la informacion en las ultimas posiciones
 const [,,ciudad,paris]=ciudades;

 console.log(ciudad);
 console.log(paris);

const client={
     typeName:'Premium',
     saldo:3000,
     data:{
          firstname:'Pedro',
          lastname:'Nolasco',
          residencia:{
               ciudad:'Mexico'
          }
         
     },
     movimientos:['12-03-2018','12-03-2017','12-03-2016']
}

let { typeClient,
     data, 
     data:{residencia},
    movimientos:[,dos]}=client;
 
console.log(tipo);
console.log(data);
console.log(residencia);
//console.log(movimientos);
//console.log(uno);
console.log(dos);


/**
 * Destructiring a funciones
 * 
 */
/*
 function reservacion(completo,opciones){

     let {metodosPago,cantidad,dias}=opciones;

     console.log(metodosPago);
     console.log(cantidad);
     console.log(dias);
 }

 reservacion(
      true,
      {
           metodosPago:'tarjeta',
           cantidad:2000,
           dias:3
      }
 );*/

 //Datos por default
 function reservacion(completo,{
      metodosPago='efectivo',
      cantidad=0, 
      dias=0
     }={}

          ){
          if(completo){
               console.log('Proceder a reservar');
          }else{
               console.log('Abandonar');
          }
 }
 reservacion(
     true,
     {
          metodosPago:'tarjeta',
          cantidad:2000,
          dias:3
     }
)