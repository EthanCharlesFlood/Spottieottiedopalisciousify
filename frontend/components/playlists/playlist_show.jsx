import React from 'react';
import SideBarContainer from './../bars/side_bar_container';

class PlaylistShow extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistid);
    debugger
  }


  render() {
    const playlistName = null;
    return (
      <div className="playlist-show-container">
        <SideBarContainer />
        <div className="playlist-show-items">
          <span className="playlist-show-title">{playlistName}</span>
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
