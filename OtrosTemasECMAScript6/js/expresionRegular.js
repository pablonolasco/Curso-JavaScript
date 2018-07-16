/**
 * TODO Expresiones regulares
 */

 let valor, expReg;
 expReg=/[0-9]/;
//*Año
 valor=1992;
 //*Fecha
 expReg=/\d\d-\d\d-\d\d\d\d/;
 valor='20-18-2018';

 //*Hora 10:30
 expReg=/\d\d:\d\d/;
 valor='10:30 AM';

 //*Hora 10:30 AM DD indica letra
 expReg=/\d\d:\d\d \D\D/;
 valor='10:30 AM';

 //*Simplicar

 expReg=/\d+/;
 valor=15445887;
 
 //*Negar la expresion
 expReg=/[^0-9]/;

 //*La sintaxis con llave
 expReg=/\d{1,2}-\d{1,2}-\d{4}/;
 valor='10-10-2018';
 
  //*Letras o numeros
  expReg=/\w+/;
  valor='Mensaje';

  //*Numeros
  expReg=/\([0-9])\w+/;
  valor='Mensaje';

  //*Letras mayusculas
  expReg=/([A-Z])\w+/;
  valor='Mensaje';

  //*Letras minusculas
  expReg=/([a-z])\w+/;
  valor='Mensaje';

 console.log(expReg.test(valor));