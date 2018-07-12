json.playlist do
	json.extract! @playlist, :id, :playlist_name
end

json.songs do
	@songs.each do |song|
		json.set! song.id do
			json.partial! 'api/songs/song', song: song
		end
	end
end
