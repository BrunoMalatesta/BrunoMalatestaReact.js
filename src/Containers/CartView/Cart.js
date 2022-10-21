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


