import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './../bars/nav_bar_container';

class PlaylistIndex extends React.Component {
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
			<div className="playlist-index-container">
        <NavBarContainer />
        <span className="playlist-index-title">Tunezz</span>
          <div className="playlist-index-playlists">
					       {playlists}
          </div>
			</div>
		);
	}
}

export default PlaylistIndex;
