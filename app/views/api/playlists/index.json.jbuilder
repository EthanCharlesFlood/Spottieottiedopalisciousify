@playlists.each do |pl|
  json.set! pl.id do
    json.extract! pl, :id, :playlist_name
  end
end