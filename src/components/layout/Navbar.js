import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}> {title} </i>
        </h1>

        <ul>
          <li>
            <Link to='/About'>About</Link>
          </li>

          <li>
            <Link to='/'>Home</Link>
          </li>

        </ul>

      </nav>
    )  
}

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar