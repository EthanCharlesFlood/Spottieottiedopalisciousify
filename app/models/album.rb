# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  album_name :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
	belongs_to :artist
	has_many :songs
	
end
