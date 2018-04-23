const prodducto1='Pizza',
    precio1=30,
    prodducto2='Hamburgesa',
    precio2=40;
//vieja manera literal template
/*html='<ul>'+
        '<li>Orden: '+prodducto1+'</li>'+
        '<li>Precio: '+precio1+'</li>'+
        '<li>Orden: '+prodducto2+'</li>'+
        '<li>Precio: '+precio2+'</li>'+
        '<li>Total: '+(precio1+precio2)+'</li>'+
        '</ul>';
        */
//Nueva manera

html=`<ul>
        <li>Orden4: ${prodducto1} </li>
        <li>Precio: ${precio1} </li>
        <li>Orden: ${prodducto2} </li>
        <li>Precio: ${precio2} </li>
        <li>Total: ${total( precio1,precio2)} </li>
    </ul>  `;
    function total(precio1,precio2){
        return precio1+precio2;
    }
    document.getElementById('contenido').innerHTML=html;
    