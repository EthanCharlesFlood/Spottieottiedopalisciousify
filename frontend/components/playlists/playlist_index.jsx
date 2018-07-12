import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylists();
	}


	render() {
		const playlists = this.props.playlists.map(playlist => {
			return <Link className="playlist-index-item" key={playlist.id}
				to={`api/playlists/${playlist.id}`}>{playlist.name}</Link>;
		});
		return (
			<div className="playlist-index-container">
				{playlists}
			</div>
		);
	}
}

export default PlaylistIndex;
