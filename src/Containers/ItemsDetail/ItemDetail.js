import React from 'react'

export const ItemDetail = (productosdetails) => {
    return (
        <div class="container-card"> 
        
        <div>
            <img src={productosdetails.image} alt="" />
        </div>
           
         <p key={productosdetails.id}>{productosdetails.title}.</p>
         <p key={productosdetails.id}>Categoy: {productosdetails.category}.</p>
         <p key={productosdetails.id}>Precio: ${productosdetails.price}</p>
         </div>
            
        
            
        )
        };


