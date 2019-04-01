import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';
import Modal from '../modal/modal';

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playButton: false
    };
  }


  componentDidMount() {
    this.props.fetchSongs();

    this.openModal = this.openModal.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  openModal(e) {
    const payload = {modal: "SongToPlaylist", song_id: e.currentTarget.id};
    this.props.openModal(payload);
  }

  durationParser(duration) {
    let minutes = Math.floor((duration / 60));
    let seconds = Math.floor((duration % 60));
    if (seconds < 10) {
      return minutes + ":0" + seconds;
    } else {
      return minutes + ":" + seconds;
    }
  }

  render() {
    const songs = this.props.songs.map((song, idx) => {
      let songAdder = (song) => this.handleAddSong(song);
      return (
        <li key={song.id} id={idx}  className="song-index-list-item">
          <span key={song.id} className="song-index-list-title">
            <span key={Math.random()} onClick={songAdder} id={idx} className="play-button"><i className="fas fa-play"></i></span>
            {song.song_name}
            <br></br>
            {song.artist.artist_name} - {song.album}
          </span>
          <span className="song-index-list-features">
            <button key={song.id} id={song.id} className="song-modal" onClick={this.openModal}><i className="fas fa-plus"></i></button>
            {this.durationParser(song.duration)}
          </span>
        </li>
      );
    });
    return (
      <div className="song-index-container">
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
