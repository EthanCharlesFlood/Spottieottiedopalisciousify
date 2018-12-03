import React from "react";
import { Link } from 'react-router-dom';


class SearchResults extends React.Component {

  handleAddSong(e) {
    this.props.queueSong(this.props.song_results[e.currentTarget.id]);
  }

  render() {
    let playlists;
    let songs;
    if (this.props.playlists[0] !== undefined) {
      playlists = this.props.playlists.map(playlist => {
        return (
        <div key={playlist.id} className="playlist-index-item">
          <Link className="playlist-index-item-container" key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img className="playlist-index-item-image" src={playlist.imgurl}/>
            <div className="playlist-index-item-link">{playlist.playlist_name}</div>
          </Link>
        </div>
        );
      });
    } else {
      playlists = "";
    }

    if (this.props.songs) {
      songs = this.props.songs.map((song, idx) => {
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
    } else {
      songs = "";
    }
    return (
      <div className="playlist-songs-results-container">
        <ul className="playlSist-songs-results-list">
          <div>
            <h3>Playlists</h3>
            {playlists}
          </div>
          <div>
            <h3>Songs</h3>
            {songs}
          </div>
        </ul>
      </div>
    );
  }
}

export default SearchResults;
