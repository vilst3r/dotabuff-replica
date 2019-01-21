import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

export default class LandingPage extends Component {
    state = { 
        heroes: [] 
    }
    
    componentDidMount() {
        fetch('/heroes') 
        .then(response => response.json())
        .then(data => this.setState({heroes : data.result.heroes}))
        .then(() => console.log(this.state.heroes))
    }    
    
    render(){ 
        return (
            <div className="panel-body">
            {
                this.state.heroes ?
                    this.state.heroes.map((hero: any , key: number) => (
                        <div key ={key} className="hero col-xs-4 col-sm-3 col-md-2 col-lg-1">
                            <Link to={'/heroes/' + hero.localized_name}>
                                <img alt="hero portrait" className="img-responsive" src={hero.icon_url} />
                            </Link>
                            <div className="title"> { hero.localized_name } </div>
                        </div> 
                    ))
                :
                    null
            }        
            </div>        
        )
    }
}