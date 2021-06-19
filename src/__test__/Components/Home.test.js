import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

it('Should renders correctly', () => {
  const elem = create(<Home />).toJSON();
  expect(elem).toMatchSnapshot();
});
it('Should display header information', () => {
  render(<Home />);
  const elem = screen.getByText('Welcome to our page!');
  expect(elem).toBeInTheDocument();
});