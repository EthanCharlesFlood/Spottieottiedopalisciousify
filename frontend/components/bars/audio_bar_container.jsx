import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import AudioBar from './audio_bar';
import { nextSong,
         previousSong,
         play,
         pause } from './../../actions/audio_actions';

const mapStateToProps = (state) => {
  return {
    playing: state.ui.audio.playing,
    playingSong: state.ui.audio.songQueue[0],
    songQueue: state.ui.audio.songQueue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    nextSong: () => dispatch(nextSong()),
    previousSong: () => dispatch(previousSong()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioBar);
