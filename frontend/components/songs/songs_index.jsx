import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import NavBarContainer from './../bars/nav_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';
import SongIndexItem from './songs_index_item';
import Modal from '../modal/modal';

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
    this.state = {
      playButton: false
    };
  }


  componentDidMount() {
    this.props.fetchSongs();
  }

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  openModal(e) {
    e.stopPropagation();
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
      const songAdder = (song) => this.handleAddSong(song);
      let playing;
      if (this.props.playingSong && this.props.playingSong.id === song.id) {
        if (this.props.queueIndex === idx || this.props.queueLength === 1) {
          playing = true;
        }
      }
      let paused = !this.props.playing
      return (
        <SongIndexItem song={song}
                       idx={idx}
                       songAdder={songAdder}
                       functionality={this.openModal}
                       key={idx}
                       playing={playing}
                       paused={paused}
                       durationParser={this.durationParser}
                       button={<i className="fas fa-plus"></i>}
                       pause={this.props.pause}
                       play={this.props.play}/>
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
