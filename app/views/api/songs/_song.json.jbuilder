json.extract! song, :id, :song_name
json.songurl url_for(song.file)
json.imgurl url_for(song.album.image)
