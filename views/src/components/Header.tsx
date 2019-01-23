import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

// Header component
const Header = () => (
    <header>
        <nav className="navbar navbar-expand navbar-inverse dotastuff-nav-bar">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item col">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item col">
                <Link to="/">Stats</Link>
              </li>
              <li className="nav-item col">
                <Link to="/">Games</Link>
              </li>
              <li className="nav-item col">
                <Link to="/">Random</Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
)

export default Header

