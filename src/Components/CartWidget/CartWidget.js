import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../context/CartContext";


export const CartWidget = () => {
  const { quantity } = useContext(Context);

  return (
    <div>
      <ShoppingCartIcon  sx={{ fontSize: 40, color: '#0D6E43'}}/>
      {
        quantity > 0 && <div>{quantity}</div>
      }
    </div>
  )
}



