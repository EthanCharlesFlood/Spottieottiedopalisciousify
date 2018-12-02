@playlists.each do |playlist|
  json.set! pl.id do
    json.extract! pl, :id, :playlist_name, :user_id
    json.imgurl url_for(pl.image)
  end
end

@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_name
    json.artist song.artist
    json.album song.album.album_name
    json.arist song.artist.artist_name
    json.songurl url_for(song.file)
    json.imgurl url_for(song.album.image)
  end
end
