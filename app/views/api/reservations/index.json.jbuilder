@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :num_guests, :date, :time, :user_id, :bar_id
    end
end