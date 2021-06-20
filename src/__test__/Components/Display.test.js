import { create } from 'react-test-renderer';

import Display from '../../components/display';

it('Should render correctly', () => {
  const elem = create(<Display result="some value" />);
  expect(elem).toMatchSnapshot();
});
