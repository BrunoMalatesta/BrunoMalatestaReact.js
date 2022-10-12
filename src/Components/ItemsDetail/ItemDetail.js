import React from "react";
import "../../Components/ItemsDetail/ItemDetail.css"

export const ItemDetail = ({ producto }) => {
  return (
    <div class="item">
      <img class="itemimg" alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
    </div>
  );
};




