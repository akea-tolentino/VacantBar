json.extract! @bar, 
:id, 
:name, 
:description, 
:bar_type, 
:address, 
:price, 
:capacity

json.imageUrls @bar.images.map { |file| file.url }

json.reviews do
    json.partial! 'reviews/review', review: @bar.review
end