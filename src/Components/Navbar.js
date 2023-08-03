import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <div className='nav_comp'> 
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/NotFound">
          NotFound
        </Link>
        <Link className="link" to="/Books">
          Books
        </Link>
         </div>
      </div>
    </div>
  );
}

export default Navbar
