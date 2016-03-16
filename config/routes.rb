Rails.application.routes.draw do
  root 'pages#home'

  namespace :admin do
    root 'blogs#index'
    resources :portfolio_items
    resources :blogs
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
