import React from "react";
import './Navbar.css'
import Logo from "../../assets/LOGODANI2.jpg";
import { CartWidget } from "./CartWidget"

const Navbar =  ({ nombreUsuario, apellidoUsuario}) => {

    const categorias = [
        {nombre:"Alfombras", id:0, ruta:"#"},
        {nombre:"Proceso", id:1, ruta:"#"},
        {nombre:"Tu Diseño", id:2, ruta:"#"},
        {nombre:"Contacto", id:3, ruta:"#"},
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