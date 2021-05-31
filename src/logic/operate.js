import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '/') {
    return num1 / num2;
  } if (operation === 'X') {
    return num1 * num2;
  } if (operation === '+') {
    return num1 + num2;
  } if (operation === '-') {
    return num1 - num2;
  }
  return 'not valid operation';
};

export default operate;