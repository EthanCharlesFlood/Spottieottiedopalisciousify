import React from "react";
import { connect } from 'react-redux';
import SearchResults from "./search_results";

const mapStateToProps = (state) => {
  return {
    playlist_results: state.entities.playlist_results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPlaylistToQueue: playlist => dispatch(addPlaylistToQueue(playlist)),
    queueSong: (song) => dispatch(queueSong(song)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
