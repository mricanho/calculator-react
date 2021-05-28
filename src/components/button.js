import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, type } = props;

  return (
    <div className={type}>{buttonName}</div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonName: null,
  type: null,
};

export default Button;