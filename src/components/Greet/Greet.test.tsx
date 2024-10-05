import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greet render the Hello', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument();
})

test('Greet renders with name', () => {
  render(<Greet name={'Sudhir'} />)
  const textElement = screen.getByText('Hello Sudhir');
  expect(textElement).toBeInTheDocument();
})