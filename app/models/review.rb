class Review < ApplicationRecord
    validates :body, presence: true
    validates :rating, inclusion: { in: 0..5 }
    
    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :bar,
    foreign_key: :bar_id,
    class_name: :Bar
end
