reviews = @reviews.includes(:author)

reviews.each do |review|
    json.set! review.id do
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