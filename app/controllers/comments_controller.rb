class CommentsController < ApplicationController
	before_action :find_article, :authorize
	def create
		@comment = @article.comments.create(params[:comment].permit(:content))	
		if current_user
		@comment.user_id = current_user.id
		@comment.save
		elsif current_admin_user
		#@comment.user_id = current_user.id
		@comment.save
		end

		if @comment.save
			redirect_to article_path(@article)
		else
			render 'new'
		end
	end

	private
	def find_article
		@article = Article.find(params[:article_id])
		
	end
end
