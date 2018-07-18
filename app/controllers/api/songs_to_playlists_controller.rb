class Api::SongsToPlaylistsController < ApplicationController

	def create
		songs_to_playlist = SongsToPlaylist.new(stp_params)

		if songs_to_playlist.save
      render json: "api/songs"
		else
			render json: stp.errors.full_messages, status: 422
		end
	end


	def remove
		stp = SongsToPlaylist.where(stp_params)
    song_id = stp[0].song_id
		stp.destroy_all
    render json: {song_id: song_id}
	end

	private

	def stp_params
		params.require(:songs_to_playlist).permit(:playlist_id, :song_id)
	end

end
