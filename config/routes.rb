Rails.application.routes.draw do
  root 'pages#home'
  # Resources gives you portfolio_items/show and index but overrides the path to 'work'
  # Resources is for a thing that has a lot/ it's gonna be in the db
  resources :case_studies, only: [:show, :index], path: 'work', param: :slug
  # API route for video interactions
  resources :interactions, only: [:index, :create]

  # Custom routing: when you go to /contact, contacts#new handles the request
  get '/contact', to: 'contacts#new'
  post '/contacts', to: 'contacts#create'
  get '/about', to: 'pages#about'

  namespace :admin do
    root 'case_studies#index'
    resources :case_studies, param: :slug do
      resources :code_highlights
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
  if Rails.env.development?
    mount Localtower::Engine, at: "localtower"
  end
end
