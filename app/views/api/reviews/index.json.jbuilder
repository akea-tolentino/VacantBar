@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :body, :author_id, :bar_id, :created_at, :updated_at
    end
end