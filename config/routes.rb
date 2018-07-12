Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
		resources :playlists, except: [:new, :edit]
		resources :songs, only: [:show]
		resources :songs_to_playlists, only: [:create, :destroy]
  end

  root "static_pages#root"

end
