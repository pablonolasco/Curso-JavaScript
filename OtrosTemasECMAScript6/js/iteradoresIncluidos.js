const ciudades=['Paris','Madrid','Mexico','New York'];
const ordenes=new Set([123,456,789]);
const datos=new Map();
datos.set('nombre','juan');
datos.set('profesion','desarrollador web');

//*Values iterador

for(let data of ciudades){
     console.log(data);
}


for(let data of ciudades.entries()){
     console.log(data);
}
//*Entries iterador
for(let data of ordenes.entries()){
     console.log(data);
}

//*Entries iterador, regresa llave valor

for(let data of datos.entries()){
     console.log(data);
}

//*Values iterador, regresa solo valor

for(let data of datos.values()){
     console.log(data);
}
//*Keys iterador, regresa solo la llave

for(let data of datos.keys()){
     console.log(data);
}

//*Default iterador, regresa solo la llave

for(let data of datos){
     console.log(data);
}

//*String
const mensaje='Aprendiendo JavaScript';

for(let letra of mensaje){
     console.log(letra)
}

//*Recorrer enlaces
const enlaces=document.getElementsByTagName('a');
for(let enlace of enlaces){
     console.log(enlace.href);
}