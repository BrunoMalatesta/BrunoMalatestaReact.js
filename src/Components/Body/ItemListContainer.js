import React, {useEffect, useState} from 'react';
import {ItemList} from "./ItemList";
import "./ItemListContainer.css"
import Rata from "../../assets/ratarugg.jpg"
import Robot from "../../assets/robotrugg.jpg"
import Pokemon from "../../assets/squirtlerugg.jpg"
import Gato from"../../assets/gatorugg.jpg"


const productos = [
  {nombre:"alfombra 1", id:0, stock:10, precio:5000, url:Rata},
  {nombre:"alfombra 2", id:1, stock:10, precio:4000, url:Robot},
  {nombre:"alfombra 3", id:2, stock:10, precio:3000, url:Pokemon},
  {nombre:"alfombra 4", id:3, stock:10, precio:1000, url:Gato},
]

const obtenerProductos = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(productos);
  }, 3000);
  //reject("ocurrio un error en la promesa")
})

export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos
    .then((data)=>{
      setProductos(data)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])


  return (
    <>
      <h1>{greeting}</h1>
      <div class="card-item">
        < ItemList productos={productos} />
      </div>
    </>
  );
};



