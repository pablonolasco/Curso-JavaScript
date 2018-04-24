//java moderno
//promp, confirm parte de window object
/*const nombre=prompt();*/
/*if(confirm('Eliminar')){
    console.log(`Eliminado`);
}else{
    console.log('Nada paso');
}*/

let altura, anchura;
altura=window.outerHeight;//obtiene la altura contando el tamaño de toda la ventana
anchura=window.outerWidth;
altura=window.innerHeight;//altura del navegador sin contar con la interfaz de la ventana
anchura=window.innerWidth;

let ubicacion;
ubicacion=window.location;
ubicacion=window.navigator;
ubicacion=window.navigator.appName;
ubicacion=window.navigator.language;


console.log(altura);
console.log(anchura);
console.log(ubicacion);

