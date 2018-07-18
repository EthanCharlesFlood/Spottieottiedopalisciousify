import React from 'react';


class AudioBar extends React.Component {
  constructor(props) {
    super(props);

    this.volume = this.volume.bind(this);
    this.playPause = this.playPause.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);

    let pPButton;
    if (this.props.playing === true) {
      pPButton = <i class="far fa-pause-circle"></i>;
    } else {
      pPButton = <i className="far fa-play-circle"></i>;
    }

    this.state = {
      playing: this.props.playing,
      playingSong: this.props.playingSong,
      songQueue: this.props.songQueue,
      pPButton: pPButton,
    };
  }

  componentDidMount() {
    this.audio.volume = 0.5;
  }

  playPause() {
    if (this.state.playing === true) {
      this.props.pause();
      this.audio.pause();
      this.setState({
        playing: false,
        pPButton: <i className="far fa-play-circle"></i>,
      });
    } else {
      this.props.play();
      this.audio.play();
      this.setState({
        playing: true,
        pPButton: <i className="far fa-pause-circle"></i>,
      });
    }
  }

  next() {
    this.props.nextSong();
  }

  previous() {
    this.props.previousSong();
  }


  volume(e) {
    this.audio.volume = e.currentTarget.value / 100;
  }

  toggleRepeat(e) {
    if (e.currentTarget.loop === false) {
      this.audio.loop = true;
    } else {
      this.audio.loop = false;
    }
  }

  render() {
    return (
      <div className="audio-bar-container">

        <div className="now-playing-info">
          <div className="now-playing-img" />
          <span className="now-playing-title">Song Title</span>
        </div>

        <div className="audio-player">

          <div className="audio-player-controls">
            <span className="next-song" onClick={this.props.nextSong}><i className="fas fa-forward"></i></span>
            <span className="play-pause-button" onClick={this.playPause}>{this.state.pPButton}</span>
            <span className="previous-song" onClick={this.props.previousSong}><i className="fas fa-backward"></i></span>
          </div>

          <div className="song-progress-container">
            <input type="range" defaultValue="0" className="song-progress"></input>
          </div>

          <audio loop={false} src={'/app/assets/songs/Sam_Newsome_-_02_-_Live_in_Studio_B-1.mp3'} ref={(audio) => this.audio = audio}/>
        </div>

        <div className="audio-bar-volume">
          <input type="range" onChange={this.volume} className="audio-bar-volume-slider"></input>
        </div>
      </div>
    );
  }
}

export default AudioBar;
