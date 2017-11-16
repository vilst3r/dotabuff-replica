import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../css/App.css';

// Header component
const Header = (props) => (
  <div className="container-fluid">
    <header className="App-header text-center">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.title}</h1>
    </header>
  </div>    
)

export default Header
