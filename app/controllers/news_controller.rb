class NewsController < ApplicationController
  def news
  	@articles = Article.all
  end
  def listing
  	@articles = Article.all
  end
end
