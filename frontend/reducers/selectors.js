export const selectPlaylists = (state) => {
	return Object.values(state.entities.playlists);
};
