Rails.application.routes.draw do
  resources :planets
  resources :films
  resources :people

  devise_for :users,
  controllers: {
    registrations: :registrations,
    sessions: :sessions
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
