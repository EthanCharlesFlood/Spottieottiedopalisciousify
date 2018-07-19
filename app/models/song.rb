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
		dependent: :destroy
	has_many :playlists, through: :songs_to_playlists

  has_one_attached :file
  has_one_attached :image
end
