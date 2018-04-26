// Eliminar de Local Storage
//localStorage.clear();
//Agregar a local Storage, sigue vivo aunque cierres el navegador, solo se elimina cuando se limpia el cache del navegador
localStorage.setItem('llaveNombre','Juan');

const nombre=localStorage.getItem('llaveNombre');
//Session storage, solo vive hasta que el navegador se cierra
sessionStorage.setItem('llaveNombre','Pablo');
// Remover elemento
//localStorage.removeItem('llaveNombre');
console.log(nombre);