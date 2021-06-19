import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/app';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays heading', () => {
  render(<App />);
  const p = screen.getByText("Let's do some maths");
  expect(p).toBeInTheDocument();
});