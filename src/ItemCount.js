import React, {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(0);

  const handlerClickSumar= () => {
    if( count < stock){
      setCount(count + 1)
    }
  };

  const handlerClickRestar = () => {
    if( count > 1) {
      setCount(count - 1)
    }
  };

  const handlerClickAggCarrrito = () => {
    setCount(0);
    onAdd();
  };


  return (
    <div>
      <h3>Componentes para los estados</ h3>
      <h3>{count}</h3>
      <button onClick={handlerClickRestar}>-</button>
      <button onClick={handlerClickSumar}>+</button>
      <button onClick={handlerClickAggCarrrito}>Agg al Carrito</button>
    </div>
  );
};


