import React from "react";
import PlaylistResults from "./playlist_results";

const mapStateToProps = (state) => {
  return {
    playlist_results: playlist_results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPlaylistToQueue: playlist => dispatch(addPlaylistToQueue(playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistResults);
