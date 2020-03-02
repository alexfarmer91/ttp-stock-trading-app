Rails.application.routes.draw do
  
  resources :trades
  resources :portfolio_items
  resources :login, only: [:create]
  resources :users

  get "/tests", to: "tests#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
