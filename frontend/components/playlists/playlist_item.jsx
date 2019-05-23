import React from "react";
import { Link } from 'react-router-dom';


class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'hidden',

    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.play = this.play.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
  }

  onMouseEnter(e) {
    this.setState({visible: 'visible'});
  }

  onMouseLeave(e) {
    this.setState({visible: 'hidden'});
  }

  isPlaying() {
    if (!this.props.playlist.song_ids) {
      return false;
    }
    let compare = (x,y) => x - y;
    let sorted = this.props.playlist.song_ids.sort(compare);
    for (let i = 0; i < this.props.playingPlaylist.length; i++) {
      let cur = this.props.playingPlaylist[i];
      if (cur.id !== sorted[i]) {
        return false;
      }
    }
    return true;
  }

  play(e) {
    e.preventDefault();
    if (!this.props.playing && !this.props.paused) {
      this.props.fetchPlaylist(this.props.playlist.id).then(
        playlist => this.props.addPlaylistToQueue(Object.values(playlist.songs))
      );
    } else if (this.isPlaying() && !this.props.paused) {
      this.props.pause();
    } else {
      this.props.play();
    }
  }
  render() {
    const playlist = this.props.playlist;
    let style = { visibility: this.state.visible};
    let icon = "fas fa-play";
    let imageStyle = { filter: "none" };
    if (this.isPlaying()) {
      if (this.props.playing) {
        icon = "far fa-pause-circle";
      }
      imageStyle = { filter: "brightness(.3)" };
      style = { visibility: "visible" } ;
    }
    return (
    <div className="playlist-index-item-container"
         key={playlist.id}
         onMouseEnter={this.onMouseEnter}
         onMouseLeave={this.onMouseLeave}>
      <Link className="playlist-index-item-big-link"
            key={playlist.id}
            to={`/playlists/${playlist.id}`}>
        <img className="playlist-index-item-image"
          key={playlist.id + 1}
          src={playlist.imgurl}
          style={imageStyle}/>
        <div onClick={this.play}
           style={style}
           id="playlist-index-play-button">
           <i className={icon}></i>
         </div>
        {playlist.playlist_name}
      </Link>
    </div>
    );
  }

}

export default PlaylistItem;
