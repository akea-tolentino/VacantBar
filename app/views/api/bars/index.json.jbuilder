json.array! @bars do |bar|
    json.id bar.id
    json.name bar.name
    json.description bar.description
    json.bar_type bar.bar_type
    json.address bar.address
    json.price bar.price
    json.capacity bar.capacity
end