import React from 'react'


export  const Item = ({productos}) =>{
    return (
        
       
        <div class="container-card">   
         <h1 key={productos.id}>{productos.nombre}</h1>
         <h2 key={productos.id}>Precio: ${productos.precio}</h2>
         <button key={productos.id}>Detalles</button>
         </div>
        
    
        
    )
}


