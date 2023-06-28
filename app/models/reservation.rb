class Reservation < ApplicationRecord
    validates :num_guests, :date, :time, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :bar,
    foreign_key: :bar_id,
    class_name: :Bar
end
