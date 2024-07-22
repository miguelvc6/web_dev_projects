import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
