import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class UsersShow extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }



  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <div key={playlist.id} className="playlist-index-item">
      <div className="playlist-index-item-container">
        <div className="playlist-index-item-image"></div>
        <Link className="playlist-index-item-link" key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.playlist_name}</Link>
      </div>
      </div>
      );
    });
    return (
      <div className="users-show-container">
        <SideBarContainer />
        <div className="users-show-subcontainer">
          <NavBarContainer />
          {this.props.createModal}
          <div className="users-show-playlists">
            {playlists}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersShow;
