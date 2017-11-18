import React from 'react';
import HeroGrid from '../layout/HeroGrid'
import NavBar from '../layout/NavBar'

// Content component
const App = () => (
  <div className="container">
    <NavBar title={"DotA 2"} />
    <HeroGrid />
  </div>  
)
export default App