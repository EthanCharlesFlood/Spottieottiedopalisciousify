Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
		resources :playlists, except: [:new, :edit]
		resources :songs, only: [:show, :index]
		resources :songs_to_playlists, only: [:create]
    resources :follows, only: [:create]
    get "/search", to: "search#create"
    delete "/songs_to_playlists", to: 'songs_to_playlists#remove'
    delete "/follows", to: 'follows#remove'
  end

  root "static_pages#root"

end

#route on song or playlist controller
