class Api::SongsToPlaylistsController < ApplicationController

	def create
		stp = SongsToPlaylist.new(stp_params)

		if stp.save
			render "api/songs"
		else
			render json: stp.errors.full_messages, status: 422
		end
	end


	def destroy
		stp = SongsToPlaylist.find(params[:id])
		stp.destroy
	end

	private

	def stp_params
		params.require(:songs_to_playlist).permit(:playlist_id, :song_id)
	end

end
