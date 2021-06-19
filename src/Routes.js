  
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './components/app';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <Router>
    <header className="head">
      <h1>Math Magicians</h1>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <Switch>
      <div className="pageContainer">
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </div>
    </Switch>
  </Router>
);

export default Routes;