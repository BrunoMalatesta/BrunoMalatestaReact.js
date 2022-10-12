import React from 'react'
import "./Item.css"


export  const Item = ({productos}) =>{
    return (
    <div class="container-card"> 
    
    <div>
        <img src={productos.image} alt="" />
    </div>
       
     <p key={productos.id}>{productos.title}.</p>
     <p key={productos.id}>Categoy: {productos.category}.</p>
     <p key={productos.id}>Precio: ${productos.price}</p>
     <button>detalles</button>
     </div>
        
    
        
    )
}


