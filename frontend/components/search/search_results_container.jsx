import React from "react";
import { connect } from 'react-redux';
import SearchResults from "./search_results";

const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.search.playlists),
    songs: Object.values(state.entities.search.songs),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queueSong: (song) => dispatch(queueSong(song)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
