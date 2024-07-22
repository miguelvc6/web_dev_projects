import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import PropTypes from 'prop-types';

function Cart() {
  const { cartItems, updateCartItem, removeCartItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateCartItem(item.id, Number(e.target.value))}
          />
          <button onClick={() => removeCartItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  updateCartItem: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired
};

export default Cart;
