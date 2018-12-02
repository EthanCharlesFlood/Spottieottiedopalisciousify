class Api::SearchController < ApplicationController

  def create
    render json: ["Please enter your search query."], status: 422 if params[:query].empty?
    @query = params[:query]


    @playlists = Playlist.where('lower(playlist_name) LIKE ?', "#{@query}%")
    @songs = Song.where('lower(song_name) LIKE ?', "#{@query}%")
  end

end
