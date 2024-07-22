import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';
import { CartProvider } from '../contexts/CartContext';

const product = {
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'https://via.placeholder.com/150'
};

test('renders ProductCard with product info', () => {
  render(<CartProvider><ProductCard product={product} /></CartProvider>);
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/\/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', product.image);
});
