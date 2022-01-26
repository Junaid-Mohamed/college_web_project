import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';
import RoadMap from './RoadMap';

export default function RouterPage() {
  return <div>
  <Router>
    <Switch>
    <Route path='/' exact component={Home}  />
    <Route path='/notes' exact component={Notes}  />
    <Route path='/roadmap' exact component={RoadMap} />
    </Switch>
  </Router>
  
  </div>;
}
