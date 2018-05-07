class Cliente{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;

    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    
    static bienvenida(){
        return 'Bienvenido al cajero para empresa';
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        super(nombre,saldo);
        this.telefono=telefono;
        this.tipo=tipo;
    }

}

const empresa= new Empresa('empresa1',1000,55885245,'construccion');

console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenida());
