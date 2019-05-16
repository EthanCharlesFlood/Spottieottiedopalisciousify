import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import AudioBarContainer from './../bars/audio_bar_container';
import SongIndexItem from './../songs/songs_index_item';

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
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistid);
  }

  handleDelete() {
    const payload = {modal: "ConfirmDelete", playlistId: this.props.match.params.playlistid};
    this.props.openModal(payload);
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

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  openModal(e) {
    const payload = {modal: "SongToPlaylist", song_id: e.currentTarget.id};
    this.props.openModal(payload);
  }

  durationParser(duration) {
    let minutes = Math.floor((duration / 60));
    let seconds = Math.floor((duration % 60));
    if (seconds < 10) {
      return minutes + ":0" + seconds;
    } else {
      return minutes + ":" + seconds;
    }
  }

  render() {
    let songs = "";
    let playlist_name = "";

    if (this.props.playlist !== undefined) {
        songs = this.props.songs.map((song, idx) => {
          let removeSongButton;
          let functionality;
          if (this.props.playlist.user_id === this.props.currentUserId) {
            removeSongButton = <i className="fas fa-trash-alt"></i>;
            functionality = this.handleRemove;
          } else {
            removeSongButton =  null;
            functionality = null;
          }
          const songAdder = song => this.handleAddSong(song);
          let playing;
          if (this.props.playingSong && this.props.playingSong.id === song.id) {
            if (this.props.queueIndex === idx || this.props.queueLength === 1) {
              playing = true;
            }
          }
          let paused = !this.props.playing
          return (
            <SongIndexItem song={song}
                           idx={idx}
                           songAdder={songAdder}
                           functionality={functionality}
                           key={idx}
                           playing={playing}
                           durationParser={this.durationParser}
                           button={removeSongButton}
                           pause={this.props.pause}
                           play={this.props.play}
                           paused={paused}/>
          );
        });
      playlist_name = this.props.playlist.playlist_name;
    }
    let duration = 0;
    this.props.songs.forEach((song) => duration += song.duration);
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
        <div className="playlist-show-items">
            <div className="playlist-show-info">
              <img src={this.props.playlist.imgurl} className="playlist-show-image" />
              <div className= "playlist-show-info-subcontainer">
                <span className="playlist-show-title">{playlist_name}</span>
                <span className="playlist-show-author">By
                  <span className="playlist-show-user-show-link">{this.props.playlist.username}</span>
                </span>
                <span className="playlist-show-song-count">{this.props.songs.length} Songs {this.durationParser(duration)}</span>
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
