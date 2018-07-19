# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# model_instance = SampleModel.new(title: 'A Good Title')
# file = EzDownload.open('https://s3.amazonaws.com/some-bucket/some-file.jpg')
# model_instance.image.attach(io: file, filename: 'some-file.jpg')
# model_instance.save!




User.destroy_all
user = User.new(username: "Three-Stacks", password: "password", email:"andre@southernplayalisticadillacmuzik.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "Ethan", password: "password", email: "please dont ever email me")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "DogMan", password: "password", email: "dogman@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "BigBoi", password: "password", email: "daddyfatstacks@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "Person", password: "password", email: "person@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "Uncle Dennis", password: "gimmietheloot", email: "laorbust@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "YHVH", password: "password", email: "dontspeakit@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!
user = User.new(username: "Tim Allen", password: "password", email: "tooltime@gmail.com")
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-dev/MK1KyC5romqVb5XSQspoC7TE')
# user.image.attach(io: file, filename:'20px-AqueminiOutKast.jpg')
user.save!


Artist.destroy_all
Artist.create(artist_name: "Outkast")
Artist.create(artist_name: "Death Grips")
Artist.create(artist_name: "Lightning Bolt")
Artist.create(artist_name: "Fleetwood Mac")
Artist.create(artist_name: "Do Make Say Think")
Artist.create(artist_name: "Skrillex")
Artist.create(artist_name: "Huey Lewis and the News")


Album.destroy_all
Album.create(album_name: "Aquemini", artist_id: Artist.first.id)
Album.create(album_name: "Government Plates", artist_id: Artist.second.id)
Album.create(album_name: "Beautiful Rainbow", artist_id: Artist.third.id)


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


Follow.destroy_all
Follow.create(user_id: User.first.id, playlist_id: Playlist.first.id)
Follow.create(user_id: User.first.id, playlist_id: Playlist.last.id)
