import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

test('renders HomePage with welcome message', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome to My Shopping Cart App/i)).toBeInTheDocument();
});
