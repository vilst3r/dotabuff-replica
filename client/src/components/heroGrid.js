import React, { Component } from 'react';
import '../css/content.css';

export default class heroGrid extends Component {
  state = {heroes: []}
    
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var targetUrl = 'http://dota-matchup-analyzer-xbonk12.c9users.io:8081'
    
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
                <a key ={key} href={'heroes/' + item.localized_name }>
                    <div className="hero col-xs-4 col-sm-3 col-md-2 col-lg-1">
                        <img className="img-responsive" src = {'https://api.opendota.com' + item.img }/>
                        <div className="title"> { item.localized_name } </div>
                    </div> 
                </a>              
              )
            )
          :
            null
        }        
        </div>        
    )
  }
}