import React, {useEffect, useState} from 'react';
import {ItemList} from "../ItemList/ItemList";
import "./ItemListContainer.css"


export const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(true);

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProductos(data))
    .catch((error)=>{
      console.log(error);
    })
    .finally(setLoading(false));
  }, []);

  

  return (
    <>
    <h1>{greeting}</h1>
    {
      <>
        {loading ? <h1>cargandoo...</h1> : <ItemList productos={productos}/>}
       
      </>
    }
    </>
  );
};



