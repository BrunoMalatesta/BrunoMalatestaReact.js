import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cart} from "./Containers/CartView/Cart";
import { CustomProvider } from "./context/CartContext";


const App = () => {

  const nombre = "Bruno";
  
  const mensaje = "Las Mejores Ofertas !"


  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar nombreUsuario={nombre}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>} />
            <Route path="/producto/:id"element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<ItemListContainer/>}/>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App

