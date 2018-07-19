//*Importar variable del modulo
import { nombreCliente,ahorro,mostrarInformacion,mostrarNombre,Cliente } from './cliente.js';
//*Importar todo el modulo completo y regresa un objeto de tipo Symbol
//import * as modulo from './cliente.js';
//*Empresa
//import * as empresa from './empresa.js';
//*Se coloca la palabra as para renombrar a la variable
import {nombreEmpresa,ahorro as ahorroEmpresa,categoria,mostrarInformacion as informacionEmpresa, Empresa} from './empresa.js';
//*const info=mostrarInformacion(nombreCliente,ahorro);
//console.log(modulo.mostrarInformacion('',''));
//console.log(mostrarNombre(''));
let cliente=new Cliente(nombreCliente,ahorro);
console.log(cliente);
console.log(cliente.mostrarNombre());
console.log(informacionEmpresa(nombreEmpresa,ahorroEmpresa,categoria));

let empresa= new Empresa(nombreEmpresa,ahorroEmpresa,categoria);

console.log(empresa.mostrarInformacion());

