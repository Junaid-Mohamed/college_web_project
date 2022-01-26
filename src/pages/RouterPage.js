import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';

export default function RouterPage() {
  return <div>
  <Router>
    <Switch>
    <Route path='/' exact component={Home}  />
    <Route path='/notes' exact component={Notes}  />
    </Switch>
  </Router>
  
  </div>;
}
