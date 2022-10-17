import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../../Components/ItemsDetail/ItemDetail'
import ClockLoader from "react-spinners/ClockLoader";
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = ({ greeting }) => {
  const [producto, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products/" + id)
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


