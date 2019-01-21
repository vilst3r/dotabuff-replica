import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

// Header component
const Header = ({ title } : any) => (
    <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand"> { title } </Link>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
)

export default Header

