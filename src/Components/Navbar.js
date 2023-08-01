import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/NotFound">
          NotFound
        </Link>
      </div>
    </div>
  );
}

export default Navbar
