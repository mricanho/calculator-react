import Operate from '../../logic/operate';

describe('Calculate operations', () => {
  it('Should be a function', () => {
    expect(typeof Operate).toEqual('function');
  });
  it('Should sum two numbers', () => {
    const result = Operate('2', '4', '+');
    expect(result * 1).toBe(6);
  });
  it('Should sustrate two numbers value', () => {
    const result = Operate('2', '4', '-');
    expect(result * 1).toEqual(-2);
  });
  it('Should return a divided value', () => {
    const result = Operate('2', '4', '/');
    expect(result * 1).toEqual(0.5);
  });
  it('Should return a multipliyed value', () => {
    const result = Operate('2', '4', 'X');
    expect(result * 1).toEqual(8);
  });
});