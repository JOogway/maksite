Rails.application.routes.draw do

  devise_for :admins, path: 'admins', controllers: { sessions: "users/sessions",registrations: "users/registrations"}
  devise_for :users, path: 'users', controllers: { sessions: "admins/sessions", registrations: "admins/registrations" }
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

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
