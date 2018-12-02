import React from "react";


class SearchResults extends React.Component {

  handleAddSong(e) {
    this.props.queueSong(this.props.song_results[e.currentTarget.id]);
  }

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <div key={playlist.id} className="playlist-result-item">
      <div className="playlist-result-item-container" key={playlist.id}>
        <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
          <img className="playlist-result-item-image" key={playlist.id + 1} src={playlist.imgurl}/>
          <span className="playlist-result-item-link">{playlist.playlist_name}</span></Link>
      </div>
      </div>
      );
    });

    const songs = this.props.song_results.map((song, idx) => {
      let songAdder = (song) => this.handleAddSong(song);
      return (
        <li key={song.id} id={idx}  className="song-result-list-item">
          <span key={song.id} className="song-result-list-title">
            <span key={Math.random()} onClick={songAdder} id={idx} className="play-button"><i className="fas fa-music"></i></span>
            {song.song_name}
            <br></br>
            {song.artist.artist_name} - {song.album}
          </span>
          <span className="song-result-list-features">
            <button key={song.id} id={song.id} className="song-modal" onClick={this.openModal}><i className="fas fa-ellipsis-h"></i></button>
            {"4'33'"}
          </span>
        </li>
      );
    });

    return (
      <div className="playlist-songs-results-container">
        <ul className="playlist-songs-results-list">
          {playlists}
          {songs}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
