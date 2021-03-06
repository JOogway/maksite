class ArticlesController < ApplicationController
	before_action :authenticate_admin!, :except => [:sign_in, :show]
	helper_method :sort_direction
	def index
		@articles = Article.all
	end
	def show
    	@article = Article.find(params[:id])
  	end
	def new
		@article = Article.new
	end
	def edit
		@article = Article.find(params[:id])
	end
	def update
  		@article = Article.find(params[:id])
 
  		if @article.update(article_params)
    		redirect_to @article
  		else
    		render 'edit'
  		end
	end
	def create
		@article = Article.new(article_params)
 		@article.save
 		redirect_to @article
	end
	def destroy
   		@article = Article.find(params[:id])
   		@article.destroy
   		redirect_to articles_path, notice: "Delete success"
	end
	private
  	def article_params
    	params.require(:article).permit( :title, :text, :image, :tag)
  	end
end