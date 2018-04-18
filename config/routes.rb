Rails.application.routes.draw do
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :protocol => "http://" }
  #match "*path" => redirect("https://www.maksite.eu/%{path}"),via: [:get, :post], :constraints => { :subdomain => "" }
  devise_for :admins
  get 'articles/new'

  root 'home#home'

  resources :articles

  get 'links/links'

  get 'about/about'

  get 'contact/contact'

  get 'contact/form'

  get 'projects/projects'

  get 'news/news'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
