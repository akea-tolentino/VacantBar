bar = @reservation.bar

json.reservation do
    json.extract! @reservation,
    :id,
    :num_guests,
    :date,
    :time,
    :user_id,
    :bar_id
    json.barName bar.name
    json.barAddress bar.address
end
