class Api::FollowsController < ApplicationController

  	def create
  		follow = Follow.new(follow_params)
  		if follow.save
        render json: "api/playlists/show"
  		else
  			render json: follow.errors.full_messages, status: 422
  		end
  	end


  	def remove
  		follow = Follow.includes(:playlist).find_by(follow_params)
      playlist_id = follow.playlist_id
      @playlist = follow.playlist
  		follow.destroy
      render "api/playlists/show"
  	end

  	private

  	def follow_params
  		params.require(:follow).permit(:playlist_id, :user_id)
  	end

end
