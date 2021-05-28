import React, { Fragment } from 'react';
import Display from './display';
import ButtonPannel from './buttonPannel';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPannel />
  </>
);

export default App;
