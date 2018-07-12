// Symbol
let nombre =Symbol();
let apellido=Symbol();

// los simbolos son unicos y no se pueden comparar
// se consideran privados y no se pueden iterar para obtener su valor
// Crear una personas

let persona={
}

persona.nombre='Juan';
persona[nombre]='Juan';
persona[apellido]='De la torre';
persona.saldo=100;

//valores del objeto
console.log(persona.nombre);
//valores del symbol
console.log(persona[nombre]);

for(let i in persona){
     console.log(`${i}: ${persona[i]}`);
}



