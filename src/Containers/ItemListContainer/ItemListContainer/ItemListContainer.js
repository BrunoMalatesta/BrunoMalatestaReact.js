import React, {useEffect, useState} from 'react';
import {ItemList} from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch( id ? URL_CAT : URL_BASE );
        const data = await res.json();
        setProductos(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  

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



