# == Schema Information
#
# Table name: songs_to_playlists
#
#  id          :bigint(8)        not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SongsToPlaylist < ApplicationRecord
  validates :song, uniqueness: { scope: :playlist }

	belongs_to :song,
		inverse_of: :songs_to_playlists
	belongs_to :playlist,
		inverse_of: :songs_to_playlists

end
