import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../models/Heroes/hero.model';
import ServerDown from './Error/ServerDown';

import './LandingPage.css';

interface Props {
    history: any,
    location: any,
    match: any,
    static: any
}
  
interface State {
    heroes: Hero[],
    componentError: string
}

export default class LandingPage extends Component<Props, State> {
    state: State = { 
        heroes: [],
        componentError: ''
    }
    
    componentDidMount() {
        fetch('/heroes') 
        .then(response => response.json())
        .then(data => this.setState({
            heroes: data.result.heroes
        }))
        .then(() => console.log(this.state.heroes))
        .catch(error => 
            this.setState(state => ({
                componentError: error
            }))    
        )
    }    
    
    render(){ 
        return (
            this.state.componentError === '' ?
                <div className="card-body row">
                {
                    this.state.heroes ?
                        this.state.heroes.map((hero: Hero , key: number) => (
                            <div key ={key} className="hero col-xs-4 col-md-2 col-lg-1">
                                <Link to={{pathname: '/heroes/' + hero.localized_name, state: hero}}>
                                    <img className="img-responsive" src={hero.icon_url} alt="hero portrait" />
                                </Link>
                                <div className="title"> { hero.localized_name } </div>
                            </div> 
                        ))
                    :
                        null
                }        
                </div>        
            :
                <ServerDown />
        )
    }
}