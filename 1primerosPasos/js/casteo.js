const numero1="50",
        numero2=10,
        numero3='tres';
        let dato=Number([1,2,3,4,5]);
        dato='15448784.28575';
        console.log(Number(numero1)+numero2);
        console.log(parseInt(numero1)+numero2);
        console.log(typeof numero1);//typeof indica el tipo de dato
        console.log(Number(true));
        console.log(parseFloat('10.20'))
        console.log(parseFloat('122.896'));
        console.log(parseFloat( dato).toFixed(2));//funcion que obtiene los decimales despues del punto

        
/*Conversion de numero a string */
let cp=90210;
cp=String(cp);
let datos;
datos='4'+'4';
datos=true;
datos=String(datos);
datos=[1,2,3];
//to string
datos=20;
datos=datos.toString();
console.log(cp.length);
console.log(datos);


        