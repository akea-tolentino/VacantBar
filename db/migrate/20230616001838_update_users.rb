class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :phone, :string, null: false
    add_index :users, :phone, unique: true
  end
end
