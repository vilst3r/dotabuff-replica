import React from 'react';
import './NavBar.css';

// Header component
const NavBar = (props) => (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">{props.title}</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
        </ul>
      </div>
    </nav>
)

export default NavBar
