import React, { Component } from 'react';

// Content component
export default class Hero extends Component {
  state = {heroMatchup: []}
    
  componentDidMount() {
    var proxy = 'http://dota-matchup-analyzer-xbonk12.c9users.io:8081'
    
    fetch(proxy + '/heroes/' + this.props.match.params.heroName) // or whatever URL you want
      .then(response => response.json())
      .then(heroMatchup => this.setState({ heroMatchup }))
  }

  render(){ 
    return (
      <div className="container">
        <h1 style={{color:'white'}}> {this.props.match.params.heroName} </h1>
        
        {
          this.state.heroMatchup.length > 0 ?
            this.state.heroMatchup.map( (item, key) =>
              <div key={key} style={{color:'white'}}>
                <p> Against : {item.hero_name} </p>
                <p> Wins : {item.wins} </p>
                <p> Losses : {item.games_played - item.wins}</p>

                <br />
                <br />
              </div>
            )
          :
            null
        
        }
      </div>
    )
  }
}