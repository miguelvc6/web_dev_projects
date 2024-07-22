import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';
import { CartProvider } from '../contexts/CartContext';

const initialCartItems = [{
  id: 1,
  title: 'Test Product',
  price: 10,
  quantity: 2
}];

test('renders Cart with cart items', () => {
  render(<CartProvider initialCartItems={initialCartItems}><Cart /></CartProvider>);
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/\/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/2/i)).toBeInTheDocument();
});
