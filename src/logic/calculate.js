/* eslint-disable no-self-assign */
import Operate from './operate';

const operationButton = (data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '%') {
    next /= 100;
    total /= 100;
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (!operation) {
      if (!total) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  }
  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    }
    if (total && operation) {
      total += '.';
    }
    if (total && operation && next) {
      next += '.';
    }
    if (total && operation && !next) {
      next = '0.';
    }
  }

  if (['+', 'X', '/', '-'].includes(buttonName)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && !next) {
      total = total;
    }
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }

  return { total, next, operation };
};
const calculate = (data, buttonName) => operationButton(data, buttonName);
export default calculate;
