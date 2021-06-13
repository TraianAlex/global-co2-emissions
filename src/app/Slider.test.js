import { render, screen } from '@testing-library/react';
import { SliderComp } from './SliderComp';

test('renders header of the app', () => {
  render(<SliderComp year={1990} setYear={() => {}} />);
  const text = screen.getByText(/CO2 Emissions By Year/i);
  expect(text).toBeInTheDocument();
});

test('renders the min year', () => {
  render(<SliderComp year={1990} setYear={() => {}} />);
  const label = screen.getByText(/1990/i);
  expect(label).toBeInTheDocument();
});

test('renders the max year', () => {
  render(<SliderComp year={1990} setYear={() => {}} />);
  const label = screen.getByText(/2018/i);
  expect(label).toBeInTheDocument();
});

test('renders the default label', () => {
  render(<SliderComp year={1990} setYear={() => {}} />);
  const label = screen.getByText(/'90/i);
  expect(label).toBeInTheDocument();
});
