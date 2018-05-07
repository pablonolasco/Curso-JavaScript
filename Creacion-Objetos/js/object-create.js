const Cliente={
    imprimirSaldo:function(){
    return `hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirarSaldo:function(retiro){
        return this.saldo-=retiro;
    }
}
//objeto tipo cliente
const mary=Object.create(Cliente);
mary.nombre='Mary';
mary.saldo=1000;
 console.log(mary.imprimirSaldo());

