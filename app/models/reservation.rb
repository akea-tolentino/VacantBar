class Reservation < ApplicationRecord
    validates :num_guests, :date, :time, presence: true
    validates :user_id, uniqueness: {
  scope: [:date, :time, :num_guests, :bar_id],
  message: "Can not double book the same reservation"
}
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :bar,
    foreign_key: :bar_id,
    class_name: :Bar
end
