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
      <div className="playlist-index-item-container" key={playlist.id}>
        <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
					<img className="playlist-index-item-image" key={playlist.id + 1} src={playlist.imgurl}/>
					<span className="playlist-index-item-link">{playlist.playlist_name}</span>
				</Link>
      </div>
      </div>
      );
    });
		return (
			<div className="component-container">
        <div className="playlist-index-subcontainer">
          <div className="playlist-index-header">
            <NavBarContainer />
            <span className="playlist-index-title">Tunezz</span>
          </div>
          <div className="playlist-index-playlists">
  				       {playlists}
          </div>
        </div>
			</div>
		);
	}
}

export default PlaylistIndex;
