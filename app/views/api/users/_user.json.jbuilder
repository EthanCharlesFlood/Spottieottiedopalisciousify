json.extract! user, :id, :username, :followed_playlists, :followed_playlist_ids
json.imageurl url_for(user.image)
