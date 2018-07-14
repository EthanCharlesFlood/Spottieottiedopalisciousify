import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylists();
	}


	render() {
		const playlists = this.props.playlists.map(playlist => {
			return (
			<div className="playlist-index-item" key={playlist.id}>
			<Link className="playlist-index-item-link" key={playlist.id}
				to={`/playlists/${playlist.id}`}>{playlist.playlist_name}</Link>
			</div>
			);
		});
		return (
			<div className="playlist-index-container">
        <span className="playlist-index-title">Playlists</span>
					{playlists}
			</div>
		);
	}
}

export default PlaylistIndex;
