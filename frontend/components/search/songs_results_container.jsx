import React from "react";
import SongResults from "./song_results";

const mapStateToProps = (state) => {
  return {
    song_results: state.entities.song_results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queueSong: (song) => dispatch(queueSong(song)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongResults);
