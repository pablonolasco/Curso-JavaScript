class Cotizador{
    //obtiene el json con las criptomonedas
    async obtenerMondedasApi(){
        const URL_API= await fetch(`https://api.coinmarketcap.com/v2/ticker/`);
        //respuesta en JSON de las monedas
        const monedas=  await URL_API.json();
        return {
            //retonar data en forma de json
            monedas
        }
    }

    async obtenerValores(moneda,criptomoneda){
        //Convierte los select
        const URL_CONVERTIR= await fetch(`https://api.coinmarketcap.com/v2/ticker/${criptomoneda}/?convert=${moneda}`);
        const resultado= await URL_CONVERTIR.json();
        return {
            resultado
        }
    }
}