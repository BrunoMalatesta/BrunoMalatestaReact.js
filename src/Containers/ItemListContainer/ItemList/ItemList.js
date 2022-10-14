import React from 'react'
import {Item} from '../Item/Item';
import "./ItemList.css"


export  const ItemList = ({productos}) => {
    
    return (
    <>
    {
        productos.map((producto)=> {
            return < Item key={productos.id} productos={producto}/>
           
        }

        )
    }
        
    </>
    )
}


