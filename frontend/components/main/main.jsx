import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import PlaylistIndexContainer from './../playlists/playlist_index_container';
import NavBarContainer from './../bars/nav_bar_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class Main extends React.Component {

  componentDidMount() {

  }

	render() {
		return (
		<div className="main-container">
      <div className="main-subcontainer">
  			<PlaylistIndexContainer />
      </div>
		</div>
		);
	}
}

export default Main;
