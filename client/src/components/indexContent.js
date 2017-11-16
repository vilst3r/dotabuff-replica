import React, { Component } from 'react';
import HeroGrid from './heroGrid'

// Content component
export default class indexContent extends Component {
  render(){ 
    return (
      <div className="container">
        <HeroGrid />
      </div>
    )
  }
}