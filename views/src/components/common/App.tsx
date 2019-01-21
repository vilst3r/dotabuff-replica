import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../layout/Header'

import HomePage from '../pages/Home'
import HeroPage from '../pages/Hero'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header title={"DotA 2"}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/heroes/:heroName' component={HeroPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)
export default App