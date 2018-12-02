import React from "react";


class SearchResults extends React.Component {

  handleAddSong(e) {
    this.props.queueSong(this.props.song_results[e.currentTarget.id]);
  }

  render() {
    let playlists;
    let songs;
    console.log(this.props.playlists);
    if (this.props.playlists !== undefined) {
      this.props.playlists.map(playlist => {
        return (
        <Link className="playlist-index-item-container" key={playlist.id} to={`/playlists/${playlist.id}`}>
          <img className="playlist-index-item-image" src={playlist.imgurl}/>
          <div className="playlist-index-item-link">{playlist.playlist_name}</div>
        </Link>
      );
      });
    } else {
      playlists = "";
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
