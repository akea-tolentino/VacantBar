reservations = @reservations.includes(:bar)

reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :num_guests, :date, :time, :user_id, :bar_id
        json.barName reservation.bar.name
        json.barAddress reservation.bar.address
    end
end