//Todo exportar variables
export const nombreCliente='Juan';
export let ahorro=50;

//Todo Exportar Funciones
export function mostrarInformacion(nombreCliente,ahorro){
     return `Cliente ${nombreCliente}- Ahorro ${ahorro}`;
}

export function mostrarNombre(nombreCliente){
     return `Nombre del Cliente ${nombreCliente}`;
}

//Todo Exportar clases

export class Cliente{
     constructor(nombre,ahorro){
          this.nombre=nombre;
          this.ahorro=ahorro;
     }

     mostrarNombre(){
          return `Cliente ${this.nombre}`;
     }
}