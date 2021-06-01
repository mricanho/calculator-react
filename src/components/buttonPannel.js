import React, { Fragment } from 'react';
import Button from './button';
import '../index.css';

const ButtonPanel = ({ clickHandler }) => {
  const clickHandle = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <>
      <div className="d-grid">
        <Button buttonName="AC" handlerClick={clickHandle} type="sp" />
        <Button buttonName="+/-" handlerClick={clickHandle} type="sp" />
        <Button buttonName="%" handlerClick={clickHandle} type="sp" />
        <Button buttonName="/" handlerClick={clickHandle} type="op" />
      </div>
      <div className="d-grid">
        <Button buttonName="7" handlerClick={clickHandle} type="num" />
        <Button buttonName="8" handlerClick={clickHandle} type="num" />
        <Button buttonName="9" handlerClick={clickHandle} type="num" />
        <Button buttonName="X" handlerClick={clickHandle} type="op" />
      </div>
      <div className="d-grid">
        <Button buttonName="4" handlerClick={clickHandle} type="num" />
        <Button buttonName="5" handlerClick={clickHandle} type="num" />
        <Button buttonName="6" handlerClick={clickHandle} type="num" />
        <Button buttonName="-" handlerClick={clickHandle} type="op" />
      </div>
      <div className="d-grid">
        <Button buttonName="1" handlerClick={clickHandle} type="num" />
        <Button buttonName="2" handlerClick={clickHandle} type="num" />
        <Button buttonName="3" handlerClick={clickHandle} type="num" />
        <Button buttonName="+" handlerClick={clickHandle} type="op" />
      </div>
      <div className="d-grid-last">
        <Button buttonName="0" handlerClick={clickHandle} type="num" />
        <Button buttonName="." handlerClick={clickHandle} type="num" />
        <Button buttonName="=" handlerClick={clickHandle} type="op" />

      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
