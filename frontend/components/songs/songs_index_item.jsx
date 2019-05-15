import React from 'react';


class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleAddSong = this.handleAddSong.bind(this);
    this.state = {
      icon: '<i className="fas fa-play"></i>',
    };
  }

  onMouseEnter() {
    this.setState({ icon: '<i className="fas fa-play"></i>' });
  }

  onMouseLeave() {
    this.setState({ icon: '<i className="fas fa-music"></i>' });
  }

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  render() {
    const song = this.props.song;
    return (
      <li key={song.id} id={this.props.idx}  className="song-index-list-item">
        <span key={song.id} className="song-index-list-title">
          <span key={Math.random()}
            onClick={this.handleAddSong}
            id={this.props.idx}
            className="play-button"><i className="fas fa-play"></i></span>
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
  }
}
