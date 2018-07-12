class Api::PlaylistsController < ApplicationRecord

	def create
		@playlist = Playlist.new(playlists_params)

		if @playlist.save
			render "api/playlists/show"
		else
			render json: @playlist.errors.full_messages, status: 422
		end
	end

	def show
		@playlist = Playlist.find(params[:id]).includes(:songs)
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
	end

	private

	def playlists_params
	end

end
