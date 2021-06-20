import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import App from './components/app';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <Router>
    <section className="hero is-large">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item has-text-white is-size-4" href="/#">Math Magicians</a>
            </div>
            <div className="navbar-menu" id="navbarMenuHeroB">
              <div className="navbar-end">
                <Link to="/" className="navbar-item has-text-white">Home</Link>
                <Link to="/calculator" className="navbar-item has-text-white">Calculator</Link>
                <Link to="/quote" className="navbar-item has-text-white">Quote</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body pt-6 mt-6">
        <div className="container has-text-centered">
          <Switch>
            <div className="pageContainer">
              <Route exact path="/" component={Home} />
              <Route exact path="/calculator" component={App} />
              <Route exact path="/quote" component={Quote} />
            </div>
          </Switch>
        </div>
      </div>
    </section>
  </Router>
);

export default Routes;
