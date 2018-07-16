import React from 'react';
import { Link } from 'react-router-dom';


class AddSongToPlaylist extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddingSong = this.handleAddingSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  handleAddingSong(e) {
    const ids = {playlist_id: e.target.id, song_id: this.props.songId };
    this.props.handleAddingSong(ids);
  }

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <div key={playlist.id} className="playlist-index-item">
      <button onClick={this.handleAddingSong} id={playlist.id} className="playlist-index-item-container" key={playlist.id}>
        <div className="playlist-index-item-image" key={playlist.id + 1}></div>
        <span>{playlist.playlist_name}</span>
      </button>
      </div>
      );
    });
    return (
      <div>
        <span>Add to Playlist</span>
        {this.props.createModal}
        {playlists}
      </div>
    );
  }
}

export default AddSongToPlaylist;
