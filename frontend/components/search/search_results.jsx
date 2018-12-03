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
    
    } else {
      playlists = "aaa";
    }

    if (this.props.songs) {

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
