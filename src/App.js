import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer"
import {ItemCount} from './Components/ItemCount/ItemCount'
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  const nombre = "Bruno";
  
  const mensaje = "Las Mejores Ofertas !"

  const onAdd = () => {
    console.log("agg al carrito")
    alert("agg al carrito");
  };

  return (
    <>
      <Navbar nombreUsuario={nombre}/>
     
      <ItemListContainer greeting={mensaje}/>

      <ItemDetailContainer/>

      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  );
};

export default App
