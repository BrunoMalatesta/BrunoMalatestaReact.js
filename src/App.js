import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  const nombre = "Bruno";
  
  const mensaje = "Las Mejores Ofertas !"

  

  return (
    <>
    
      <Navbar nombreUsuario={nombre}/>
     
      <ItemListContainer greeting={mensaje}/>

      <ItemDetailContainer/>

    </>
  );
};

export default App
