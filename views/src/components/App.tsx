import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header'

import LandingPage from './LandingPage'
import HeroPage from './Heroes/Hero'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/heroes/:heroName' component={HeroPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)
export default App