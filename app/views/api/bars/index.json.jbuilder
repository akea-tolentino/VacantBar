@bars.each do |bar| 
    json.set! bar.id do
        json.extract! bar, :id, :name, :description, :bar_type, :address, :price, :capacity
        json.imageUrls bar.images.map { |file| file.url }

        reviews = bar.reviews_left
        average_rating = reviews.average(:rating) if reviews.any?
        num_reviews = reviews.count if reviews.any?

        json.averageRating average_rating
        json.numReviews num_reviews
    end
end