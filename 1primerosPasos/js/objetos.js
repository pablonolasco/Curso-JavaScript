const numeros= new Array(1,2,3);
numeros[0]=4;//solamente asi se pueden modificar los valores de los arreglos

//crear objeto en javascript
const persona={
    nombre:'Pablo',
    apellido:'Nolasco',
    edad:28,
    musica:['dance','rock'],
    hogar:{
        ciudad:'CDMX',
        pais:'Mexico'
    },
    fechaCumple:function(){
        return new Date().getFullYear()-this.edad;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.musica[0]);
persona.musica.push('other');

console.log(persona.musica);

console.log(persona.hogar.ciudad);

console.log(persona);
console.log(persona.fechaCumple());