import { useContext } from 'react';
import { Context } from '../../context/CartContext';
import ClearIcon from '@mui/icons-material/Clear';


const CartItem = ({product}) => {
    const { removeItem } = useContext(Context);

    return (
        <article >
            <picture>
                <img src={product.image} alt={product.title} />
            </picture>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div>
                <h4>Cantidad</h4>
                <span>{product.quantity}</span>
            </div>
            <div>
                <h4>Total Producto</h4>
                <span>${product.price*product.quantity}</span>
            </div>
            <ClearIcon onClick={() => removeItem(product.id)} />
        </article>
    )
}

export default CartItem
