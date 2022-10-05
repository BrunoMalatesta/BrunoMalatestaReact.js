import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Components/Navbar/ItemListContainer"
import {ItemCount} from './ItemCount'

const App = () => {

  const nombre = "Bruno";
  
  const mensaje = "Alfombras Artesanales"

  const onAdd = () => {
    console.log("agg al carrito")

  };

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Malatesta"/>
     
      <ItemListContainer greeting={mensaje}/>

      <ItemCount stock={5} initial={1} onAdd={onAdd}/>



    </>
  );
};

export default App
