/**
 * *MAP
 */
let cliente= new Map();
cliente.set('nombre','pablo');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

//*Accedder a los valores

console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
//*Tamaño de Map
console.log(cliente.size);
//*Valor existe
console.log(cliente.has('nombre'));
//*Borrar un elemento
cliente.delete('nombre');
console.log(cliente);

//*Limpiar map
cliente.clear();
console.log(cliente);



/**
 * TODO: Propiedades por default
 */

 const paciente= new Map(
      [['nombre','paciente'],
      ['habitacion','No definido']
     ]
 );
 paciente.set('nombre','Antonio');
 paciente.set('habitacion',400);

 //*Recorrer un map

 paciente.forEach((datos,index)=>{
     console.log(`${index}: ${datos}`);
 })

 console.log(paciente);