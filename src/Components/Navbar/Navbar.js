import React from "react";
import './Navbar.css'
import Logo from "../../assets/LOGODANI1.jpg";
import { CartWidget } from "../CartWidget/CartWidget"

const Navbar =  ({ nombreUsuario, apellidoUsuario}) => {

    const categorias = [
        {nombre:"men's clothing", id:0, ruta:"#"},
        {nombre:"jewelery", id:1, ruta:"#"},
        {nombre:"electronics", id:2, ruta:"#"},
        {nombre:"women's clothing", id:3, ruta:"#"},
      ];


    return (
        <header> 
            <img src={Logo} alt="logo daniela" />
            <h1>Bienvenido {nombreUsuario} </h1>
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