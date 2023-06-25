class Bar < ApplicationRecord
    validates :name, :address, :price, :capacity, presence: true
    has_many_attached :images

    has_many :reviews_left,
    foreign_key: :bar_id,
    class_name: :Review,
    dependent: :destroy

    has_many :review_authors,
    through: :reviews_left,
    source: :author
    
end
