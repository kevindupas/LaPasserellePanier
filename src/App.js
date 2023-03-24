import './App.css';
import CartSummary from './CartSummary';
import ProductsList from './ProductsList';

function App() {
  return (
    <div className="App">
      <h1>E-commerce</h1>
      <CartSummary />
      <ProductsList />
    </div>
  );
}

export default App;
