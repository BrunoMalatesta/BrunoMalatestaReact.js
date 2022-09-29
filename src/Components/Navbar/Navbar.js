import React from "react";
import './Navbar.css'
import Logo from "../../assets/logonike.png";
import { CartWidget } from "./CartWidget"

const Navbar =  ({ nombreUsuario, apellidoUsuario}) => {

    const categorias = [
        {nombre:"Remeras", id:0, ruta:"#"},
        {nombre:"Hoodies", id:1, ruta:"#"},
        {nombre:"Zapatillas", id:2, ruta:"#"},
        {nombre:"Indumentaria", id:3, ruta:"#"},
      ];


    return (
        <header> 
            <img src={Logo} alt="png-nike" />
            <h1>Bienvenido {nombreUsuario} {apellidoUsuario}</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <a key={categoria.id} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
         
            <CartWidget/>

        </header>
    )
         
}

export default Navbar;