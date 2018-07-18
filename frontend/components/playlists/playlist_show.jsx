import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistid);
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.match.params.playlistid).then(() => this.props.history.push("/main")
    );
  }

  handleRemove(e) {
    this.props.removeSong(
      {playlist_id: this.props.playlist.id, song_id: e.currentTarget.id}
    );
  }


  render() {
    let songs = "";
    let playlist_name = "";
    if (this.props.playlist !== undefined) {
        songs = this.props.songs.map(song => {
          return (

            <li key={Math.random()} className="song-index-list-item">
              <span key={Math.random()} className="song-index-list-title">
                <i className="fas fa-music"></i>
                {song.song_name}
              </span>

              <span key={Math.random()} className="song-index-list-features">
                <button id={song.id} onClick={this.handleRemove}><i className="fas fa-trash-alt"></i></button>
                {"4'33'"}
              </span>
            </li>
          );
        });
      playlist_name = this.props.playlist.playlist_name;
    }

    let deleteButton;
    if (this.props.playlist.user_id === this.props.currentUserId) {
      deleteButton = <button className="playlist-show-delete" onClick={this.handleDelete} >Delete</button>;
    } else {
      deleteButton =  null;
    }
    return (
      <div className="playlist-show-container">
        <SideBarContainer />
        <AudioBarContainer />
        <div className="playlist-show-items">
            <div className="playlist-show-info">
              <div className="playlist-show-image"></div>
              <div className= "playlist-show-info-subcontainer">
                <span className="playlist-show-title">{playlist_name}</span>
                <span className="playlist-show-author">By
                  <span className="playlist-show-user-show-link">{this.props.playlist.username}</span>
                </span>
                <span className="playlist-show-song-count">{this.props.songs.length} Songs</span>
                <div className="playlist-show-button-container">
                  <button className="playlist-show-play">Play</button>
                  {deleteButton}
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
