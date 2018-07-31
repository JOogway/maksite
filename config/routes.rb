Rails.application.routes.draw do
  devise_for :admins
  devise_for :users, :controllers => { registrations: 'registrations' }
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :protocol => "http://" }
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :subdomain => "" }
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
  get '/sign_in' => 'sessions#new'
  post '/sign_in' => 'sessions#create'
  get '/sign_out' => 'sessions#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
