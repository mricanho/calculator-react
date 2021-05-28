import React, { Fragment } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPannel />
  </>
);

export default App;
