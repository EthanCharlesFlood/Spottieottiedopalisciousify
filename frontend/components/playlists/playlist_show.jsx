import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.state = {
      follows: this.props.follows,
      playButton: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleAddToQueue = this.handleAddToQueue.bind(this);
    this.handleReceive = this.handleReceive.bind(this);
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

  handleFollow() {
    this.setState({ follows: true });
    this.props.followPlaylist({ playlist_id: this.props.playlist.id, user_id: this.props.currentUserId});
  }

  handleUnfollow() {
    this.setState({ follows: false });
    this.props.removeFollow({ playlist_id: this.props.playlist.id, user_id: this.props.currentUserId});
  }

  handleAddToQueue() {
    this.props.addPlaylistToQueue(this.props.songs);
  }

  handleReceive(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  openModal(e) {
    const payload = {modal: "SongToPlaylist", song_id: e.currentTarget.id};
    this.props.openModal(payload);
  }

  render() {
    let songs = "";
    let playlist_name = "";

    if (this.props.playlist !== undefined) {
        songs = this.props.songs.map((song, idx) => {
          let removeSongButton;
          if (this.props.playlist.user_id === this.props.currentUserId) {
            removeSongButton = <button id={song.id} onClick={this.handleRemove}><i className="fas fa-trash-alt"></i></button>;
          } else {
            removeSongButton =  null;
          }
          return (

            <li key={Math.random()} className="song-index-list-item">
              <span id={idx} onClick={this.handleReceive} key={Math.random()} className="song-index-list-title">
                <i className="fas fa-music"></i>
                {song.song_name}
                <br></br>
                {song.artist} - {song.album}
              </span>

              <span key={Math.random()} className="song-index-list-features">
                {removeSongButton}
                {"4'33'"}
              </span>
            </li>
          );
        });
      playlist_name = this.props.playlist.playlist_name;
    }

    let actionButton;
    if (this.props.playlist.user_id === this.props.currentUserId) {
      actionButton = <button className="playlist-show-delete" onClick={this.handleDelete} >Delete</button>;
    } else if (this.state.follows === true) {
      actionButton = <button className="playlist-show-delete" onClick={this.handleUnfollow} >Unfollow Playlist</button>;
    } else {
      actionButton = <button className="playlist-show-delete" onClick={this.handleFollow} >Follow Playlist</button>;
    }
    return (
      <div className="playlist-show-container">
        <SideBarContainer />
        <div className="playlist-show-items">
            <div className="playlist-show-info">
              <img src={this.props.playlist.imgurl} className="playlist-show-image" />
              <div className= "playlist-show-info-subcontainer">
                <span className="playlist-show-title">{playlist_name}</span>
                <span className="playlist-show-author">By
                  <span className="playlist-show-user-show-link">{this.props.playlist.username}</span>
                </span>
                <span className="playlist-show-song-count">{this.props.songs.length} Songs</span>
                <div className="playlist-show-button-container">
                  <button onClick={this.handleAddToQueue} className="playlist-show-play">Play</button>
                  {actionButton}
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
