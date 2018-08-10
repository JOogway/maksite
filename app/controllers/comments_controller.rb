class CommentsController < ApplicationController

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(params[:comment]).permit(:title,:content)
    redirect_to article_path(@article), notice: "Comment created"
  end

  def new
    @article = Article.find(params[:article_id])
    @comment = @article.comments.new
  end
  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.new(comment_params)
    @comment.destroy
  end

  def _comment
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(:comment_id)
  end

  private

  def comment_params
    params.require(:comment).permit( :title, :content)
  end

  def find_article
    @article = Article.find(params[:article_id])
  end
end