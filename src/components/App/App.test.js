import { render, screen } from '@testing-library/react';
import App from './App';

test('Verify that the logo exists', () => {
  render(<App />);
  const logoElement = screen.getByText('👽');
  expect(logoElement).toBeInTheDocument();
});
