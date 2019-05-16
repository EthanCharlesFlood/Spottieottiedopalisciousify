import React from 'react';



class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      icon: <i className="fas fa-music"></i>,
      button: null
    };
  }

  onMouseEnter(e) {
    this.setState({
      icon: <i className="fas fa-play"></i>,
      button: this.props.button
     });
  }

  onMouseLeave(e) {
    this.setState({
      button: null,
      icon: <i className="fas fa-music"></i>
    });
  }

  render() {
    console.log(1);
    const song = this.props.song;
    let artist;
    if (song.artist.artist_name !== undefined) {
      artist = song.artist.artist_name;
    } else {
      artist = song.artist;
    }
    let class1, class2, class3;
    if (this.props.search) {
      class1 = "search-songs-list-item";
      class2 = "search-songs-list-title";
      class3 = "search-songs-list-features";
    } else {
      class1 = "song-index-list-item";
      class2 = "song-index-list-title";
      class3 = "song-index-list-features";
    }
    let color;
    let icon;
    let background;
    let songAdder = this.props.songAdder;
    if (this.props.playing) {
      color = { color: "#1ed760", };
      background = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        opacity: 1,
      };
      if (!this.props.paused) {
        songAdder = () => {
          this.props.pause();
        }
        icon = <i style={color}
                  id="small-pause"
                  className="far fa-pause-circle"></i>;
      } else {
        songAdder = () => {
          this.props.play();
        }
        icon = <i style={color}
                  className="fas fa-play"></i>
      }
    } else {
      color = { color: "#fff" };
      icon = this.state.icon;
    }
    return (
      <li key={song.id}
          id={this.props.idx}
          className={class1}
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={songAdder}
          style={background}>
        <span key={song.id} className={class2}>
          <span key={Math.random()}
            id={this.props.idx}
            className="play-button" style={color}>{icon}</span>
          <span style={color}>{song.song_name}</span>
          <br></br>
          <span className="song-index-artist-album">{artist} - {song.album}</span>
        </span>
        <span className={class3} style={color}>
          <button key={song.id}
                  id={song.id}
                  className="song-modal"
                  onClick={this.props.functionality}>
            {this.state.button}
          </button>
          {this.props.durationParser(song.duration)}
        </span>
      </li>
    );
  }
}

export default SongIndexItem;
