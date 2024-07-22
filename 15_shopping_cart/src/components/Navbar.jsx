import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import PropTypes from 'prop-types';

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <span>Cart: {cartItems.length}</span>
        <button>Checkout</button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  cartItems: PropTypes.array
};

export default Navbar;
