import React from "react";
import { connect } from 'react-redux';
import PlaylistResults from "./playlist_results";

const mapStateToProps = (state) => {
  return {
    playlist_results: state.entities.playlist_results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPlaylistToQueue: playlist => dispatch(addPlaylistToQueue(playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistResults);
