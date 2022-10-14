import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom';


export  const Item = ({productos}) =>{
    return (
    <div class="container-card"> 
    
        <div>
            <img src={productos.image} alt="" />
        </div>
       
        <p>{productos.title}.</p>
        <p>Categoy: {productos.category}.</p>
        <p>Precio: ${productos.price}</p>
        
        <Link to={"/producto/"+ productos.id}>
            <button>detalles</button>
        </Link>

     </div>
    )
}


