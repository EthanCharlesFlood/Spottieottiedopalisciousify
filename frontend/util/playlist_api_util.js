export const fetchPlaylists = () => {
	return $.ajax({
		method: "GET",
		url: "/api/playlists",
	});
};

export const fetchPlaylist = (playlistId) => {
	return $.ajax({
		method: "GET",
		url: `/api/playlists/${playlistId}`,
	});
};

export const createPlaylist = (playlist) => {
	return $.ajax({
		method: "POST",
		url: "/api/playlists",
		data: {playlist}
	});
};

export const deletePlaylist = (playlistId) => {
	return $.ajax({
		method: "DELETE",
		url: `/api/playlists/${playlistId}`,
	});
};

export const updatePlaylist = (playlist) => {
	return $.ajax({
		method: "PATCH",
		url: `api/playlists/${playlist.id}`
	});
};

export const addSongToPlaylist = (songs_to_playlist) => {
  return $.ajax({
    method: "POST",
    url: "api/songs_to_playlists",
    data: {songs_to_playlist}
  });
};

export const followPlaylist = (follow) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: {follow}
  });
};

export const removeFollow = (follow) => {
  return $.ajax({
    method: "DELETE",
    url: "api/follows",
    data: {follow}
  });
};
