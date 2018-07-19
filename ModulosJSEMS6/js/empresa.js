//Todo Importar Clase
import {Cliente} from './cliente.js';
//Todo exportar variables
export const nombreEmpresa='Udemy';
export let ahorro=5222222000;
export let categoria='eduacion';



//Todo Exportar Funciones
export function mostrarInformacion(nombreCliente,ahorro, categoria){
     return `Empresa ${nombreCliente}- Ahorro ${ahorro}-Categoria ${categoria}`;
}


//Todo Exportar clases

export class Empresa extends Cliente{
     constructor(nombre,ahorro,categoria){
          super(nombre,ahorro);
          this.categoria=categoria;
     }

     mostrarNombre(){
          return `Cliente ${this.nombre}`;
     }
     mostrarInformacion(){
          return `Empresa ${this.nombre}- Ahorro ${this.ahorro}-Categoria ${this.categoria}`;
     }
}