import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="./Home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-nav">
            <Link to="./Podcasts" className="nav-link">
              Podcasts
            </Link>
          </li>
          <li className="navrbar-nav">
            <Link to="./MovieCollection" className="nav-link">
              Movie Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
