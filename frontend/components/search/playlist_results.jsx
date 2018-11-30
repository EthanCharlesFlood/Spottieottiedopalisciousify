import React from "react";


class PlaylistResults extends React.Component {



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
    return (
      <div className="playlist-songs-results-container">
        <ul className="playlist-songs-results-list">
          {playlists}
        </ul>
      </div>
    );
  }
}
