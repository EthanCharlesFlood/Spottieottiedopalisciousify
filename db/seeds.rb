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
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Ethan-min.jpeg')
user.image.attach(io: file, filename:'Ethan-min.jpeg')
user.save!

user = User.new(username: "Ethan", password: "password", email: "please dont ever email me")
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Ethan-min.jpeg')
user.image.attach(io: file, filename:'Ethan-min.jpeg')
user.save!

user = User.new(username: "BigBoi", password: "password", email: "daddyfatstacks@gmail.com")
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Ethan-min.jpeg')
user.image.attach(io: file, filename:'Ethan-min.jpeg')
user.save!

user = User.new(username: "Uncle Dennis", password: "gimmietheloot", email: "laorbust@gmail.com")
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Ethan-min.jpeg')
user.image.attach(io: file, filename:'Ethan-min.jpeg')
user.save!

user = User.new(username: "Tim Allen", password: "password", email: "tooltime@gmail.com")
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Ethan-min.jpeg')
user.image.attach(io: file, filename:'Ethan-min.jpeg')
user.save!


Artist.destroy_all
artist = Artist.new(artist_name: "Outkast")
artist.save!



Album.destroy_all

album = Album.new(album_name: "Aquemini", artist_id: Artist.first.id)
albm_img = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/220px-AqueminiOutKast.jpg')
album.image.attach(io: albm_img, filename:'20px-AqueminiOutKast.jpg')
album.save!

album = Album.new(album_name: "ATLiens", artist_id: Artist.first.id)
albm_img = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/Outkast-atliens.jpg')
album.image.attach(io: albm_img, filename:'Outkast-atliens.jpg')
album.save!
# album = Album.new(album_name: "Southernplayalisticadillacmuzik", artist_id: Artist.first.id)
# album.save!


Song.destroy_all


song = Song.new(song_name: "Hold on, be strong", artist_id: Artist.first.id, album_id: Album.first.id, duration: 71)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/01+Hold+On+Be+Strong.mp3')
song.file.attach(io: file, filename:'01 Hold On Be Strong.mp3')
song.save!

song = Song.new(song_name: "Return of the 'G'", artist_id: Artist.first.id, album_id: Album.first.id, duration: 288)
file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/02+Return+of+the+'G'.mp3")
song.file.attach(io: file, filename:"02 Return of the 'G'.mp3")
song.save!

song = Song.new(song_name: "Skew it on the Bar-B", artist_id: Artist.first.id, album_id: Album.first.id, duration: 324)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/03+Skew+it+on+the+Bar-B.mp3')
song.file.attach(io: file, filename:'03 Skew it on the Bar-B.mp3')
song.save!

song = Song.new(song_name: "Aquemini", artist_id: Artist.first.id, album_id: Album.first.id, duration: 194)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/04+Aquemini.mp3')
song.file.attach(io: file, filename:'04 Aquemini.mp3')
song.save!

song = Song.new(song_name: "Synthesizer", artist_id: Artist.first.id, album_id: Album.first.id, duration: 319)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/05+Synthesizer.mp3')
song.file.attach(io: file, filename:'05 Synthesizer.mp3')
song.save!

song = Song.new(song_name: "Slump", artist_id: Artist.first.id, album_id: Album.first.id, duration: 311)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/06+Slump.mp3')
song.file.attach(io: file, filename:'06 Slump.mp3')
song.save!

song = Song.new(song_name: "West Savannah", artist_id: Artist.first.id, album_id: Album.first.id, duration: 308)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/07+West+Savannah.mp3')
song.file.attach(io: file, filename:'07 West Savannah.mp3')
song.save!

song = Song.new(song_name: "Rosa Parks", artist_id: Artist.first.id, album_id: Album.first.id, duration: 243)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/08+Rosa+Parks.mp3')
song.file.attach(io: file, filename:'08 Rosa Parks.mp3')
song.save!

