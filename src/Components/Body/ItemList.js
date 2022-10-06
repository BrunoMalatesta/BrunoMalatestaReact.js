import React from 'react'
import {Item} from './Item';
import "./ItemList.css"


export  const ItemList = ({productos}) => {
    
    return (
    <>
    {
        productos.map((producto)=> {
            return < Item productos={producto}/>
           
        }

        )
    }
        
    </>
    )
}


