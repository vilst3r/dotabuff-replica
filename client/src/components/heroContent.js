import React, { Component } from 'react';

// Content component
export default class heroContent extends Component {
  state = {heroStat: []}
    
  componentDidMount() {
    fetch('heroes') // or whatever URL you want
      .then(response => response.json())
      .then(heroStat => this.setState({ heroStat }))
  }

  render(){ 
    return (
      <div className="container">
        
      </div>
    )
  }
}