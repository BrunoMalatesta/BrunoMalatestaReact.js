import React from "react";
import './Navbar.css'
import Logo from "../../assets/LOGODANI1.jpg";
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

const Navbar =  ({ nombreUsuario }) => {

    const categorias = [
        {nombre:"men's clothing", id:0, ruta:"/categoria/men's clothing"},
        {nombre:"jewelery", id:1, ruta:"/categoria/jewelery"},
        {nombre:"electronics", id:2, ruta:"/categoria/electronics"},
        {nombre:"women's clothing", id:3, ruta:"/categoria/women's clothing"},
      ];


    return (
        <header> 
          <Link to="/">
              <img src={Logo} alt="logo daniela" />
          </Link>
          <h1>Bienvenido {nombreUsuario} </h1>
        <nav>
        { 
          categorias.map((categoria)=>{
            return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
          })}
        </nav>
          <Link to="/cart">
            <CartWidget/>
          </Link>
        </header>
    )
         
}

export default Navbar;