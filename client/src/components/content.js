import React, { Component } from 'react';
// import './css/content.css';

// Content component
export default class Content extends Component {
    state = {heroes: []}
    
    componentDidMount() {
    fetch('heroes') // or whatever URL you want
      .then(response => response.json())
      .then(heroes => this.setState({ heroes }))
    }    
    
  render(){ 
    return (
      <div className="container">
        <div className="row">
        
            {
                this.state.heroes ?
                
                this.state.heroes.map(function(item, key) {
                    return (
                        <div className="col-md-2">
                            <img className="img-responsive" src={'https://api.opendota.com' + item.img} />
                        </div>                    
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