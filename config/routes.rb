Rails.application.routes.draw do
  
  resources :blocks
  resources :users
  
  get '/me', to: 'users#show'
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
