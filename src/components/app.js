/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Display from './display';
import ButtonPannel from './buttonPannel';
import Calculate from '../logic/calculate';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPannel />
  </>
);

export default App;
