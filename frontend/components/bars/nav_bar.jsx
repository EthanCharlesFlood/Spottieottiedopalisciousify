import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  console.log(this.props.match);
  return (
    <div className="navbar-container">
      <Link className="navbar-button" to="/">Playlists</Link>
      <Link className="navbar-button" to="/songs">Songs</Link>
    </div>
  );
};


export default NavBar;
