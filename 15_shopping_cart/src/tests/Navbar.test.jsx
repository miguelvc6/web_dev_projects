import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { CartProvider } from '../contexts/CartContext';

test('renders Navbar with Home and Shop links', () => {
  render(<CartProvider><Navbar /></CartProvider>);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Shop/i)).toBeInTheDocument();
});
