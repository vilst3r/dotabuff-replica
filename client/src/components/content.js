import React, { Component } from 'react';
import HeroBoard from './heroBoard'
// import './css/content.css';

// Content component
export default class Content extends Component {
  render(){ 
    return (
      <div className="container">
        <HeroBoard />
      </div>
    )
  }
}