import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <h1 classname="display-value">
      {result}
    </h1>
  )
};

Display.protoTypes = { 
  result: ProtoTypes.string,
};

Display.defaultProps = {
  result: "0",
};

export default Display;