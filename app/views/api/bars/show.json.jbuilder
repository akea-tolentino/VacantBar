json.bar do
  json.extract! @bar, 
  :id, 
  :name, 
  :description, 
  :bar_type, 
  :address, 
  :price, 
  :capacity
end