import React from 'react'
import "./Item.css"


export  const Item = ({productos}) =>{
    return (
    <div class="container-card"> 
    <div>
        <img src={productos.url} alt="" />
    </div>
       
     <p key={productos.id}>{productos.nombre}</p>
     <p key={productos.id}>Precio: ${productos.precio}</p>
     <button>detalles</button>
     </div>
        
    
        
    )
}


