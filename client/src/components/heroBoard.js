import React, { Component } from 'react';

export default class heroBoard extends Component {
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
                        <div className="col-md-3">
                            <img src={'https://api.opendota.com' + item.img} />
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
