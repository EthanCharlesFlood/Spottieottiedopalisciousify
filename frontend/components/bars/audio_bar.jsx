import React from 'react';


class AudioBar extends React.Component {







  render() {
    return (
      <div className="audio-bar-container">
        <audio className="audio-player">
          <span className="play-pause-button"></span>
          <span className="volume-slider"></span>
          <span className="song-progress"></span>
          <span className="next-song"></span>
          <span className="previous-song"></span>
        </audio>
      </div>
    );
  }
}

export default AudioBar;
