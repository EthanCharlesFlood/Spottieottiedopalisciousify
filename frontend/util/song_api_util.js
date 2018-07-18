export const fetchSongs = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/api/songs"
    })
  );
};

export const fetchSong = (songId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/songs/${songId}`
    })
  );
};

export const removeSongToPlaylist = (songs_to_playlist) => {
  return $.ajax({
    method: "DELETE",
    url: "api/songs_to_playlists",
    data: {songs_to_playlist}
  });
};
