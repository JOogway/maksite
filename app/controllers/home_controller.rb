class HomeController < ApplicationController
  def home
  	if Article.exists?
  		@article = Article.order('created_at').last
  	end
  end
end
