Rails.application.routes.draw do
  
  resources :memories
  resources :details
  resources :dreams
  resources :lists
  resources :users
  resources :images, only: [:create, :index]

  get "/authorize", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  patch "/sendlist/:id", to: "lists#email_list"
  get "/completeddreams", to: "dreams#show_completed"
  # post "/pics", to: "memories#upload_img"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
