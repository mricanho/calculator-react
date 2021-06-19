import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (buttonName) => {
      const result = calculate(this.state, buttonName);
      this.setState({ ...result });
    };
    const { next, total } = this.state;

    return (
      <div className="ui grid container">
        <div className="columns is-mobile is-centered">
          <div className="column">
            <p className="title has-text-white">{"Let's do some maths "}</p>
          </div>
          <div className="column">
            <div className="calContainer">
              <Display result={(next && next.toString()) || (total && total.toString())} />
              <ButtonPanel clickHandler={(e) => handleClick(e)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
