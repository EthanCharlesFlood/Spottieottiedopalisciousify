import React from "react";
import { Link } from 'react-router-dom';


class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  onMouseOver() {
    this.setState({selected: true});
  }

  onMouseLeave() {
    this.setState({selected: false});
  }

  playing() {

  }

  render() {
    const playlist = this.props.playlist;
    return (
    <div key={playlist.id} className="playlist-index-item">
    <div className="playlist-index-item-container" key={playlist.id}>
      <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
        <img className="playlist-index-item-image" key={playlist.id + 1} src={playlist.imgurl}/>
        <span className="playlist-index-item-link">{playlist.playlist_name}</span>
      </Link>
    </div>
    </div>
    );
  }

}
