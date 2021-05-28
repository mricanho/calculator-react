import React, { Fragment } from 'react';
import Display from './Display.js';
import ButtonPannel from './ButtonPannel.js';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPannel />
  </>
);

export default App;
