class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :bar, null: false, foreign_key: true
      t.integer :num_guests, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.timestamps
    end
  end
end
