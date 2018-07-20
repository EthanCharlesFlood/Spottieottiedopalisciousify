import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import AudioBar from './audio_bar';
import { nextSong,
         previousSong,
         play,
         pause,
         loop,
         bloop,
         reset,
         breset } from './../../actions/audio_actions';

const mapStateToProps = (state) => {
  return {
    playing: state.ui.audio.nowPlaying.playing,
    idx: state.ui.audio.queueSelector,
    playingSong: state.ui.audio.songQueue[state.ui.audio.queueSelector],
    songQueue: state.ui.audio.songQueue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    nextSong: () => dispatch(nextSong()),
    previousSong: () => dispatch(previousSong()),
    loop: () => dispatch(loop()),
    bloop: (idx) => dispatch(bloop(idx)),
    resetQ: () => dispatch(reset()),
    breset: (length) => dispatch(breset(length)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioBar);
