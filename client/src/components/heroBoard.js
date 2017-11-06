import React, { Component } from 'react';
import '../css/content.css';

export default class heroBoard extends Component {
  state = {heroes: []}
    
  componentDidMount() {
    fetch('heroes') // or whatever URL you want
      .then(response => response.json())
      .then(heroes => this.setState({ heroes }))
  }    
    
  render(){ 
    return (
      <div className="panel panel-default">
        <div class = "panel-body">
        
        {
            this.state.heroes.sort(function(a, b) {
            return (a.localized_name < b.localized_name) ? -1 : (a.localized_name > b.localized_name) ? 1 : 0;
          }) ?
            
            this.state.heroes.map(function(item, key) {
                return (
                    <a>
                        <div className="heroImage col-xs-4 col-sm-4 col-md-3 col-lg-2 padding-0 hoverDiv" style={{backgroundImage: 'url(' + 'https://api.opendota.com' + item.img + ')'}}>
                            { item.localized_name }
                        </div> 
                    </a>
                )                    
            })
            :
            null
        }
        </div>        
      </div>
    )
  }
}
