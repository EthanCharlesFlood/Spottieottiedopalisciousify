# == Schema Information
#
# Table name: playlists
#
#  id            :bigint(8)        not null, primary key
#  playlist_name :string           not null
#  creator_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Playlist < ApplicationRecord
	belongs_to :creator,
    foreign_key: :user_id,
		class_name: 'User'
	has_many :songs_to_playlists,
		dependent: :destroy
	has_many :songs, through: :songs_to_playlists

  has_one_attached :image
end
