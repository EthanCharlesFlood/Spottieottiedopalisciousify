class Api::SearchController < ApplicationController

  def index
    render json: ["Please enter your search query."], status: 422 if params[:query].empty?

    @playlists = Playlists.where()
    @songs = Songs.where()
  end


  private

  def query_string

  end
end
