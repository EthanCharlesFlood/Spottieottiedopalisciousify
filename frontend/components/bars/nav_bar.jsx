import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }



    render() {
      if (this.props.history.location.pathname === "/songs") {
        return (
          <div className="navbar-container">
            <Link className="navbar-button" to="/">Playlists</Link>
            <Link className="navbar-button-underlined" to="/songs">Songs</Link>
          </div>
        );
      } else if (this.props.history.location.pathname === "/main"){
          return (
            <div className="navbar-container">
              <Link className="navbar-button-underlined" to="/">Playlists</Link>
              <Link className="navbar-button" to="/songs">Songs</Link>
            </div>
          );
      } else {
        return (
          <div className="navbar-container">
            <Link className="navbar-button" to="/">Playlists</Link>
            <Link className="navbar-button" to="/songs">Songs</Link>
          </div>
        )
      }
    }
};


export default withRouter(NavBar);
