class Article < ApplicationRecord
	has_many :comments
	has_many :categories
	has_one_attached :image
end