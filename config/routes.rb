Rails.application.routes.draw do
  
  resources :blocks
  resources :users, only[:create]
 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
end
