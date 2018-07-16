import React from 'react';
import SideBarContainer from './../bars/side_bar_container';

class PlaylistShow extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistid);
  }

  componentWillReceiveProps() {

  }


  render() {
    return (
      <div className="playlist-show-container">
        <SideBarContainer />
        <div className="playlist-show-items">
            <div className="playlist-show-info">
              <div className="playlist-show-image"></div>
              <div className= "playlist-show-info-subcontainer">
              <span className="playlist-show-title">Dummy Text</span>
              <span className="playlist-show-author">By
                <span className="playlist-show-user-show-link">Dummy Author</span>
              </span>
              <span className="playlist-show-song-count">2 Songs</span>
              <div className="playlist-show-button-container">
                <button className="playlist-show-play">Play</button>
                <button className="playlist-show-delete">Delete</button>
              </div>
            </div>
          </div>
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
