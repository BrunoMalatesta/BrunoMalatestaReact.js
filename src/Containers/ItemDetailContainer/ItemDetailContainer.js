import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../../Components/ItemsDetail/ItemDetail'
import ClockLoader from "react-spinners/ClockLoader";



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

    const propiedades = {
      display: "block",
      margin: "0 auto",
      
    };


    return (
      <>
        <h1>{greeting}</h1>
        {
          <>
            {loading ? <ClockLoader color="#1a7764" cssOverride={propiedades} loading size={100} speedMultiplier={1} /> : <ItemDetail producto={producto} />}</>}
        
      </>
    );
  };

