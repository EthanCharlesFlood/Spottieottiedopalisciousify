import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';
import Modal from '../modal/modal';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();

    this.openModal = this.openModal.bind(this);
  }


  openModal(e) {
    const payload = {modal: "SongToPlaylist", song_id: e.currentTarget.id};
    this.props.openModal(payload);
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
            <button key={song.id} id={song.id} className="song-modal" onClick={this.openModal}><i className="fas fa-ellipsis-h"></i></button>
            {"4'33'"}
          </span>
        </li>
      );
    });
    return (
      <div className="song-index-container">
        <SideBarContainer />
        <AudioBarContainer />
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
