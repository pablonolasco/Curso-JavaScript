const metodoPago='cheque';

switch(metodoPago){
    case 'efectivo':
    console.log(`El usuario pago con ${metodoPago} `);
    break;
    case 'cheque':
    console.log(`El usuario pago con ${metodoPago} `);
    break;
    case 'tarjeta':
    console.log(`El usuario pago con ${metodoPago} `);
    break;
    default:
    console.log('metodo de pago no soportado');
    break;
}

////fechas java moderno
let mes;

switch(new Date().getMonth()){
    case 0:
    mes='Enero';
    break;
    case 1:
    mes='Febrero';
    break;
    case 2:
    mes='Marzo';
    break;
    case 3:
    mes='Abril';
    break;
    default:
    mes='Incorrecto';
    break;
}

console.log(`el mes es ${mes}`);