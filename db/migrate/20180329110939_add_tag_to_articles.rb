class AddTagToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :tag, :string
  end
end
