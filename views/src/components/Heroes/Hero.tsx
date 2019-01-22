import React, { Component } from 'react';
import ServerDown from '../Error/ServerDown';
import './Hero.css';

interface Props {
  history: any,
  location: any,
  match: any,
  static: any
}

interface State {
  heroStats: any,
  componentError: string
}

export default class Hero extends Component<Props, State> {
  state: State = {
    heroStats: [],
    componentError: ''
  }
    
  componentDidMount() {  
    console.log(this.props.location.state)
  }

  render(){ 
    return (
      this.state.componentError === '' ?
        <div className="container">
          <h1 style={{color:'white'}}> {this.props.location.state.hero.localized_name} </h1>
          <img alt="hero portrait" className="img-responsive hero-portrait" src={this.props.location.state.hero.icon_url} />  
        </div>
      :
        <ServerDown />
    )
  }
}