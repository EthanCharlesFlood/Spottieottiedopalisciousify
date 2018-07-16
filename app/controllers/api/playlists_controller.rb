class Api::PlaylistsController < ApplicationController

	def create
		@playlist = Playlist.new(playlists_params)
		if @playlist.save
			render "api/playlists/show"
		else
			render json: @playlist.errors.full_messages, status: 422
		end
	end

	def show
		@playlist = Playlist.includes(:songs, :creator).find(params[:id])
	end

	def index
		@playlists = Playlist.all
	end

	def update
		@playlist = Playlist.find(params[:id]).includes(:songs)

		if @playlist.update(playlists_params)
			render "api/playlists/show"
		else
			render json: @playlist.errors.full_messages, status: 422
		end
	end

	def destroy
		@playlist = Playlist.find(params[:id])
		@playlist.destroy
    render json: params[:id]
	end

	private

	def playlists_params
		params.require(:playlist).permit(:playlist_name, :user_id)
	end

end
