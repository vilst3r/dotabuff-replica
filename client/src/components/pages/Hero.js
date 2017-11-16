import React, { Component } from 'react';

// Content component
export default class heroContent extends Component {
  state = {heroStat: []}
    
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var targetUrl = 'http://dota-matchup-analyzer-xbonk12.c9users.io:8081'
    
    fetch(proxyUrl + targetUrl + '/heroes') // or whatever URL you want
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