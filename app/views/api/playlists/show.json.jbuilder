json.playlist do
	json.extract! @playlist, :id, :playlist_name, :song_ids, :user_id
end

json.songs do
	@playlist.songs.each do |song|
		json.set! song.id do
			json.partial! 'api/songs/song', song: song
		end
	end
end
