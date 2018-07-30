Rails.application.routes.draw do
  devise_for :users
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :protocol => "http://" }
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :subdomain => "" }
  devise_for :admins
  get 'articles/new'

  root 'home#home'

  resources :articles do
    resources :comments
  end



  get 'links/links'

  get 'about/about'

  get 'contact/contact'

  get 'contact/form'

  get 'projects/projects'

  get 'news/news'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
