import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';


export default (
  <div>
    <Route path="/" component={Header}/>
    <Route exact path="/" component={Dashboard}/>
    <Route path="/wizard" component={Wizard}/>
  </div>
)