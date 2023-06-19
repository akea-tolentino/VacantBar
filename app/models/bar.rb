class Bar < ApplicationRecord
    validates :name, :address, :price, :capacity, presence: true

    
end
