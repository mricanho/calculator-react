import Operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    return data;
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
    return data;
  }
  if (buttonName === '%') {
    if (!total) total /= 100;
    else next /= 100;
    return data;
  }
}