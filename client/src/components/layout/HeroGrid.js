import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeroGrid.css';

export default class HeroGrid extends Component {
  state = {heroes: []}
    
  componentDidMount() {
    fetch('/heroes') 
      .then(response => response.json())
      .then(data => this.setState({heroes : data.result.heroes}))
  }    
  //console.log(data.result.heroes)
    
  render(){ 
    return (
        <div className="panel-body">
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
                      <img alt="hero portrait" className="img-responsive" src = {item.icon_url} />
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