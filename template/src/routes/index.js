import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Error from '../pages/Error';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
);

export default Routes;
