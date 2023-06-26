@bars.each do |bar| 
    json.set! bar.id do
        json.extract! bar, :id, :name, :description, :bar_type, :address, :price, :capacity
        json.imageUrls bar.images.map { |file| file.url }
        json.reviews do
    @bar.reviews_left.each do |review|
        json.set! review.id do
            json.extract! review,
            :rating, 
        end
    end
end
    end
end

