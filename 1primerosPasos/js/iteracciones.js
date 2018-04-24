//for
for(let i=1; i<=10; i++){
    if(i==5){
        console.log('i vale 5');
        //break;
        continue;//incrementar la imagen cada 5
    }else if(i%2===0){
        console.log(`numero ${i} par`)
    }
    console.log(`2x${i}= ${2*i}`);
}

const arreglo=new Array('Camisa','Boleto','Guitarra','Disco');

for(let i=0; i<arreglo.length; i++){
    console.log(`producto ${arreglo[i]}`);
}