Rails.application.routes.draw do
  root 'pages#home'
  # Resources gives you portfolio_items/show and index but overrides the path to 'work'
  # Resources is for a thing that has a lot/ it's gonna be in the db
  resources :portfolio_items, only: [:show, :index], path: 'work'
  # API route for video interactions
  resources :interactions, only: [:index, :create]

  # Custom routing: when you go to /contact, contacts#new handles the request
  get '/contact', to: 'contacts#new'
  post '/contacts', to: 'contacts#create'
  get '/about', to: 'pages#about'

  namespace :admin do
    root 'portfolio_items#index'
    resources :portfolio_items
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
  if Rails.env.development?
    mount Localtower::Engine, at: "localtower"
  end
end
