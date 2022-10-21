import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'


export const Cart = () => {
  const { cart } = useContext(Context);


  
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1>
            No agregaste productos, <Link to="/">CLICK AQUI</Link>
            <br></br>
            <iframe src="https://giphy.com/embed/KPgOYtIRnFOOk" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/afvpets-afv-gorilla-KPgOYtIRnFOOk"></a></p>
          </h1>
          <h2 >Gracias por tu visita</h2>
        </>
      ) : (
        <>
          
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
           
          ))}
        </>
      )}
    </>
  );
};


