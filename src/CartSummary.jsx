import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from './context/CartContext';

const CartSummary = () => {
  const { cart, resetCartAndRestock } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleClearCart = () => {
    resetCartAndRestock();
  };

  return (
    <div>
      <h2>Résumé du panier</h2>
      <p>Articles dans le panier: {totalItems}</p>
      <p>Prix total: {totalPrice.toFixed(2)}€</p>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <button onClick={handleClearCart}>Vider le panier</button>
    </div>
  );
};

export default CartSummary;
