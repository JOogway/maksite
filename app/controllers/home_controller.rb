class HomeController < ApplicationController
  def home
  	@article = Article.order('created_at').last
  end
end
