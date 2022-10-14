import React from "react";
import "../../Components/ItemsDetail/ItemDetail.css"
import {ItemCount} from '../../Components/ItemCount/ItemCount'

export const ItemDetail = ({ producto , onAdd }) => {
  return (
    <div class="item">
      <img class="itemimg" alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  );
};




