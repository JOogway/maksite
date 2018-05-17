class NewsController < ApplicationController
	helper_method :sort_direction
	
	def news
		if params[:column] == 'title'
			@articles = Article.all.order("title #{sort_direction}")
		elsif params[:column] == 'created_at'
			@articles = Article.all.order("created_at #{sort_direction}")
		else
			@articles = Article.all
		end	
	end

	def sortByTag
		order(tag: :asc).page(params[:articles]).per(20)
	end

		private

		def sort_direction
			%w[asc desc].include?(params[:direction]) ? params[:direction] : 'asc'
		end
	end