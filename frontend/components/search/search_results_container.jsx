import React from "react";
import { connect } from 'react-redux';
import SearchResults from "./search_results";
import { queueSong } from '../../actions/audio_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.search.playlists),
    songs: Object.values(state.entities.search.songs),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queueSong: (song) => dispatch(queueSong(song)),
    openModal: (payload) => dispatch(openModal(payload)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
