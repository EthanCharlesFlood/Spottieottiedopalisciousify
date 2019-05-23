import React from 'react';
import NavBarContainer from './../bars/nav_bar_container';
import PlaylistItem from './../playlists/playlist_item';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class UsersShow extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }


  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <PlaylistItem
				key={playlist.id}
				playlist={playlist}
				playing={this.props.playing}
				playingPlaylist={this.props.playingPlaylist}
				fetchPlaylist={this.props.fetchPlaylist}
				addPlaylistToQueue={this.props.addPlaylistToQueue}
				pause={this.props.pause}
				play={this.props.play} />
      );
    });

    let followedPlaylists;

    if (this.props.followedPlaylists[0] !== undefined) {
    followedPlaylists = this.props.followedPlaylists.map(playlist => {
      return (
      <PlaylistItem
				key={playlist.id}
				playlist={playlist}
				playing={this.props.playing}
				playingPlaylist={this.props.playingPlaylist}
				fetchPlaylist={this.props.fetchPlaylist}
				addPlaylistToQueue={this.props.addPlaylistToQueue}
				pause={this.props.pause}
				play={this.props.play} />
      );
      });
    } else {
      followedPlaylists = "";
    }
    return (
      <div className="users-show-container">
          <NavBarContainer />
          {this.props.createModal}
          <div className="playlist-index-playlists">
            {playlists}
            {followedPlaylists}
          </div>
      </div>
    );
  }
}

export default UsersShow;
