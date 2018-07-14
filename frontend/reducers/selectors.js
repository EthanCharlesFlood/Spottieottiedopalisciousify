export const selectPlaylists = (state) => {
	const playlists = Object.values(state.entities.playlists);
  const userPlaylists = [];
  for (var i = 0; i < playlists.length; i++) {
    if (playlists[i].user_id === state.session.id) {
      userPlaylists.push(playlists[i]);
    }
  }
  return playlists;
};
