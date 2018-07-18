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
    const songs_to_playlist = {playlist_id: e.currentTarget.id, song_id: this.props.songId };
    this.props.addSongToPlaylist(songs_to_playlist);
    return this.props.closeModal();
  }

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
      <div key={playlist.id} className="stp-index-item">
      <button onClick={this.handleAddingSong} id={playlist.id} className="stp-index-item-container" key={playlist.id}>
        <div className="stp-index-item-image" key={playlist.id + 1}></div>
        <span>{playlist.playlist_name}</span>
      </button>
      </div>
      );
    });
    return (
      <div className="stp-container">
        <span className="stp-title">Add to Playlist</span>
        {this.props.createModal}
        <div className="stp-index-grid">
          {playlists}
        </div>
      </div>
    );
  }
}

export default AddSongToPlaylist;
