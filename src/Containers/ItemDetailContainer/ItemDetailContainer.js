import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemsDetail/ItemDetail'

export  const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);

    const [productosdetails, setProductosdetails] = useState({});
  
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/2")
        .then((res) => res.json())
        .then((data) => setProductosdetails(data))
        .catch((error)=>{
        console.log(error);
      })
      .finally(setLoading(false));
    }, []);




  return (
    <>
    {
      <>
        {loading ? <h1>cargandoo...</h1> : <ItemDetail productos={productosdetails}/>}
      </>
    }
    </>
  );
};


