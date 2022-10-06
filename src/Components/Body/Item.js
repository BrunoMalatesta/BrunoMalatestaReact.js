import React from 'react'
import "./Item.css"


export  const Item = ({productos}) =>{
    return (
    <div class="container-card"> 
    <div>
        <img src={productos.url} alt="" />
    </div>
       
     <h1 key={productos.id}>{productos.nombre}</h1>
     <h2 key={productos.id}>Precio: ${productos.precio}</h2>
     <button>detalles</button>
     </div>
        
    
        
    )
}


