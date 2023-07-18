json.bar do
    json.extract! @bar, 
    :id, 
    :name, 
    :description, 
    :bar_type, 
    :address, 
    :price, 
    :capacity

    json.imageUrls @bar.images.map { |file| file.url }
    reviews = @bar.reviews_left
    average_rating = reviews.average(:rating) if reviews.any?
    num_reviews = reviews.count if reviews.any?

    json.averageRating average_rating
    json.numReviews num_reviews
end

json.reviews do
    @bar.reviews_left.each do |review|
        json.set! review.id do
            json.extract! review, 
            :id, 
            :rating, 
            :body, 
            :author_id, 
            :bar_id, 
            :updated_at
        end
    end
end

json.reservations do
    @bar.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation,
            :id,
            :num_guests,
            :date,
            :time,
            :bar_id,
            :user_id
        end
    end
end