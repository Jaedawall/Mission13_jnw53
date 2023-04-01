import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./Home">Home</Link>
        </li>
        <li>
          <Link to="./Podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="./MovieCollection">Movie Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
