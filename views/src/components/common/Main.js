import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Hero from '../pages/Hero'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/heroes/:heroName' component={Hero}/>
    </Switch>

  </main>
)

export default Main

