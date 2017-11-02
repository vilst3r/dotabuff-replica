import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

// Header component
export default class Header extends Component {
  render(){ 
    return (
      <div className="container-fluid">
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
      </div> 
    )
  }
}
