
import { render, screen } from '@testing-library/react';
import Button from '../../src/components/atoms/Button';

test('renders a button with text', () => {
  render(<Button>Buy</Button>);
  expect(screen.getByRole('button', {name: /buy/i})).toBeInTheDocument();
});
