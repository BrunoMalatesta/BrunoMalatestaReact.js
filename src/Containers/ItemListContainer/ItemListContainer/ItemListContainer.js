import React, {useEffect, useState} from 'react';
import {ItemList} from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";



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

  
  const propiedades = {
    display: "block",
    margin: "0 auto",
    
  };

  return (
    <>
    <h1>{greeting}</h1>
    {
      <>
        {loading ? <ClockLoader color="#1a7764" cssOverride={propiedades} loading size={100} speedMultiplier={1} /> : <ItemList productos={productos}/>}
       
      </>
    }
    </>
  );
};



