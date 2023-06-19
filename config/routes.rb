Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :edit, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :bars, only: [:index, :show]
  end
end
