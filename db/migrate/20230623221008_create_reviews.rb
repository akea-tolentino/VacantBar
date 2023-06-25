class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.references :bars, null: false
      t.integer :rating, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
