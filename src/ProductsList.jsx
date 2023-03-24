import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ProductList = () => {
  const { addToCart, products } = useContext(CartContext);

  const handleAddToCart = (product) => {
    if (product.availableQuantity > 0) {
      addToCart(product);
    }
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€ - Quantité disponible: {product.availableQuantity}
            {product.availableQuantity > 0 ? (
              <button onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
            ) : (
              <span>Hors Stock</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
