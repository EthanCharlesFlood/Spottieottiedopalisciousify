import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import Modal from '../modal/modal';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }


  render() {
    const songs = this.props.songs.map(song => {
      return (
        <li key={song.id} className="song-index-list-item">
          <span key={song.id} className="song-index-list-title">
            <i className="fas fa-music"></i>
            {song.song_name}
          </span>
          <span className="song-index-list-features">
            {this.props.createModal2}
            {"4'33'"}
          </span>
        </li>
      );
    });
    return (
      <div className="song-index-container">
        <SideBarContainer />
        <div className="song-index-items">
          <NavBarContainer />
          {this.props.createModal1}
          <div className="song-index-list-container">
            <ul className="song-index-list">
              {songs}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SongsIndex;
