class CreateBars < ActiveRecord::Migration[7.0]
  def change
    create_table :bars do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.text :description
      t.string :type
      t.integer :price, null: false
      t.integer :capacity, null: false

      t.timestamps
    end
  end
end
