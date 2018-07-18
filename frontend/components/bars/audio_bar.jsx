import React from 'react';


class AudioBar extends React.Component {
  constructor(props) {
    super(props);

    this.volume = this.volume.bind(this);
    this.playPause = this.playPause.bind(this);
    this.repeat = this.repeat.bind(this);

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

  repeat(e) {
    this.audio.loop = true;
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
            <span className="next-song"><i className="fas fa-forward"></i></span>
            <span className="play-pause-button" onClick={this.playPause}>{this.state.pPButton}</span>
            <span className="previous-song"><i className="fas fa-backward"></i></span>
          </div>

          <div className="song-progress-container">
            <input type="range" className="song-progress"></input>
          </div>

          <audio loop={false} ref={(audio) => this.audio = audio}/>
        </div>

        <div className="audio-bar-volume">
          <input type="range" onChange={this.volume} className="audio-bar-volume-slider"></input>
        </div>
      </div>
    );
  }
}

export default AudioBar;
