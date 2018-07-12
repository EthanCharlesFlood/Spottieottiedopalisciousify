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
	belongs_to :user
	has_many :songs_to_playlists,
		inverse_of: :song_to_playlists
		dependent: :destroy
	has_many :songs, through: :song_to_playlists

end
