import React from "react";
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);

    this.state = {
      playButton: false
    };
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
    let playlists;
    let songs;
    let pHeader;
    let sHeader;
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
      pHeader = <h3 className="search-header">Playlists</h3>;
    } else {
      playlists = "";
      pHeader = "";
    }



    if (this.props.songs[0] !== undefined) {
      songs = this.props.songs.map((song, idx) => {
        let songAdder = (song) => this.handleAddSong(song);
        return (
          <li key={song.id} id={idx}  className="search-songs-list-item">
            <span key={song.id} className="search-songs-list-title">
              <span key={Math.random()} onClick={songAdder} id={idx} className="play-button"><i className="fas fa-play"></i></span>
              {song.song_name}
              <br></br>
              {song.artist.artist_name} - {song.album}
            </span>
            <span className="search-songs-list-features">
              <button key={song.id} id={song.id} className="song-modal" onClick={this.openModal}><i className="fas fa-plus"></i></button>
              {this.durationParser(song.duration)}
            </span>
          </li>
        );
      });
      sHeader = <h3 className="search-header">Songs</h3>;
    } else {
      songs = "";
      sHeader = "";
    }
    return (
      <div className="search-results-container">
          {sHeader}
          <ul className="search-songs-list">
            {songs}
          </ul>
          {pHeader}
          <ul className="search-playlists-list">
            {playlists}
          </ul>

      </div>
    );
  }
}

export default SearchResults;
