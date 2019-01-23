import React, { Component } from 'react';
import HeroContent from './HeroContent';
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
    console.log(this.props)
    console.log(this.props.location.state)
  }

  render(){ 
    return (
      this.state.componentError === '' && this.props.location.state ?
        <div className="container text-center">
          <div>
            <h1 style={{color:'white'}}> {this.props.location.state.localized_name} </h1>
          </div>
          <div>
            <img className="col-2" src={this.props.location.state.icon_url} alt="hero portrait"/> 
          </div>
          <HeroContent /> 
          <HeroContent /> 
        </div>
      :
        <ServerDown />
    )
  }
}