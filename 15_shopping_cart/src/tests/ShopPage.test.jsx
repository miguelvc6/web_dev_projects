import { render, screen } from '@testing-library/react';
import ShopPage from '../components/ShopPage';
import { fetchProducts } from '../services/productService';

jest.mock('../services/productService');

const products = [{
  id: 1,
  title: 'Test Product',
  price: 10,
  image: 'https://via.placeholder.com/150'
}];

fetchProducts.mockResolvedValue(products);

test('renders ShopPage with products', async () => {
  render(<ShopPage />);
  expect(await screen.findByText(/Test Product/i)).toBeInTheDocument();
});
