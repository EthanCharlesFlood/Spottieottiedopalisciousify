import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';
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
        <Link className="playlist-index-item-container" key={playlist.id} to={`/playlists/${playlist.id}`}>
          <img className="playlist-index-item-image" src={playlist.imgurl}/>
          <div className="playlist-index-item-link">{playlist.playlist_name}</div>
        </Link>
      </div>
      );
    });

    let followedPlaylists;

    if (this.props.followedPlaylists[0] !== undefined) {
    followedPlaylists = this.props.followedPlaylists.map(playlist => {
      return (
        <div key={playlist.id} className="playlist-index-item">
        <Link className="playlist-index-item-container" key={playlist.id} to={`/playlists/${playlist.id}`}>
          <img className="playlist-index-item-image" src={playlist.imgurl}/>
          <div className="playlist-index-item-link">{playlist.playlist_name}</div>
        </Link>
        </div>
        );
      });
    } else {
      followedPlaylists = "";
    }
    return (
      <div className="users-show-container">
          <NavBarContainer />
          {this.props.createModal}
          <div className="users-show-playlists">
            {playlists}
            <span className="users-show-followed-title">Followed Playlists</span>
            <div className="users-show-followed-playlists">
              {followedPlaylists}
            </div>
          </div>
      </div>
    );
  }
}

export default UsersShow;
