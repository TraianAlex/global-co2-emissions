import { render, screen } from '@testing-library/react';
import App from '../app/App';

test('renders header of the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/CO2 Emissions By Year/i);
  expect(linkElement).toBeInTheDocument();
});
