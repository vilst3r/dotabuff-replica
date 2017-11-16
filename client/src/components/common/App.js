import React from 'react';
import HeroGrid from '../layout/HeroGrid'
import Header from '../layout/Header'

// Content component
const App = () => (
  <div className="container">
    <Header title={"DotA 2 App"} />
    <HeroGrid />
  </div>  
)
export default App