import React, { Component } from 'react';

import './Hero.css';

// Content component
export default class Hero extends Component {
  state = {heroStats: []}
    
  componentDidMount() {  
    fetch('/heroes/' + this.props.match.params.heroName) // or whatever URL you want
      .then(response => response.json())
      .then(data => this.setState({heroStats : data}))
  }

  render(){ 
    return (
      <div className="container">
        <h1 style={{color:'white'}}> {this.props.match.params.heroName} </h1>
        <img alt="hero portrait" className="img-responsive hero-portrait" src={this.state.heroStats.icon_url} />
        
      </div>
    )
  }
}