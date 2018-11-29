class Api::SearchController < ApplicationController

  def index
    render json: ["Please enter your search query."], status: 422 if params[:query].empty?
    @query = params[:query]


    @playlists = Playlists.where('lower(playlist_name) LIKE ?', "#{@query}")
    @songs = Songs.where('lower(song_name) LIKE ?', "#{@query}")
  end

end
