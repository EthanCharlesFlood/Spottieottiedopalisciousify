import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import { deletePlaylist } from './../../actions/playlist_actions';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistid);
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.match.params.playlistid);
  }


  render() {
    let songs = "";
    let playlist_name = "";
    if (this.props.playlist !== undefined) {
        songs = this.props.songs.map(song => {
          return (
            <li key={song.id} className="song-index-list-item">
              <span key={song.id} className="song-index-list-title">
                <i className="fas fa-music"></i>
                {song.song_name}
              </span>
              <span className="song-index-list-features">
                {"4'33'"}
              </span>
            </li>
          );
        });
      playlist_name = this.props.playlist.playlist_name;
    }
    return (
      <div className="playlist-show-container">
        <SideBarContainer />
        <div className="playlist-show-items">
            <div className="playlist-show-info">
              <div className="playlist-show-image"></div>
              <div className= "playlist-show-info-subcontainer">
                <span className="playlist-show-title">{playlist_name}</span>
                <span className="playlist-show-author">By
                  <span className="playlist-show-user-show-link">Dummy Author</span>
                </span>
                <span className="playlist-show-song-count">2 Songs</span>
                <div className="playlist-show-button-container">
                  <button className="playlist-show-play">Play</button>
                  <button className="playlist-show-delete" onClick={this.handleDelete} >Delete</button>
                </div>
              </div>
          </div>
        </div>
        <div className="playlist-show-song-container">
          <ul>
            {songs}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