song = Song.new(song_name: "Da Art of Storytellin' (Pt. 1)", artist_id: Artist.first.id, album_id: Album.first.id, duration: 222)
file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/09+Da+Art+of+Storytellin'+(Pt.+1).mp3")
song.file.attach(io: file, filename:"09 Da Art of Storytellin (Pt. 1).mp3")
song.save!

song = Song.new(song_name: "Da Art of Storytellin' (Pt. 2)", artist_id: Artist.first.id, album_id: Album.first.id, duration: 167)
file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/10+Da+Art+of+Storytellin'+(Pt.+2).mp3")
song.file.attach(io: file, filename:"10 Da Art of Storytellin' (Pt. 2).mp3")
song.save!

song = Song.new(song_name: "Mamacita", artist_id: Artist.first.id, album_id: Album.first.id, duration: 352)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/11+Mamacita.mp3')
song.file.attach(io: file, filename:'11 Mamacita.mp3')
song.save!

song = Song.new(song_name: "Spottieottiedopaliscious", artist_id: Artist.first.id, album_id: Album.first.id, duration: 426)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/12+Spottieottiedopaliscious.mp3')
song.file.attach(io: file, filename:'12 Spottieottiedopaliscious.mp3')
song.save!

song = Song.new(song_name: "Y'all Scared", artist_id: Artist.first.id, album_id: Album.first.id, duration: 289)
file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/13+Y'all+Scared.mp3")
song.file.attach(io: file, filename:"13 Y'all Scared.mp3")
song.save!

song = Song.new(song_name: "Nathaniel", artist_id: Artist.first.id, album_id: Album.first.id, duration: 69)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/14+Nathaniel.mp3')
song.file.attach(io: file, filename:'14 Nathaniel.mp3')
song.save!

song = Song.new(song_name: "Liberation", artist_id: Artist.first.id, album_id: Album.first.id, duration: 525)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/15+Liberation.mp3')
song.file.attach(io: file, filename:'15 Liberation.mp3')
song.save!

song = Song.new(song_name: "Chonkyfire", artist_id: Artist.first.id, album_id: Album.first.id, duration: 370)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/16+Chonkyfire.mp3')
song.file.attach(io: file, filename:'16 Chonkyfire.mp3')
song.save!





song = Song.new(song_name: "You May Die (Intro)", artist_id: Artist.first.id, album_id: Album.second.id, duration: 75)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/01+-+You+May+Die++(Intro).mp3')
song.file.attach(io: file, filename:'01 - You May Die (Intro).mp3')
song.save!

song = Song.new(song_name: "Two Dope Boyz (In a Cadillac)", artist_id: Artist.first.id, album_id: Album.second.id, duration: 161)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/02+-+Two+Dope+Boyz+(In+A+Cadillac).mp3')
song.file.attach(io: file, filename:'02 - Two Dope Boyz (In A Cadillac).mp3')
song.save!

song = Song.new(song_name: "ATLiens", artist_id: Artist.first.id, album_id: Album.second.id, duration: 230)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/03+-+ATLiens.mp3')
song.file.attach(io: file, filename:'03 - ATLiens.mp3')
song.save!

# song = Song.new(song_name: "Wheelz of Steel", artist_id: Artist.first.id, album_id: Album.second.id)
# file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/04+-+Wheelz+Of+Steel.mp3')
# song.file.attach(io: file, filename:'04 - Wheelz Of Steel.mp3')
# song.save!

song = Song.new(song_name: "Jazzy Belle", artist_id: Artist.first.id, album_id: Album.second.id, duration: 251)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/05+-+Jazzy+Belle.mp3')
song.file.attach(io: file, filename:'05 - Jazzy Belle.mp3')
song.save!

song = Song.new(song_name: "Elevators (Me & You)", artist_id: Artist.first.id, album_id: Album.second.id, duration: 265)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/06+-+Elevators+(Me+%26+You).mp3')
song.file.attach(io: file, filename:'06 - Elevators (Me & You).mp3')
song.save!

