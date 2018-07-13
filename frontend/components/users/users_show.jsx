import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import { Link } from 'react-router-dom';

class UsersShow extends React.Component {

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <div className="playlist-index-item">
      <Link className="playlist-index-item-link" key={playlist.id}
        to={`api/playlists/${playlist.id}`}>{playlist.playlist_name}</Link>
      </div>
      );
    });
    return (
      <div className="users-show-container">
        <div className="users-show-subcontainer">
          <SideBarContainer />
          {playlists}
        </div>
      </div>
    );
  }
}

export default UsersShow;
