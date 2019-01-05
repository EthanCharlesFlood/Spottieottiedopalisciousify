@playlists.each do |playlist|
  json.playlists do
    json.set! playlist.id do
      json.extract! playlist, :id, :playlist_name, :user_id
      json.imgurl url_for(playlist.image)
    end
  end
end

@songs.each do |song|
  json.songs do
    json.set! song.id do
      json.extract! song, :id, :song_name, :duration
      json.artist song.artist
      json.album song.album.album_name
      json.arist song.artist.artist_name
      json.songurl url_for(song.file)
      json.imgurl url_for(song.album.image)
    end
  end
end
