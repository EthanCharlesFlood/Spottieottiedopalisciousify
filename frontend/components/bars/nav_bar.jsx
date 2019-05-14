import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const NavBar = () => {
    if (this.props.history) {
      return (
        <div className="navbar-container">
          <Link className="navbar-button" to="/">Playlists</Link>
          <Link className="navbar-button-underlined" to="/songs">Songs</Link>
        </div>
      );
    } else if (this.props.history){
        return (
          <div className="navbar-container">
            <Link className="navbar-button-underlined" to="/">Playlists</Link>
            <Link className="navbar-button" to="/songs">Songs</Link>
          </div>
        );
      }
};


export default withRouter(NavBar);
