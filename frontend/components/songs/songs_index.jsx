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
        <div className="song-index-list-item">
          <span className="song-index-list-title">placeholder title

          </span>
        </div>
      );
    });
    return (
      <div className="song-index-container">
        <SideBarContainer />
        <div className="song-index-items">
          <NavBarContainer />
          {this.props.createModal}
          <div className="song-index-list-container">
            <ul className="song-index-list">

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SongsIndex;
