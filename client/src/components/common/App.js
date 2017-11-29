import React from 'react';

import Header from '../layout/Header'
import Main from './Main'

// Content component
const App = () => (
  <div className="container">
    <Header title={"DotA 2"}/>
    <Main />
  </div>
)
export default App