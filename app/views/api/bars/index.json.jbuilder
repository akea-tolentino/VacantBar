@bars.each do |bar| 
    json.set! bar.id do
        json.extract! bar, :id, :name, :description, :bar_type, :address, :price, :capacity
        json.imageUrls bar.images.map { |file| file.url }
    end
end