song = Song.new(song_name: "Ova da Wudz", artist_id: Artist.first.id, album_id: Album.second.id, duration: 227)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/07+-+Ova+Da+Wudz.mp3')
song.file.attach(io: file, filename:'07 - Ova Da Wudz.mp3')
song.save!

song = Song.new(song_name: "Babylon", artist_id: Artist.first.id, album_id: Album.second.id, duration: 264)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/08+-+Babylon.mp3')
song.file.attach(io: file, filename:'08 - Babylon.mp3')
song.save!

song = Song.new(song_name: "Wailin", artist_id: Artist.first.id, album_id: Album.second.id, duration: 118)
file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/09+-+Wailin'.mp3")
song.file.attach(io: file, filename:"09 - Wailin'.mp3")
song.save!

song = Song.new(song_name: "Mainstream", artist_id: Artist.first.id, album_id: Album.second.id, duration: 318)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/10+-+Mainstream.mp3')
song.file.attach(io: file, filename:'10 - Mainstream.mp3')
song.save!

song = Song.new(song_name: "Decatur Psalm", artist_id: Artist.first.id, album_id: Album.second.id, duration: 238)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/11+-+Decatur+Psalm.mp3')
song.file.attach(io: file, filename:'11 - Decatur Psalm.mp3')
song.save!

song = Song.new(song_name: "Millenium", artist_id: Artist.first.id, album_id: Album.second.id, duration: 188)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/12+-+Millennium.mp3')
song.file.attach(io: file, filename:'12 - Millennium.mp3')
song.save!

song = Song.new(song_name: "E.T. (Extraterrestrial)", artist_id: Artist.first.id, album_id: Album.second.id, duration: 186)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/13+-+E.T.+(Extraterrestrial).mp3')
song.file.attach(io: file, filename:'13 - E.T. (Extraterrestrial).mp3')
song.save!

song = Song.new(song_name: "13th Floor / Growing Old", artist_id: Artist.first.id, album_id: Album.second.id, duration: 410)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/14+-+13th+Floor+%2C+Growing+Old.mp3')
song.file.attach(io: file, filename:'14 - 13th Floor , Growing Old.mp3')
song.save!

song = Song.new(song_name: "Elevators (ONP 86 Mix)", artist_id: Artist.first.id, album_id: Album.second.id, duration: 277)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/15+-+Elevators+(ONP+86+Mix).mp3')
song.file.attach(io: file, filename:'15 - Elevators (ONP 86 Mix).mp3')
song.save!



# song = Song.new(song_name: "Peaches (Intro)", artist_id: Artist.first.id, album_id: Album.third.id)
# file = EzDownload.open("https://s3.amazonaws.com/spottieottiedopaliscious-prod/01+-+Peaches+(Intro).mp3")
# user.image.attach(io: file, filename:'01 - Peaches (Intro).mp3')
# song.save!
# song = Song.new(song_name: "Myintotoletuknow", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Ain't No Thang", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Welcome to Atlanta (Interlude)", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Southernplayalisticadillacmuzik", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Call of da Wild", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Player's Ball", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Claimin' True", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Club Donkey Ass (Interlude)", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Funky Ride", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Flim Flam (Interlude)", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Git up, Get Out", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "True Dat", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Crumbin' Erb'", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Hootie Hoo", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "D.E.E.P.", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!
# song = Song.new(song_name: "Player's Ball (Reprise)", artist_id: Artist.first.id, album_id: Album.third.id)
# song.save!

Playlist.destroy_all

playlist = Playlist.new(playlist_name: "Definately Not Outkast", user_id: User.first.id)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/speakerbox.jpg')
playlist.image.attach(io: file, filename:'speakerbox.jpg')
playlist.save!

