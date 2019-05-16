import React from "react";
import { Link } from 'react-router-dom';


class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'hidden',
    };
  }

  onMouseOver() {
    this.setState({visible: 'visible'});
  }

  onMouseLeave() {
    this.setState({visible: 'hidden'});
  }

  play() {

  }

  render() {
    const playlist = this.props.playlist;
    return (
    <div key={playlist.id} className="playlist-index-item">
    <div className="playlist-index-item-container" key={playlist.id}>
      <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
        <img className="playlist-index-item-image"
          key={playlist.id + 1}
          src={playlist.imgurl}/>
        <i className="fas fa-play" visibility={visible}></i>
        <span className="playlist-index-item-link">
          {playlist.playlist_name}
        </span>
      </Link>
    </div>
    </div>
    );
  }

}
