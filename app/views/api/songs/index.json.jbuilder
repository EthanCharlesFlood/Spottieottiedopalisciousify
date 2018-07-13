@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_name
  end
end
