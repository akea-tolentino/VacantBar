json.user do
  json.extract! @user,
  :id,
  :email,
  :username,
  :created_at,
  :updated_at
end

json.reservations do
  @user.reservations_made.each do |reservation|
    json.set! reservation.id do
      json.extract! reservation,
      :id,
      :num_guests,
      :date,
      :time,
      :user_id,
      :bar_id
    end
  end
end