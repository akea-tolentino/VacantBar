class UpdateReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :bars_id
    add_reference :reviews, :bar, foreign_key: true
  end
end
