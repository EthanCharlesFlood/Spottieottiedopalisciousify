import React from 'react';


class AudioBar extends React.Component {
  constructor(props) {
    super(props);
    this.volume = this.volume.bind(this);
    this.playPause = this.playPause.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.fetchDuration = this.fetchDuration.bind(this);
    this.updateTime = this.updateTime.bind(this);
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
      duration: 0,
      currentTime: 0,
      remainingTime: null,
      progress: 0
    };
  }



  componentDidMount() {
    this.audio.volume = 0.5;
    if (this.state.playingSong) {
      this.setState({
        remainingTime: (this.audio.duration - this.audio.currentTime),
        currentTime: this.audio.currentTime,
      });
    }
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

  fetchDuration(e) {
    const duration = this.parseTime(e.currentTarget.duration);
    const timeRemaining = this.parseTime(e.currentTarget.duration - this.state.currentTime);
    this.setState({ remainingTime: timeRemaining, duration: duration });
  }

  selectTime(e) {
    let progress = e.currentTarget.value;
    let time = e.currentTarget.value / 100;
    time = this.audio.duration * time;
    this.setState({ progress: progress });
    this.audio.currentTime = time;
  }

  parseTime(time) {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    const parsedTime = minutes + ":" + seconds;
    return parsedTime;
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

  handleEnd(e) {
    if (this.props.songQueue.length > 1) {
      return this.props.nextSong();
    }
  }

  updateTime(e) {
    this.setState({
      currentTime: this.parseTime(Math.floor(this.audio.currentTime)),
      remainingTime: this.parseTime(this.audio.duration - this.audio.currentTime),
      progress: ((this.audio.currentTime / this.audio.duration) * 100)
    });
  }

  render() {
    let songName = "";
    let songImg = "";
    if (this.state.playingSong) {
      songName = this.state.playingSong.song_name;
      songImg = this.state.playingSong.imgurl;
    }
    return (
      <div className="audio-bar-container">

        <div className="now-playing-info">
          <img src={songImg} className="now-playing-img" />
          <span className="now-playing-title">{songName}</span>
        </div>

        <div className="audio-player">

          <div className="audio-player-controls">
            <span className="next-song" onClick={this.props.nextSong}><i className="fas fa-backward" /></span>

            <span className="play-pause-button" onClick={this.playPause}>{this.state.pPButton}</span>

            <span className="previous-song" onClick={this.props.previousSong}><i className="fas fa-forward" /></span>
          </div>

          <div className="song-progress-container">
            <span className="song-progress-time" >{this.state.currentTime}</span>

            <input
              type="range"
              onChange={this.selectTime}
              value={this.state.progress}
              min="0"
              className="song-progress"
              max={this.state.duration} />

            <span className="song-remaining-time">{this.state.remainingTime}</span>
          </div>

          <audio loop={false}
                 onLoadedData={this.fetchDuration}
                 src={this.state.playingSong}
                 onEnded={this.handleEnd}
                 ref={(audio) => this.audio = audio}
                 onTimeUpdate={this.updateTime} />
        </div>

        <div className="audio-bar-volume">
          <i className="fas fa-volume-up"></i>
          <input type="range" onChange={this.volume} className="audio-bar-volume-slider"></input>
        </div>
      </div>
    );
  }
}
export default AudioBar;
