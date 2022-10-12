import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../../Components/ItemsDetail/ItemDetail'
import {ItemCount} from '../../Components/ItemCount/ItemCount'

export const ItemDetailContainer = ({ greeting }) => {
  const [producto, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products/1")
          const data = await res.json();
          setProduct(data);
        } catch {
          console.log("error");
        } finally {
          setLoading(false);
        }
      };
      setTimeout(() => {
        getProducts();
      }, 2000);
    }, []);



  

    const onAdd = () => {
      console.log("agg al carrito")
      alert("agg al carrito");
    };


    return (
      <>
        <h1>{greeting}</h1>
        {<>{loading ? <h1>Cargando productos ...</h1> : <ItemDetail producto={producto} />}</>}
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      </>
    );
  };


