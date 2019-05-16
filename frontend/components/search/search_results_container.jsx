import React from "react";
import { connect } from 'react-redux';
import SearchResults from "./search_results";
import { queueSong, pause, play } from '../../actions/audio_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.search.playlists),
    songs: Object.values(state.entities.search.songs),
    playing: state.ui.audio.nowPlaying.playing,
    playingSong: state.ui.audio.songQueue[state.ui.audio.queueSelector],
    queueIndex: state.ui.audio.queueSelector,
    queueLength: state.ui.audio.songQueue.length,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queueSong: (song) => dispatch(queueSong(song)),
    openModal: (payload) => dispatch(openModal(payload)),
    closeModal: () => dispatch(closeModal()),
    pause: () => dispatch(pause()),
    play: () => dispatch(play()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
