import React from "react";


class SongsResults extends React.component {


  handleAddSong(e) {
    this.props.queueSong(this.props.song_results[e.currentTarget.id]);
  }

  render() {
    const songs = this.props.song_results.map((song, idx) => {
      let songAdder = (song) => this.handleAddSong(song);
      return (
        <li key={song.id} id={idx}  className="song-index-list-item">
          <span key={song.id} className="song-index-list-title">
            <span key={Math.random()} onClick={songAdder} id={idx} className="play-button"><i className="fas fa-music"></i></span>
            {song.song_name}
            <br></br>
            {song.artist.artist_name} - {song.album}
          </span>
          <span className="song-index-list-features">
            <button key={song.id} id={song.id} className="song-modal" onClick={this.openModal}><i className="fas fa-ellipsis-h"></i></button>
            {"4'33'"}
          </span>
        </li>
      );
    });
    return (
      <div className="search-songs-results-container">
        <ul className="search-songs-results-list">
        </ul>
      </div>
    );
  }
}
