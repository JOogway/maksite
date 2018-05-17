module ApplicationHelper

	def sortable(title, column, direction)
		direction = sort_direction == "asc" ? "desc" : "asc"
		icon = sort_direction == 'desc' ? 'down' : 'up'

		link_to news_news_path(:column =>column, :direction =>direction), class: 'tiny button secondary', id: column do
			"#{title} &nbsp; <i class=fi-arrow-#{icon}></i>".html_safe
		end
	end

end