playlist = Playlist.new(playlist_name: "Not Outkast", user_id: User.second.id)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/souther.jpg')
playlist.image.attach(io: file, filename:'souther.jpeg')
playlist.save!

playlist = Playlist.new(playlist_name: "Hello World", user_id: User.third.id)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/stankonia.jpg')
playlist.image.attach(io: file, filename:'stankonia.jpg')
playlist.save!

playlist = Playlist.new(playlist_name: "Outkast", user_id: User.fourth.id)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/aquemini.jpg')
playlist.image.attach(io: file, filename:'aquemini.jpg')
playlist.save!

playlist = Playlist.new(playlist_name: "Fleetwood Mac", user_id: User.last.id)
file = EzDownload.open('https://s3.amazonaws.com/spottieottiedopaliscious-prod/FMacRumours.png')
playlist.image.attach(io: file, filename:'FMacRumours.png')
playlist.save!

SongsToPlaylist.destroy_all

def generate_song_ids
  song_ids = (Song.first.id...Song.last.id).to_a
  song_ids.shuffle[0...5]
end

songs = generate_song_ids
SongsToPlaylist.create(song_id: songs[0], playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: songs[1], playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: songs[2], playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: songs[3], playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: songs[4], playlist_id: Playlist.first.id)
SongsToPlaylist.create(song_id: songs[5], playlist_id: Playlist.first.id)

songs = generate_song_ids
SongsToPlaylist.create(song_id: songs[0], playlist_id: Playlist.second.id)
SongsToPlaylist.create(song_id: songs[1], playlist_id: Playlist.second.id)
SongsToPlaylist.create(song_id: songs[2], playlist_id: Playlist.second.id)
SongsToPlaylist.create(song_id: songs[3], playlist_id: Playlist.second.id)
SongsToPlaylist.create(song_id: songs[4], playlist_id: Playlist.second.id)
SongsToPlaylist.create(song_id: songs[5], playlist_id: Playlist.second.id)

songs = generate_song_ids
SongsToPlaylist.create(song_id: songs[0], playlist_id: Playlist.third.id)
SongsToPlaylist.create(song_id: songs[1], playlist_id: Playlist.third.id)
SongsToPlaylist.create(song_id: songs[2], playlist_id: Playlist.third.id)
SongsToPlaylist.create(song_id: songs[3], playlist_id: Playlist.third.id)
SongsToPlaylist.create(song_id: songs[4], playlist_id: Playlist.third.id)
SongsToPlaylist.create(song_id: songs[5], playlist_id: Playlist.third.id)

songs = generate_song_ids
SongsToPlaylist.create(song_id: songs[0], playlist_id: Playlist.fourth.id)
SongsToPlaylist.create(song_id: songs[1], playlist_id: Playlist.fourth.id)
SongsToPlaylist.create(song_id: songs[2], playlist_id: Playlist.fourth.id)
SongsToPlaylist.create(song_id: songs[3], playlist_id: Playlist.fourth.id)
SongsToPlaylist.create(song_id: songs[4], playlist_id: Playlist.fourth.id)
SongsToPlaylist.create(song_id: songs[5], playlist_id: Playlist.fourth.id)

songs = generate_song_ids
SongsToPlaylist.create(song_id: songs[0], playlist_id: Playlist.fifth.id)
SongsToPlaylist.create(song_id: songs[1], playlist_id: Playlist.fifth.id)
SongsToPlaylist.create(song_id: songs[2], playlist_id: Playlist.fifth.id)
SongsToPlaylist.create(song_id: songs[3], playlist_id: Playlist.fifth.id)
SongsToPlaylist.create(song_id: songs[4], playlist_id: Playlist.fifth.id)
SongsToPlaylist.create(song_id: songs[5], playlist_id: Playlist.fifth.id)



Follow.destroy_all
Follow.create(user_id: User.first.id, playlist_id: Playlist.first.id)
Follow.create(user_id: User.first.id, playlist_id: Playlist.last.id)
