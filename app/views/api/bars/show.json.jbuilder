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