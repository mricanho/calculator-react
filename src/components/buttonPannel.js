import React, { Fragment } from 'react';
import Button from './button';
import '../index.css';

const ButtonPanel = () => (
  <>
    <div className="d-grid">
      <Button buttonName="AC" type="sp" />
      <Button buttonName="+/-" type="sp" />
      <Button buttonName="%" type="sp" />
      <Button buttonName="/" type="op" />
    </div>
    <div className="d-grid">
      <Button buttonName="7" type="num" />
      <Button buttonName="8" type="num" />
      <Button buttonName="9" type="num" />
      <Button buttonName="X" type="op" />
    </div>
    <div className="d-grid">
      <Button buttonName="4" type="num" />
      <Button buttonName="5" type="num" />
      <Button buttonName="6" type="num" />
      <Button buttonName="-" type="op" />
    </div>
    <div className="d-grid">
      <Button buttonName="1" type="num" />
      <Button buttonName="2" type="num" />
      <Button buttonName="3" type="num" />
      <Button buttonName="+" type="op" />
    </div>
    <div className="d-grid-last">
      <Button buttonName="0" type="num" />
      <Button buttonName="." type="num" />
      <Button buttonName="=" type="op" />
    </div>
  </>
);

export default ButtonPanel;
