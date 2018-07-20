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
      <span onClick={this.handleAddingSong} id={playlist.id} className="stp-index-item-container" key={playlist.id}>
        <img src={playlist.imgurl} className="stp-index-item-image" key={playlist.id + 1}></img>
      </span>
      <span className="stp-index-item-title">{playlist.playlist_name}</span>
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
