import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Components/Body/ItemListContainer"
import {ItemCount} from '../src/Components/Body/ItemCount'

const App = () => {

  const nombre = "Bruno";
  
  const mensaje = "Alfombras Artesanales"

  const onAdd = () => {
    console.log("agg al carrito")
    alert("agg al carrito");
  };

  return (
    <>
      <Navbar nombreUsuario={nombre}/>
     
      <ItemListContainer greeting={mensaje}/>

      <ItemCount stock={10} initial={1} onAdd={onAdd}/>



    </>
  );
};

export default App
