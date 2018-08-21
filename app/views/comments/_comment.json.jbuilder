json.extract! @comments, :id, :article_id, :title, :content, :created_at, :updated_at
json.url comment_url(comment, format: :json)
