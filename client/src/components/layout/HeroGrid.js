import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeroGrid.css';

// proxy
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
var targetUrl = 'http://dota-matchup-analyzer-xbonk12.c9users.io:8081'

export default class HeroGrid extends Component {
  state = {heroes: []}
    
  componentDidMount() {
    fetch(proxyUrl + targetUrl + '/heroes') // or whatever URL you want
      .then(response => response.json())
      .then(heroes => this.setState({ heroes }))
  }    
    
  render(){ 
    return (
        <div className = "panel-body">
        {
          this.state.heroes.sort( (a, b) =>
            (a.localized_name < b.localized_name) ?
              -1
            :
              (a.localized_name > b.localized_name) ? 1 : 0
          ) ?
          
            this.state.heroes.map((item, key) =>
              (
                <div key ={key} className="hero col-xs-4 col-sm-3 col-md-2 col-lg-1">
                    <Link to={'/heroes/' + item.localized_name}>
                      <img alt="hero portrait" className="img-responsive" src = {'https://api.opendota.com' + item.img }/>
                    </Link>
                    <div className="title"> { item.localized_name } </div>
                </div> 
              )
            )
          :
            null
        }        
        </div>        
    )
  }
}
                    // <a href={targetUrl + '/heroes/' + item.localized_name}>