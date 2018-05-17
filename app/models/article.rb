class Article < ApplicationRecord
	has_many :comments
	has_many :categories
	belongs_to :admin
	has_attached_file :image, styles: {large: "1024x1024>", med: "512x512>", small: "128x128#" }
	validates_attachment_content_type :image, content_type:  ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end