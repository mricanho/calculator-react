import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

it('Should renders correctly', () => {
  const elem = create(<Quote />).toJSON();
  expect(elem).toMatchSnapshot();
});

it('Should display header information', () => {
  render(<Quote />);
  const elem = screen.getByText('–William Paul Thurston');
  expect(elem).toBeInTheDocument();
});