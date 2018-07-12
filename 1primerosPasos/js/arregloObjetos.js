const auto=[
    {
        modelo:'Mustang',
        motor:6.0
    },
    {
        modelo:'Camaro',
        motor:6.3
    },
    {
        modelo:'Charger',
        motor:6.8
    }


];

for(let i=0; i<auto.length; i++){
   console.log(auto[i].modelo);
}

//modificar valor de la propiedad del objeto
auto[0].modelo='Audi';
console.log(auto);