class Bar < ApplicationRecord
    validates :name, :address, :price, :capacity, presence: true
    has_many_attached :images
    # has_one_attached :photo
    
end
