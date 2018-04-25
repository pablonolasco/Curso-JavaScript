//saber que elemento se cliceo en todo el body
document.body.addEventListener('click',eliminarElemento);

function eliminarElemento(e){
    e.preventDefault();

    //condicion que verifica que solo la clase borrar-curso se ha clickeado
    if(e.target.classList.contains('borrar-curso')){
        //console.log('Si');
        console.log(e.target.parentElement.parentElement.remove());
    }/*else{
   // console.log(e.target.classList);
   //console.log('No');
    }*/

    if(e.target.classList.contains('agregar-carrito')){
        let row=document.createElement('tr')
        let row_contentImage=document.createElement('td');
        let row_contentName=document.createElement('td');
        let row_contentPrice=document.createElement('td');
        let row_contentAddCart=document.createElement('td');
        let row_contentAddCartA=document.createElement('a');
        let img=document.createElement('img');
        img.setAttribute('src','img/curso1.jpg');
        img.width='100';
        row_contentImage.appendChild(img);
        row_contentName.textContent='Curso Java';
        row_contentPrice.textContent='15';
        row_contentAddCartA.setAttribute('href','#');
        row_contentAddCartA.setAttribute('class','borrar-curso');
        row_contentAddCartA.innerText='X';
        row_contentAddCart.appendChild(row_contentAddCartA);
            
        row.appendChild(row_contentImage);
        row.appendChild(row_contentName);
        row.appendChild(row_contentPrice);
        row.appendChild(row_contentAddCart);

        let padre=document.querySelector('#lista-carrito');
        padre.children[1].appendChild(row);
        console.log(padre.children[1]);
    }
}