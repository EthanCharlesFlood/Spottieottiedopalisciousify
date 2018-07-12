# == Schema Information
#
# Table name: artists
#
#  id          :bigint(8)        not null, primary key
#  artist_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ApplicationRecord
	has_many :albums
	has_many :songs

end
