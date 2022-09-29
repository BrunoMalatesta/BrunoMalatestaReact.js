import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Components/Navbar/ItemListContainer"


const App = () => {

  const nombre = "Bruno";
  const mensaje = "Vivi el Mundial de cerca con Nike"

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Malatesta"/>
     
      <ItemListContainer greeting={mensaje}/>

    </>
  );

};

export default App