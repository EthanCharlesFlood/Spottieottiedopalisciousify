class Api::SongsController < ApplicationController

	def index
    @songs = Song.includes(:artist, :album).all
	end

end
