import { create } from 'react-test-renderer';

import ButtonPanel from '../../components/buttonPanel';

it('Should render correctly', () => {
  const elem = create(<ButtonPanel clickHandler={() => 'data'} />);
  expect(elem).toMatchSnapshot();
});
