function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    
}
//JS Moderno prototype
//solo lo pondran ver los objetos tipo cliente
Cliente.prototype.tipoCliente=function(){
    let tipo;
    if(this.saldo>100){
        tipo='gold'
    }else{
        tipo='Normal'
    }
    return tipo;
}
Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`;
}
Cliente.prototype.retirarSaldo=function(retiro){
    return `Nombre: ${this.nombre} Retiro ${this.saldo-=retiro}`;
}
const cliente1= new Cliente('Pedro',100);
const cliente2= new Cliente('Pablo',1000);
const cliente3= new Cliente('Miguel',100);


console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente2.retirarSaldo(200));