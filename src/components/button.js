import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, handlerClick, type }) => {
  const handleClick = () => handlerClick(buttonName);
  let color = 'teal';
  if (type === 'sp') {
    color = 'purple';
  } if (type === 'op') {
    color = 'blue';
  }
  return (
    <button type="button" className={`ui button ${color}`} onClick={handleClick}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonName: null,
  type: null,
};

export default Button;
