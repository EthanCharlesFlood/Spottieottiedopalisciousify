import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import PlaylistIndexContainer from './../playlists/playlist_index_container';



class Main extends React.Component {

	render() {
		return (
		<div className="main-container">
			<SideBarContainer />
			<PlaylistIndexContainer />
		</div>
		);
	}
}

export default Main;
