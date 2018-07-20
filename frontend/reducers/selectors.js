export const selectPlaylists = (state) => {
	const playlists = Object.values(state.entities.playlists);
  const userPlaylists = [];
  for (var i = 0; i < playlists.length; i++) {
    if (playlists[i].user_id === state.session.id) {
      userPlaylists.push(playlists[i]);
    }
  }
  return userPlaylists;
};


export const selectPlaylist = (state, id) => {
  return state.entities.playlists[id] || {song_ids:[]};
};

export const selectPlaylistSongs = (state, playlist) => {
  if (playlist.song_ids) {
    return playlist.song_ids.map(song_id => {
      return state.entities.songs[song_id];
    });
  } else {
    return [];
  }
};

export const selectFollowedPlaylists = (state) => {
  const currentUser = state.entities.users[state.session.id];
  if ( state.entities.playlists ) {
    const followedPlaylists = currentUser.followed_playlist_ids.map(id => {
      return state.entities.playlists[id];
    });
    return followedPlaylists;
  } else {
    return [];
  }
};
