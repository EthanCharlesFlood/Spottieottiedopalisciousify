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
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.loop = this.loop.bind(this);
    this.shuffle = this.shuffle.bind(this);

    this.state = {
      duration: 0,
      currentTime: "0:00",
      remainingTime: "0:00",
      progress: "",
      loop: false,
      shuffle: false,
    };
  }



  componentDidMount() {
    this.audio.volume = 0.5;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentSong !== newProps.currentSong ) {
      this.progressBar.value = 0;
      this.playPause();
    }
  }

  playPause() {
    if (!this.props.playingSong) {
      return;
    } else if (this.props.playing === true) {
      this.props.pause();
      this.audio.pause();
    } else {
      this.props.play();
      this.audio.play();
    }
  }


  next() {
    this.progressBar.value = 0;
    if ((this.props.idx > this.props.songQueue.length) && this.state.loop) {
      this.props.loop();
    } else if (this.props.idx < (this.props.songQueue.length - 1)) {
      this.props.nextSong();
    } else {
      this.setState({ remainingTime: "0:00" })
      this.props.resetQ();
    }
  }

  previous() {
    this.progressBar.value = 0;
    if ((this.props.idx === 0) && this.state.loop) {
      this.props.bloop((this.props.songQueue.length - 1));
    } else if (this.props.idx === 0) {
      this.props.breset((this.props.songQueue.length - 1));
    } else if (this.props.idx < this.props.songQueue.length) {
      this.props.previousSong();
    }
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

  loop() {
    if ( !this.state.loop) {
      document.getElementById("loop").style.color = "green";
      this.setState({ loop: true });
    } else {
      document.getElementById("loop").style.color = "white";
      this.setState({ loop: false });
    }
  }

  shuffle() {
    if ( !this.state.loop ) {
      this.setState({ shuffle: false }, () => {
        document.getElementById("loop").style.color = "green";
      });
    } else {
      this.setState({ shuffle: true }, () => {
        document.getElementById("loop").style.color = "white";
      });
    }
  }

  updateTime(e) {
    let remainingTime = this.parseTime(this.audio.duration - this.audio.currentTime);
    if (remainingTime === "NaN:NaN") {
      remainingTime = "0:00";
    }
    this.setState({
      currentTime: this.parseTime(Math.floor(this.audio.currentTime)),
      remainingTime: remainingTime,
      progress: ((this.audio.currentTime / this.audio.duration) * 100)
    });
  }

  render() {
    let info;
    let song = "";
    if (this.props.playingSong) {
      info = <div className="now-playing-info">
              <img src={this.props.playingSong.imgurl} className="now-playing-img" />
              <span className="now-playing-title">{this.props.playingSong.song_name}</span>
            </div>;
      song = this.props.playingSong.songurl;
    } else {
      info = <div className="now-playing-info" />;
    }

    let pPButton;
    if (this.props.playing === true) {
      pPButton = <i className="far fa-pause-circle"></i>;
    } else {
      pPButton = <i className="far fa-play-circle"></i>;
    }

    let time = this.state.remainingTime;
    if (time === "NaN:NaN") {
      time = "0:00"
    }

    return (
      <div className="audio-bar-container">

        {info}

        <div className="audio-player">

          <div className="audio-player-controls">


            <span className="next-song" onClick={this.previous}><i className="fas fa-backward" /></span>

            <span className="play-pause-button" onClick={this.playPause}>{pPButton}</span>

            <span className="previous-song" onClick={this.next}><i className="fas fa-forward" /></span>


          </div>

          <div className="song-progress-container">
            <span className="song-progress-time" >{this.state.currentTime}</span>

            <input
              type="range"
              onChange={this.selectTime}
              ref={(progressBar => this.progressBar = progressBar)}
              min="0"
              className="song-progress"
              max={this.state.duration} />

            <span className="song-remaining-time">{time}</span>
          </div>

          <audio loop={false}
                 autoPlay={this.props.playing}
                 onLoadedData={this.fetchDuration}
                 src={song}
                 onEnded={this.next}
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
// <span id="loop" className="loop" onClick={this.loop}><i className="fas fa-redo-alt"></i></span>
// <span id="shuffle" className="shuffle" onClick={this.shuffle}><i className="fas fa-random"></i></span>

export default AudioBar;
