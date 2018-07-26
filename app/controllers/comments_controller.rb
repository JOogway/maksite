class CommentsController < ApplicationController
	before_action :find_article, :authorize
	def create
		#@article = Article.find(params[:article_id])
        #@comment = @article.comments.create(params[:comment].permit(:name, :comment))
        #redirect_to article_path(@article)
		@comment = @article.comments.create(params[:comment].permit(:content))	
		if current_user
		@comment.user_id = current_user.id
		@comment.save
		elsif current_admin_user
		@comment.user_id = current_user.id
		@comment.save
		end

		if @comment.save
			redirect_to article_path(@article)
		else
			render 'new'
		end
	end
	def index
		@comments = Article.all.comments
	end
	def show
		@article = Article.find(params[:article_id])
	end
	private
	def find_article
		@article = Article.find(params[:article_id])
		
	end
end
