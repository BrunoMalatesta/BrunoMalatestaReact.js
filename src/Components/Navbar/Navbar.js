import React from "react";
import './Navbar.css'
import Logo from "../../assets/logonike.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar =  () => {
    return (
        <header>
            <img src={Logo} alt="png-nike" />
            <h1>Nike Argentina</h1>
            <nav>
                <a href="">buzos</a>
                <a href="">remeras</a>
                <a href="">indumentaria</a>
                <a href="">zapatillas</a>
            </nav>
            <ShoppingCartIcon color="black" fontSize="large" /> 
        </header>
    )
        
}

export default Navbar;