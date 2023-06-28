Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :bars, only: [:index, :show]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
  end
  
  get '$path', to: "static_pages#frontend_index"
end
