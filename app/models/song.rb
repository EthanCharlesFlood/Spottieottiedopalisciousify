# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  song_name  :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
	validates :song_name, presence: true
	belongs_to :artist
	belongs_to :album
	has_many :songs_to_playlists,
		inverse_of: :song,
		dependent: :destroy
	has_many :playlists, through: :song_to_playlists

end
