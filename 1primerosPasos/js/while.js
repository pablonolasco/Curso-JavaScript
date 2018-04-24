let i=0;

while(i<10){
    if(i===5){
        console.log(` ${i}`);
        i++;
       // break;
       continue;
    }
    console.log(`numero ${i}`);
    i++;
}
const arreglo=new Array('Camisa','Boleto','Guitarra','Disco');


let j=0;
while(j<arreglo.length){
    
    console.log(`producto ${arreglo[j]}`);
    j++;
}

let h=100;
do{
    console.log(`se ejecuta ${h}`)
    h++;
}while(h<10);
