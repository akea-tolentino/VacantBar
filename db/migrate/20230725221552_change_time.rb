class ChangeTime < ActiveRecord::Migration[7.0]
  def change
    remove_column :reservations, :time
    add_column :reservations, :time, :datetime
  end
end
