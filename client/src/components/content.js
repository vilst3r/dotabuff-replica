import React, { Component } from 'react';
import HeroGrid from './heroGrid'
// import './css/content.css';

// Content component
export default class Content extends Component {
  render(){ 
    return (
      <div className="container">
        <HeroGrid />
      </div>
    )
  }
}