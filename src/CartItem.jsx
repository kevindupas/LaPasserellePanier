import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <span>
        {item.name} - {item.price}€ - Quantité: {item.quantity}
      </span>
      <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
    </div>
  );
};

export default CartItem;
