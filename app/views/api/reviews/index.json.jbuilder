reviews = @reviews.includes(:author)

reviews.each do |review|
    json.review do
        json.extract! review, 
        :id, 
        :rating, 
        :body, 
        :author_id,
        :bar_id,
        :updated_at
        json.authorUsername review.author.username
     end
end