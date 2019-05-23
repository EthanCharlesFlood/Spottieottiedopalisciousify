import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './../bars/nav_bar_container';
import PlaylistItem from './playlist_item';

class PlaylistIndex extends React.Component {
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
		return (
			<div className="component-container">
        <div className="playlist-index-subcontainer">
          <NavBarContainer />
          <span className="playlist-index-title">Playlists</span>
          <div className="playlist-index-playlists">
  				       {playlists}
          </div>
        </div>
			</div>
		);
	}
}

export default PlaylistIndex;
