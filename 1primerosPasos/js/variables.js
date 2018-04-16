//tipos de declaracion de variables
/*
var
let
const
 */
//variables js old
 var nombre='Pablo';
 var carritoPrimero,carrito_numero2='carrito2';
 var nombre='Paul';// se reasigna el valor

 //variables let
 //cuando declaras una variable no se puede volver a declarar dos veces con el mismo nombre
 let name='Juan';
 let producto;
 //variable const, declaracion de constantes, siempre con valor definido ejemplo, IVA
 const IVA=16;

 let cita="hola 'mundo'";
 let citaDos='Hola "mundo"';
 let citaTres='Hola \'mundo\'';
 let concatenarOld="JAVA"+"Script "+cita;
 let concatenarModerno=`Java`+`Script ${cita}`;
// console.log(concatenarModerno);

 //  Strings o Cadenas de Texto y sus métodos en JavaScript
 console.log(cita.length);//tamañao de la cadena
 let aprendiendo='Aprendiendo a',
        tecnologia='JavaScript';
 console.log(aprendiendo.concat(' ',tecnologia));
 console.log(tecnologia.toUpperCase());
 console.log(aprendiendo.indexOf('a'));//regresa menos 1 cuando no encuentra la palabra
 console.log(aprendiendo.substring(0,4));//corta porcion del dexto
 console.log(aprendiendo.slice(0,5));
 console.log(aprendiendo.split(' '));//separar cadena de texto
 console.log(aprendiendo.replace('a','remplazando texto'));
 console.log(aprendiendo.includes('a'));//busca el elemento y retorna un true o false si encuentra el elemento
 let tecnologiaDos="JavaScript";
 console.log(tecnologiaDos.repeat(10))//repite el elemento;




 