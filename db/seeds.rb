# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create(username: "Three-Stacks", password: "password", email:"andre@southernplayalisticadillacmuzik.com")
User.create(username: "Ethan-god", password: "password", email: "please dont ever email me")


Artist.destroy_all
Artist.create(artist_name: "Outkast")
Artist.create(artist_name: "Death Grips")
Artist.create(artist_name: "Lightning Bolt")

Album.destroy_all
Album.create(album_name: "Aquemini", artist_id: Artist.first.id)
Album.create(album_name: "The Money Store", artist_id: Artist.second.id)
Album.create(album_name: "Beautiful Rainbow", artist_id: Artist.last.id)

Song.destroy_all
Song.create(song_name: "Hold on, be strong", artist_id: Artist.first.id, album_id: Album.first.id)
Song.create(song_name: "Hacker", artist_id: Artist.second.id, album_id: Album.second.id)
Song.create(song_name: "Dracula Mountain", artist_id: Artist.third.id, album_id: Album.third.id)

Playlist.destroy_all
Playlist.create(playlist_name: "Angry Music", user_id: User.first.id)
Playlist.create(playlist_name: "Not Angry Music", user_id: User.last.id)

SongsToPlaylist.destroy_all
SongsToPlaylist.create(song_id: Song.first.id, playlist_id: Playlist.last.id)
SongsToPlaylist.create(song_id: Song.second.id, playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: Song.last.id, playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: Song.last.id, playlist_id: Playlist.last.id)
